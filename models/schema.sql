-- Note: I did not work on the INIT 4 GOAL, which was required. I had to created database.

DROP TABLE IF EXISTS artists;
CREATE TABLE artists (
  id SERIAL PRIMARY KEY,
  name VARCHAR(60),
  genre VARCHAR(60)
);

INSERT INTO artists (name, genre) VALUES ( 'Paul', 'Nania');
INSERT INTO artists (name, genre) VALUES ( 'Some Artists', 'A Cool Genre');
INSERT INTO artists (name, genre) VALUES ( 'Another Artists', 'Cooler Genre');
INSERT INTO artists (name, genre) VALUES ( 'Snoop Dog', 'R&B');

DROP TABLE IF EXISTS albums;
CREATE TABLE albums (
  id SERIAL PRIMARY KEY,
  artist_id INTEGER REFERENCES artists,
  title VARCHAR(60),
  year INTEGER
);

INSERT INTO albums (artist_id, title, year) VALUES (1, 'Brown Sugar', 1995);
INSERT INTO albums (artist_id, title, year) VALUES (1, 'Voodoo', 2000);
INSERT INTO albums (artist_id, title, year) VALUES (2, 'House with No Home', 2008);
INSERT INTO albums (artist_id, title, year) VALUES (2, 'Another Album', 2002);
INSERT INTO albums (artist_id, title, year) VALUES (3, 'The Coolest Album', 1995);

DROP TABLE IF EXISTS songs;
CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  title VARCHAR(60),
  album_id INTEGER REFERENCES albums,
  length_sec INTEGER,
  track_no INTEGER
);

INSERT INTO songs (title, album_id, length_sec, track_no) VALUES ('Playa Playa', 1, 426, 1);
INSERT INTO songs (title, album_id, length_sec, track_no) VALUES ('Devils Pie', 1, 321, 2);
INSERT INTO songs (title, album_id, length_sec, track_no) VALUES ('Left & Right', 1, 286, 3);
INSERT INTO songs (title, album_id, length_sec, track_no) VALUES ('Brown Sugar', 2, 263, 1);
INSERT INTO songs (title, album_id, length_sec, track_no) VALUES ('Alright', 2, 313, 2);
INSERT INTO songs (title, album_id, length_sec, track_no) VALUES ('Jonz In My Bonz', 2, 356, 3);
INSERT INTO songs (title, album_id, length_sec, track_no) VALUES ('Rude to Rile', 3, 209, 2);
INSERT INTO songs (title, album_id, length_sec, track_no) VALUES ('Working Poor', 3, 196, 3);
INSERT INTO songs (title, album_id, length_sec, track_no) VALUES ('Lost Ones', 4, 333, 2);
INSERT INTO songs (title, album_id, length_sec, track_no) VALUES ('Ex Factor', 4, 326, 3);
INSERT INTO songs (title, album_id, length_sec, track_no) VALUES ('To Zion', 4, 369, 4);
INSERT INTO songs (title, album_id, length_sec, track_no) VALUES ('Bird Flu', 5, 204, 2);
INSERT INTO songs (title, album_id, length_sec, track_no) VALUES ('Boyz', 5, 207, 3);
INSERT INTO songs (title, album_id, length_sec, track_no) VALUES ('Jimmy', 5, 209, 4);
INSERT INTO songs (title, album_id, length_sec, track_no) VALUES ('Hussel', 5, 265, 5);

CREATE TABLE playlists (
  id SERIAL PRIMARY KEY,
  title VARCHAR(60),
  song_id INTEGER REFERENCES songs
);

INSERT INTO playlists (title, song_id) VALUES ('Dance Jams', 1); 
INSERT INTO playlists (title, song_id) VALUES ('Dance Jams', 2); 
INSERT INTO playlists (title, song_id) VALUES ('Dance Jams', 3); 
INSERT INTO playlists (title, song_id) VALUES ('Dance Jams', 4); 
INSERT INTO playlists (title, song_id) VALUES ('Dance Jams', 5); 
INSERT INTO playlists (title, song_id) VALUES ('Dance Jams', 6); 
INSERT INTO playlists (title, song_id) VALUES ('Romantic Nitez', 7);
INSERT INTO playlists (title, song_id) VALUES ('Romantic Nitez', 8);
INSERT INTO playlists (title, song_id) VALUES ('Romantic Nitez', 9);
INSERT INTO playlists (title, song_id) VALUES ('Romantic Nitez', 10);
INSERT INTO playlists (title, song_id) VALUES ('Romantic Nitez', 11);
INSERT INTO playlists (title, song_id) VALUES ('Romantic Nitez', 12);
INSERT INTO playlists (title, song_id) VALUES ('Spacey', 13); 
INSERT INTO playlists (title, song_id) VALUES ('Spacey', 14); 
INSERT INTO playlists (title, song_id) VALUES ('Spacey', 15); 

