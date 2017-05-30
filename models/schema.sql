DROP DATABASE IF EXISTS music;
CREATE DATABASE music;

\c

DROP TABLE IF EXISTS artists;
CREATE TABLE artists (
  id INTEGER PRIMARY KEY,
  name TEXT,
  genre TEXT
);

-- note: paths differ depending on user
COPY artists FROM '/Users/aaronvillanueva/Desktop/api-prac/models/artists.csv' DELIMITER ',';

DROP TABLE IF EXISTS albums;
CREATE TABLE albums (
  id INTEGER PRIMARY KEY,
  artist_id INTEGER REFERENCES artists,
  title TEXT,
  year INTEGER
);

COPY albums FROM '/Users/aaronvillanueva/Desktop/api-prac/models/albums.csv' DELIMITER ',';

DROP TABLE IF EXISTS songs;
CREATE TABLE songs (
  title TEXT,
  album_id INTEGER REFERENCES albums,
  length_sec INTEGER,
  track_no INTEGER
);

COPY songs FROM '/Users/aaronvillanueva/Desktop/api-prac/models/songs.csv' DELIMITER ',';

CREATE TABLE playlists (
  title TEXT,
  song_id INTEGER REFERENCES songs,
  album_id INTEGER REFERENCES albums,
  artist_id INTEGER REFERENCES artists
);

COPY playlists FROM '/Users/aaronvillanueva/Desktop/api-prac/models/playlists.csv' DELIMITER ',';
