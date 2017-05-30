DROP DATABASE IF EXISTS music;
CREATE DATABASE music;

\c music

DROP TABLE IF EXISTS artists;
CREATE TABLE artists (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(20),
  genre VARCHAR(20)
);

DROP TABLE IF EXISTS albums;
CREATE TABLE albums (
  artist VARCHAR(20),
  title VARCHAR(20),
  year INTEGER
);

DROP TABLE IF EXISTS songs;
CREATE TABLE songs (
  title VARCHAR(20),
  album VARCHAR(20),
  length_sec INTEGER,
  track_num INTEGER
);

DROP TABLE IF EXISTS playlists;
CREATE TABLE playlists (
  title VARCHAR(20),
  song VARCHAR(20)
);