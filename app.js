const express = require('express')
const queries = require('./models/queries')
const bodyParser = require('body-parser')
const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res, next) => {
  queries.getAllPlaylists()
  .then(lists => {
    res.render('index', {playlist: lists})
  })
  .catch(next)
})

app.get('/artists', (req, res, next) => {
  queries.getAllArtists()
  .then(artists => {
    console.log(artists)
    res.render('artists', {artists: artists})
  })
  .catch(next)
})

app.get('/albums', (req, res, next) => {
  queries.getAllAlbums()
  .then(albums => {
    console.log(albums)
    res.render('albums', {albums: albums})
  })
  .catch(next)
})

app.get('/songs', (req, res, next) => {
  queries.getAllSongs()
  .then(songs => {
    console.log(songs)
    res.render('songs', {songs: songs})
  })
  .catch(next)
})

const port = process.env.PORT || 3000
app.listen(port, function() {
  console.log(`On port ${port}!`)
})