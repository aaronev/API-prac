const express = require('express')
const queries = require('./models/queries')
const bodyParser = require('body-parser')
const app = express()


app.set('view engine', 'pug')
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.route('/')
  .get((req, res, next) => {
    queries.getAllPlaylists()
    .then(lists => {
      res.render('playlists', {
        playlist: lists
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
      console.log(songs)
      res.send(songs)
    })
    .catch(next)
  })

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`On port ${port}!`)
})