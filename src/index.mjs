import {getArtist, getArtistAlbums , search} from './api.mjs';
import fs from 'fs';
import { testDbCall, insertAlbums, insertSongs } from './db.mjs';

const searchResult = await search('remaster%20track:Doxy%20artist:radiohead', 'track');
// const getArtistData = await getArtist();
const albumsData = await getArtistAlbums('4Z8W4fKeB5YxbusRsdQVPb');



const convertedData = albumsData.items.map((album) => {
   return {external_id: album.id , album_name: album.name, album_id: album.id};
});


const searchData = searchResult.tracks.items.map((track) => {
  return {external_id: track.id , song_name: track.name, album_id: track.album.id};
});

insertAlbums(convertedData);

insertSongs(searchData);


testDbCall();
  


  
  
 
 