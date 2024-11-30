import axios from "axios";
import qs from "qs";
import dotenv from 'dotenv';

dotenv.config();

async function getToken() {
  let data = qs.stringify({
    grant_type: "client_credentials",
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
  });
  let tokenConfig = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://accounts.spotify.com/api/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data.toString(),
  };
 let token = null;
  const response = await axios.request(tokenConfig).then((response) => {
     token = response.data.access_token;
  });
  return token;
}


export {getToken};


