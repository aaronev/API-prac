const pgp = require('pg-promise')();
const connectionString = 'postgres://localhost:5432/music';
const db = pgp(connectionString);

function getAllSongs() {
	return db.any('SELECT * FROM songs')
}

function addSong(song, author, genre) {
	return db.none(`INSERT INTO music(title, author, genre) VALUES(${title}, ${author}, ${genre})`)
}

function updateSong(id, song, artist, genre, album) {
	return  db.one(
		`UPDATE books SET title = $1, author = $2, genre = $3 WHERE id = $4 returning *`, [song, artist, genre, bookId]
		)
}

function findSong(songId) {
	return db.one('SELECT * FROM books WHERE id = $1', songId)
}

function deleteSong(songId) {
	return db.none('DELETE FROM bookstore WHERE id = $1', songId)
}

module.exports = {
	getAllSongs,
	addSong,
	updateSong,
	findSong,
	deleteSong
};