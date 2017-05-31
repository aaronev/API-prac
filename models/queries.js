const pgp = require('pg-promise')();
const connectionString = 'postgres://localhost:5432/music';
const db = pgp(connectionString);

//Artists
function getAllArtists() {
  return db.any('SELECT * FROM artists;')
}

function getArtistsByID(id) {
  return db.one(`SELECT * FROM artists WHERE id = ${id};`)
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

function deleteArtists(id) {
  return db.none(`DELETE FROM artists WHERE id = ${id}`)
}

//Albums
function getAllAlbums() {
  return db.any('SELECT * FROM Albums;')
}

function getAlbumsByID(id) {
  return db.one(`SELECT * FROM Albums WHERE id = ${id};`)
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

function deleteAlbums(id) {
  return db.none(`DELETE FROM artists WHERE id = ${id}`)
}

//Songs
function getAllSongs() {
  return db.any('SELECT * FROM Songs;')
}

function getSongsByID(id) {
  return db.one(`SELECT * FROM Songs WHERE id = ${id};`)
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
  return db.any('SELECT * FROM playlists;')
}

function getSongsByID(id) {
  return db.one(`SELECT * FROM Songs WHERE id = ${id};`)
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

module.exports = {
  getAllSongs,
  addSong,
  updateSong,
  findSong,
  deleteSong
};