import axios from "axios";
import { getToken } from "./auth.mjs";

async function getArtist(artistId) {
    const token = await getToken();
    const url = new URL(`v1/artists/${artistId}`, 'https://api.spotify.com/');
    let artistConfig = {
      method: "get",
      maxBodyLength: Infinity,
      url: url.toString(),
      headers: {
        'Authorization': `Bearer ${token}`  // Use the token dynamically
      },
    };
    const result = await axios
    .request(artistConfig);
    return result.data;
  }

  async function getArtistAlbums(artistId) {
    const token = await getToken();
    const url = new URL(`v1/artists/${artistId}/albums`, 'https://api.spotify.com/');
    let artistConfig = {
      method: "get",
      maxBodyLength: Infinity,
      url: url.toString(),
      headers: {
        'Authorization': `Bearer ${token}`  // Use the token dynamically
      },
    };
    const result = await axios
    .request(artistConfig);
    return result.data;
  }

  async function search(query , type) {
    const token = await getToken();
    const url = new URL(`v1/search`, 'https://api.spotify.com/');
    url.searchParams.set('q', query);
    url.searchParams.set('type', type);
    let artistConfig = {
      method: "get",
      maxBodyLength: Infinity,
      url: url.toString(),
      headers: {
        'Authorization': `Bearer ${token}`  // Use the token dynamically
      },
    };
    const result = await axios
    .request(artistConfig);
    return result.data;
  }

  
  export {getArtist, getArtistAlbums, search};

  