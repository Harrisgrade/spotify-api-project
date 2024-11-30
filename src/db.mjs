import dotenv from 'dotenv';
import pg from "pg";
const { Pool, Client } = pg;

dotenv.config();

async function testDbCall() {}
async function insertAlbums(albums) {
  const client = new Client({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
  });

  await client.connect();
  for await (const album of albums) {
    const text =
      "INSERT INTO albums(album_name, external_id) VALUES($1, $2) RETURNING *";
    const values = [album.album_name, album.external_id];
    const res = await client.query(text, values);
    console.log(res.rows[0]);
    console.log(process.env.DB_USER);
  }

  await client.end();
}

async function insertSongs(tracks) {
  const client = new Client({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
  });
  await client.connect();
  for await (const track of tracks) {
    const text =
      "INSERT INTO songs(external_id, song_name, album_id) VALUES($1, $2, $3) RETURNING *";
          const values = [track.external_id, track.song_name, track.album_id];
    const res = await client.query(text, values);
    console.log(res.rows[0]);
    console.log(text);
  }

  await client.end();
}

export {testDbCall, insertAlbums, insertSongs };
