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
  return db.any(`SELECT * FROM ${tableName} WHERE name = ${name};`)
}

//Add 

function addArtist(name, genre) {
  return db.none(`INSERT INTO artists VALUES (${name}, ${genre});`)
}
function addAlbum(artistId, title, year) {
  return db.none(`INSERT INTO albums VALUES (${artistId}, ${title}, ${year});`)
}
function addPlaylist(name, genre) {
  return db.none(`INSERT INTO playlists VALUES (${name}, ${genre});`)
}
function addSong(title, album_id, length_sec, track_no) {
  return db.none(`INSERT INTO Songs VALUES (${title}, ${album_id}, ${length_sec}, ${track_no});`)
}

//Update

function updatePlaylist(id, title) {
  return db.none(`UPDATE Songs SET title = ${title} WHERE id = ${id};`)
}
function updateArtist(id, name, genre) {
  return db.none(
    `UPDATE artists SET name = ${name}, genre = ${genre} WHERE id = ${id};`)
}
function updateAlbum(id, artistId, title, year) {
  return db.none(
    `UPDATE Albums SET artist_id = ${artistId}, 
    title = ${title},
    year = ${year}
    WHERE id = ${id};`
  )
}
function updateSong(id, title, album_id, length_sec, track_no) {
  return db.none(
    `UPDATE songs 
    SET name = ${name}, 
      title = ${title}, 
      album_id = ${album_id},
      length_sec = ${length_sec},
      track_no = ${track_no}
    WHERE id = ${id};`
  )
}

//JOINS & Nested SELECTS

function getArtistSongs(id) {
  return db.any(
    `SELECT songs.title 
    JOIN albums 
    ON artist.id = albums.artist_id
    JOIN songs 
    ON abbums.id = song.album_id
    WHERE artist.id = ${id};`
  )
}
function getAlbumSongs(id) {
  return db.any(`SELECT songs.title 
    JOIN song 
    ON albums.id = songs.album_id
    FROM albums
    WHERE albums.id = ${id}`)
}
function getPlaylistSongs(title) {
  return db.any(`SELECT songs.title FROM playlists 
    JOIN songs ON playlists.song_id = songs.id
    WHERE title = ${title}`)
}
function addSongToPlaylists(title, albumId, lengthSec, trackNum, listName) {
  addSong(title, albumId, lengthSec, trackNum)
 return db.none( `INSERT INTO playlists (title, song_id) 
    VALUES (${listName}, (SELECT id FROM songs WHERE title = ${title}));`)
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
  addSongToPlaylists,
  updatePlaylist,
  updateArtist,
  updateAlbum,
  updateSong,
  getArtistSongs,
  getAlbumSongs,
  getPlaylistSongs
};