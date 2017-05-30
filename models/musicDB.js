const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres:/localhost:5432/music'

const client = new pg.Client(connectionString);
client.connect()
const query = client.query(
  'CREATE TABLE music(id integer PRIMARY KEY, artist TEXT, album TEXT, song TEXT, genre TEXT, playlist TEXT)'
  )