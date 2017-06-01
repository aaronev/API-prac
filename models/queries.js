const pgp = require('pg-promise')();
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/music'
const db = pgp(connectionString);

//Applies to All
function getAllInfo() {
  return db.manyOrNone( 
    `SELECT * FROM playlists
    JOIN songs ON playlists.song_id = songs.id
    JOIN albums ON songs.album_id = albums.id
    JOIN artists ON albums.artist_id = artists.id`
)}

function findById(id, tableName) {
  return db.any(`SELECT DISTINCT * FROM ${tableName} WHERE id = ${id};`)
}

//Artists
function getAllArtists() {
  return db.any('SELECT * FROM artists;')
}

function getArtistsByName(name) {
  return db.one (`SELECT * FROM artists WHERE name = ${name};`)
}

function addArtists(id, name, genre) {
  return db.none(`INSERT INTO artists VALUES (${id}, ${name}, ${genre});`)
}

function updateArtists(id, name, genre) {
  return db.none(`UPDATE artists SET name = ${name}, genre = ${genre};`)
}

function deleteArtists(name) {
  return db.none(`DELETE FROM artists WHERE name = $1`, name)
}

//Albums
function getAllAlbums() {
  return db.any('SELECT DISTINCT title FROM albums;')
}

function getAlbumsByName(name) {
  return db.one (`SELECT * FROM Albums WHERE name = ${name};`)
}

function addAlbums(id, name, genre) {
  return db.none(`INSERT INTO Albums VALUES (${id}, ${name}, ${genre});`)
}

function updateAlbums(id, name, genre) {
  return db.none(`UPDATE Albums SET name = ${name}, genre = ${genre};`)
}

function deleteAlbums(title) {
  return db.none(`DELETE FROM artists WHERE title = $1`, title)
}

//Songs
function getAllSongs() {
  return db.any('SELECT * FROM songs;')
}

function getSongsByName(name) {
  return db.one (`SELECT * FROM Songs WHERE name = ${name};`)
}

function addSongs(id, name, genre) {
  return db.none(`INSERT INTO Songs VALUES (${id}, ${name}, ${genre});`)
}

function updateSongs(id, name, genre) {
  return db.none(`UPDATE Songs SET name = ${name}, genre = ${genre};`)
}

function deleteSongs(id) {
  return db.none(`DELETE FROM artists WHERE id = ${id}`)
}

//Playlists
function getAllPlaylists() {
  return db.any('SELECT DISTINCT title FROM playlists;')
}

function getSongsByName(name) {
  return db.one (`SELECT * FROM Songs WHERE name = ${name};`)
}

function addSongs(id, name, genre) {
  return db.none(`INSERT INTO Songs VALUES (${id}, ${name}, ${genre});`)
}

function updateSongs(id, name, genre) {
  return db.none(`UPDATE Songs SET name = ${name}, genre = ${genre};`)
}

function deletePlaylists(title) {
  return db.none(`DELETE FROM playlists WHERE title = $1`, title)
}

module.exports = {
  deleteArtists,
  deletePlaylists,
  getAllInfo,
  getAllArtists,
  getAllPlaylists,
  getAllAlbums,
  getAllSongs,
  findById,
  getArtistsByName
};