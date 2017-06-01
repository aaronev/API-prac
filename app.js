const express = require('express')
const queries = require('./models/queries')
const bodyParser = require('body-parser')
const request = require('request')
const port = process.env.PORT || 3000
const app = express()

let artists
let albums
let songs

request('http://localhost:3000/artists', (error, response, body) => {
  artists = body
})


request('http://localhost:3000/albums', (error, response, body) => {
  albums = body

})


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
      res.render('index', {
        playlists: lists,
        artists: JSON.parse(artists),
        albums:  JSON.parse(albums),
        songs: JSON.parse(songs)
      })
    })
    .catch(next)
  })

app.route('/playlists')
  .get((req, res, next) => {
    queries.getAllPlaylists()
    .then(lists => {
      res.send(lists)
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
    .then(album => {
      res.send(album)
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