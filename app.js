const express = require('express')
const queries = require('./models/queries')
const bodyParser = require('body-parser')
const request = require('request')
const port = process.env.PORT || 3000
const app = express()

let artists
request('http://localhost:3000/artists', (error, response, body) => {
  artists = body
})

let albums;
request('http://localhost:3000/albums', (error, response, body) => {
  albums = body
})

let songs;
request('http://localhost:3000/songs', (error, response, body) => {
  songs = body
})

app.set('view engine', 'pug')
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.route('/')
  .get((req, res, next) => {
    queries.getAllPlaylists()
    .then(lists => {
      console.log('lists', lists[0].title)
      res.render('index', {
        playlists: lists,
        artists: JSON.parse(artists),
        albums: JSON.parse(albums),
        songs: JSON.parse(songs)
      })
    })
    .catch(next)
  })

app.route('/artists')
  .get((req, res, next) => {
    queries.getAllArtists()
    .then(artists => {
      res.send(artists)
    })
    .catch(next)
  })

app.route('/albums')
  .get((req, res, next) => {
    queries.getAllAlbums()
    .then(albums => {
      res.send(albums)
    })
    .catch(next)
  })

app.route('/songs')
  .get((req, res, next) => {
    queries.getAllSongs()
    .then(songs => {
      res.send(songs)
    })
    .catch(next)
  })


app.listen(port, () => {
  console.log(`On port ${port}!`)
})