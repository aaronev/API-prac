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
  album_id INTEGER REFERENCES albums,
  artist_id INTEGER REFERENCES artists
);

COPY playlists FROM '/Users/aaronvillanueva/Desktop/api-prac/models/playlists.csv' DELIMITER ',';

SELECT * FROM songs 
JOIN albums ON songs.album_id = albums.id
JOIN artists ON albums.artist_id = artists.id
JOIN playlists ON albums.id = playlists.album_id