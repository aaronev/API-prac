const express = require('express')
const queries = require('./models/queries')
const bodyParser = require('body-parser')
const request = require('request')
const port = process.env.PORT || 3000
const app = express()

app.set('view engine', 'pug')
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.route('/')
  .get((req, res, next) => {
    res.render('index')
  })
app.route('/playlists')
  .get((req, res, next) => {
    queries.getAll('playlists')
    .then(lists => {
      res.send(lists)
    })
    .catch(next)
  })
  .post((req, res) => {
    queries.addPlaylist(req.body.name)
    res.redirect('/playlists')
  })
app.route('/playlists/:id')
  .get((req, res, next) => {
    queries.findById(req.params.id, 'playlists')
    .then(listInfo => {
      res.send(listInfo)
    })
    .catch(next)
  })
  .put((req, res) => {
    queries.updatePlaylist(req.params.id, req.body.name)
    res.redirect('/playlists')
  })
  .delete((req, res) => {
    queries.deleteInfo(req.params.id, 'playlists')
    res.redirect('/')
  })
app.route('/playlists/:id/songs')
  .get((req, res, next) => {
    queries.getPlaylistSongs(req.params.id)
    .then(playlistSongs => {
      res.send(playlistSongs)
    })
    .catch(next)
   })
app.route('/artists')
  .get((req, res, next) => {
    queries.getAll('artists')
    .then(artists => {
      res.send(artists)
    })
    .catch(next)
  })
  .post((req, res) => {
    let artist = req.body
    queries.addArtist(artist.name, artist.genre)
    res.redirect('/artists')
  })
app.route('/artists/:id')
  .get((req, res, next) => {
    queries.findById(req.params.id, 'artists')
    .then(artistInfo => {
      res.send(artistInfo)
    })
    .catch(next)
  })
  .put((req, res) => {
    let artist = req.params
    queries.updateArtist(
      req.params.id,
      artist.name, 
      artist.genre
      )
    res.redirect('/artists')
  })
  .delete((req, res) => {
    queries.deleteInfo(req.params.id, 'artists')
    res.redirect('/')
  })
app.route('/artists/:id/songs')
  .get((req, res, next) => {
    queries.getArtistSongs(req.params.id)
    .then(songs => {
      res.send(songs)
    })
    .catch(next)
  })
app.route('/albums')
  .get((req, res, next) => {
    queries.getAll('albums')
    .then(album => {
      res.send(album)
    })
    .catch(next)
  })
  .post((req, res) => {
    let album = req.body
    queries.addAlbum(album.artist_id, album.name, album.year)
    res.redirect('/albums')
  })
app.route('/albums/:id')
  .get((req, res, next) => {
    queries.findById(req.params.id, 'albums')
    .then(albumInfo => {
      res.send(albumInfo)
    })
    .catch(next)
  })
  .put((req, res, next) => {
    let album = req.body
    queries.updateAlbum(
      req.params.id,
      album.artist_id, 
      album.name, 
      album.year
      )
    res.redirect('/albums')
  })
  .delete((req, res) => {
    queries.deleteInfo(req.params.id, 'albums')
    res.redirect('/albums')
  })
app.route('/albums/:id/songs')
  .get((req, res, next) => {
    queries.getAlbumSongs(req.params.id)
    .then(songs => {
      res.send(songs)
    })
    .catch(next)
  })
app.route('/songs')
  .get((req, res, next) => {
    queries.getAll('songs')
    .then(songs => {
      res.send(songs)
    })
    .catch(next)
  })
  .post((req, res) => {
    let song = req.body
    queries.addSong(
      song.playlist_id,
      song.name, 
      song.album_id,
      song.length_sec,
      song.track_no
    )
    res.redirect('/songs')
  })
app.route('/songs/:id')
  .get((req, res, next) => {
    queries.findById(req.params.id, 'songs')
    .then(song => {
      res.send(song)
    })
    .catch(next)
  })
  .put((req, res) => {
    queries.updateSong(
      req.params.id, 
      req.body.name,
      req.body.album_id,
      req.body.length_sec,
      req.body.track_no
    )
    res.redirect('/songs')
  })
  .delete((req, res) => {
    queries.deleteInfo(req.params.id, 'songs')
    res.redirect('/songs')
  })

app.listen(port, () => {
  console.log(`On port ${port}!`)
})