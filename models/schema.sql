DROP TABLE IF EXISTS artists;
CREATE TABLE artists (
  id SERIAL PRIMARY KEY,
  name VARCHAR(60),
  genre VARCHAR(60)
);

DROP TABLE IF EXISTS albums;
CREATE TABLE albums (
  id SERIAL PRIMARY KEY,
  artist_id INTEGER REFERENCES artists,
  name VARCHAR(60),
  year INTEGER
);

DROP TABLE IF EXISTS playlists;
CREATE TABLE playlists (
  id SERIAL PRIMARY KEY,
  name VARCHAR(60)
);

DROP TABLE IF EXISTS songs;
CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  playlist_id INTEGER REFERENCES playlists,
  name VARCHAR(60),
  album_id INTEGER REFERENCES albums,
  length_sec INTEGER,
  track_no INTEGER
);


INSERT INTO artists (name, genre) VALUES ( 'Paul', 'Nania');
INSERT INTO artists (name, genre) VALUES ( 'Some Artists', 'A Cool Genre');
INSERT INTO artists (name, genre) VALUES ( 'Another Artists', 'Cooler Genre');
INSERT INTO albums (artist_id, name, year) VALUES (1, 'Brown Sugar', 1995);
INSERT INTO albums (artist_id, name, year) VALUES (1, 'Voodoo', 2000);
INSERT INTO albums (artist_id, name, year) VALUES (2, 'House with No Home', 2008);
INSERT INTO albums (artist_id, name, year) VALUES (2, 'Another Album', 2002);
INSERT INTO albums (artist_id, name, year) VALUES (3, 'The Coolest Album', 1995);
INSERT INTO playlists (name) VALUES ('Spacey'); 
INSERT INTO playlists (name) VALUES ('Dance Jams'); 
INSERT INTO playlists (name) VALUES ('Romantic Nitez');
INSERT INTO songs (playlist_id, name, album_id, length_sec, track_no) VALUES (1, 'Playa Playa', 1, 426, 1);
INSERT INTO songs (playlist_id, name, album_id, length_sec, track_no) VALUES (1, 'Devils Pie', 1, 321, 2);
INSERT INTO songs (playlist_id, name, album_id, length_sec, track_no) VALUES (1, 'Left & Right', 1, 286, 3);
INSERT INTO songs (playlist_id, name, album_id, length_sec, track_no) VALUES (2, 'Brown Sugar', 2, 263, 1);
INSERT INTO songs (playlist_id, name, album_id, length_sec, track_no) VALUES (2, 'Alright', 2, 313, 2);
INSERT INTO songs (playlist_id, name, album_id, length_sec, track_no) VALUES (2, 'Jonz In My Bonz', 2, 356, 3);
INSERT INTO songs (playlist_id, name, album_id, length_sec, track_no) VALUES (3, 'Rude to Rile', 3, 209, 2);
INSERT INTO songs (playlist_id, name, album_id, length_sec, track_no) VALUES (3, 'Working Poor', 3, 196, 3);
INSERT INTO songs (playlist_id, name, album_id, length_sec, track_no) VALUES (4, 'Lost Ones', 4, 333, 2);
INSERT INTO songs (playlist_id, name, album_id, length_sec, track_no) VALUES (4, 'Ex Factor', 4, 326, 3);
INSERT INTO songs (playlist_id, name, album_id, length_sec, track_no) VALUES (4, 'To Zion', 4, 369, 4);
INSERT INTO songs (playlist_id, name, album_id, length_sec, track_no) VALUES (1, 'Bird Flu', 5, 204, 2);
INSERT INTO songs (playlist_id, name, album_id, length_sec, track_no) VALUES (2, 'Boyz', 5, 207, 3);
INSERT INTO songs (playlist_id, name, album_id, length_sec, track_no) VALUES (3, 'Jimmy', 5, 209, 4);
INSERT INTO songs (playlist_id, name, album_id, length_sec, track_no) VALUES (4, 'Hussel', 5, 265, 5);