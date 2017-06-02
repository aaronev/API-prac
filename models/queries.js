pgp = require('pg-promise')();
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/music'
const db = pgp(connectionString);

//Applies to All

function findById(id, tableName) {
  return db.any(`SELECT * FROM ${tableName} WHERE id = ${id};`)
}
function getAll(tableName) {
  return db.any(`SELECT * FROM ${tableName};`)
}
function deleteInfo(id, tableName) {
  return db.none(`DELETE FROM ${tableName} WHERE id = ${id};`)
}
function findByName(name, tableName) {
  return db.any(`SELECT * FROM ${tableName} WHERE name = $1;`, name)
}

//Add 

function addArtist(name, genre) {
  return db.none(`INSERT INTO artists (name, genre) VALUES (${name}, ${genre});`)
}
function addAlbum(artistId, name, year) {
  return db.none(`INSERT INTO albums (artist_id, name, year) VALUES (${artistId}, ${name}, ${year});`)
}
function addPlaylist(name, genre) {
  return db.none(`INSERT INTO playlists (name) VALUES (${name}, ${genre});`)
}
function addSong(playlist_id, name, album_id, length_sec, track_no) {
  return db.none(`INSERT INTO Songs (playlist_id, name, album_id, length_sec, track_no) 
    VALUES (${playlist_id}, ${name}, ${album_id}, ${length_sec}, ${track_no});`)
}


//JOINS & Nested SELECTS

function getArtistSongs(id) {
  return db.any(
    `SELECT songs.name FROM songs 
    JOIN albums ON songs.album_id = albums.id
    JOIN artists ON albums.artist_id = artists.id
    WHERE artists.id = ${id}`
  )
}
function getAlbumSongs(id) {
  return db.any(
    `SELECT songs.name FROM songs
    JOIN albums ON albums.id = songs.album_id
    WHERE albums.id = ${id}`
  )
}
function getPlaylistSongs(id) {
  return db.any(
    `SELECT songs.name FROM playlists 
    JOIN songs ON playlists.id = songs.playlist_id
    WHERE playlists.id = ${id}`
  )
}

//Update

function updatePlaylist(id, name) {
  return db.none(`UPDATE Songs SET name = ${name} WHERE id = ${id};`)
}
function updateArtist(id, name, genre) {
  return db.none(
    `UPDATE artists SET name = ${name}, genre = ${genre} WHERE id = ${id};`)
}
function updateAlbum(id, artistId, name, year) {
  return db.none(
    `UPDATE Albums SET artist_id = ${artistId}, 
    name = ${name},
    year = ${year}
    WHERE id = ${id};`
  )
}
function updateSong(id, playlist_id, name, album_id, length_sec, track_no) {
  return db.none(
    `UPDATE songs 
    SET name = ${name}, 
      playlist_id = ${playlist_id}
      album_id = ${album_id},
      length_sec = ${length_sec},
      track_no = ${track_no}
    WHERE id = ${id};`
  )
}

module.exports = {
  getAll,
  deleteInfo,
  findById,
  findByName,
  addArtist,
  addAlbum,
  addPlaylist,
  addSong,
  updatePlaylist,
  updateArtist,
  updateAlbum,
  updateSong,
  getArtistSongs,
  getAlbumSongs,
  getPlaylistSongs
};