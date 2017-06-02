const express = require('express')
const queries = require('./models/queries')
const bodyParser = require('body-parser')
const request = require('request')
const port = process.env.PORT || 3000
const app = express()

let artists
let albums
let songs

app.set('view engine', 'pug')
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.route('/')
  .get((req, res, next) => {
    res.render('api')
  })

//playlist
app.route('/playlists')
  .get((req, res, next) => {
    queries.getAll('playlists')
    .then(lists => {
      res.send(lists)
    })
    .catch(next)
  })
  .post((req, res, next) => {
    queries.addPlaylist(req.body.name, req.body.genre)
    queries.getAllPlaylists()
    .then(lists => {
      res.send(lists)
    })
    .catch(next)
  })

// app.route('/playlists/:id')
//   .get((req, res) => {
//     queries.findById(req.params.id, 'playlists')
//     .then(listInfo => {
//       res.send(listInfo)
//     })
//   })
//   .put((req, res) => {
//     queries.updateLists(req.params.id, req.body.title)
//     res.redirect('/playlists')
//   })
//   .delete((req, res, next) => {
//     queries.deletePlaylists(req.body.name)
//     .then(res.redirect('/'))
//     .catch(next)
//   })

// app.route('playlists/:id/songs')
//   .get((req, res, next) => {
//     queries.getAllSongsFromLists(req.body.title)
//     .then(songsInLists => {
//       res.send(songsInLists)
//     })
//     .catch(next)
//   })
//   .post((req, res, next) => {
//     let song = req.body
//     queries.addSongsToLists(
//       song.title,
//       song.albumId,
//       song.lengthSec,
//       song.trackNum,
//       song.listName
//       )
//     queries.getAllSongsFromLists(song.listName)
//     .then(addedSong => {
//       res.send(addedSong)
//     })
//     .catch(next)
//   })

//artist
app.route('/artists')
  .get((req, res, next) => {
    queries.getAll('artists')
    .then(artists => {
      res.send(artists)
    })
    .catch(next)
  })
//   .post((req, res) => {
//     let artist = req.body
//     queries.addArtists(artist.name, artist.genre)
//     res.redirect('/artists')
//   })

// app.route('/artists/:id')
//   .get((req, res, next) => {
//     queries.findById(req.params.id, artists)
//     .then(artistInfo => {
//       res.send(artistInfo)
//     })
//     .catch(next)
//   })
//   .put((req, res) => {
//     let artist = req.params
//     queries.updateArtist(
//       req.params.id,
//       artist.name, 
//       artist.genre
//       )
//     .then(artistInfoEdit => {
//       res.send(artistInfoEdit)
//     })
//   })
//   .delete((req, res) => {
//     queries.deleteArtist(req.params.id)
//   })

// app.route('/artists/:id/songs')
//   .get((req, res, next) => {
//     queries.getArtistSongs(req.params.id)
//     .then(songs => {
//       res.send(songs)
//     })
//   })

// app.route('/artists/:name')
//   .get((req, res, next) => {
//     console.log(req.params.name)
//     queries.getArtistByName(req.params.name)
//     .then( artistInfo => {
//       res.send(artistInfo)
//     })
//   })


//albums
app.route('/albums')
  .get((req, res, next) => {
    queries.getAll('albums')
    .then(album => {
      res.send(album)
    })
    .catch(next)
  })
//   .post((req, res) => {
//     let album = req.body
//     queries.addAlbum(album.artist_id, album.title, album.year)
//     res.redirect('/albums')
//   })

// app.route('/albums/:id')
//   .get((req, res, next) => {
//     queries.findById(req.params.id, albums)
//     .then(albumInfo => {
//       res.send(albumInfo)
//     })
//     .catch(next)
//   })
//   .put((req, res, next) => {
//     let album = req.body
//     queries.updateAlbum(
//       req.params.id,
//       album.artist_id, 
//       album.title, 
//       album.year
//       )
//     queries.findById(req.params.id, albums)
//     .then(albumInfoEdit => {
//       res.send(albumInfoEdit)
//     })
//     .catch(next)
//   })
//   .delete((req, res) => {
//     queries.deleteAlbum(req.params.id)
//     res.redirect('/albums')
//   })

// app.route('/albums/:id/songs')
//   .get((req, res, next) => {
//     queries.getAllSongsInAlbum(req.params.id)
//     .then(songs => {
//       res.send(songs)
//     })
//     .catch(next)
//   })

//songs
app.route('/songs')
  .get((req, res, next) => {
    queries.getAll('songs')
    .then(songs => {
      res.send(songs)
    })
    .catch(next)
  })
//   .post((req, res, next) => {
//     let song = req.body
//     title, album_id, length_sec, track_no
//     queries.addSong(
//       song.title, 
//       song.album_id,
//       song.length_sec,
//       song.track_no
//     )
//     .catch(next)
//     res.redirect('/songs')
//   })
  
// app.route('/songs/:id')
//   .get((req, res, next) => {
//     queries.findById(req.params.id, songs)
//     .then(song => {
//       res.send(song)
//     })
//     .catch(next)
//   })
//   .put((req, res) => {
//     id, title, album_id, length_sec, track_no
//     queries.updateSong(
//       req.params.id, 
//       req.body.title,
//       req.body.album_id,
//       req.body.length_sec,
//       req.body.track_no
//     )
//     res.redirect('/songs')
//   })
//   .delete((req, res) => {
//     queries.deleteSong(req.params.id)
//     res.redirect('/songs')
//   })

app.listen(port, () => {
  console.log(`On port ${port}!`)
})