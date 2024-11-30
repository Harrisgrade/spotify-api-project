const { default: axios } = require('axios');


function fetchData() {
    return axios.get('https://reqres.in/api/unknown/')
      .then((res) => {
        return res.data.data
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  fetchData().then((filteredData) => {
    console.log(filteredData);
  });

  const axios = require('axios');

  // Step 1: Get the OAuth token
  let data = new URLSearchParams({
    'grant_type': 'client_credentials',
    'client_id': 'your-client-id',       // replace with your client_id
    'client_secret': 'your-client-secret' // replace with your client_secret
  });
  
  let tokenConfig = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://accounts.spotify.com/api/token',
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data : data.toString() // Convert URLSearchParams to string
  };
  
  // Request the token
  axios.request(tokenConfig)
  .then((response) => {
    const token = response.data.access_token;  // Extract the access token
    
    // Step 2: Use the token to get artist data
    let artistConfig = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb', // URL to get artist data
      headers: { 
        'Authorization': `Bearer ${token}`  // Use the token dynamically
      }
    };
    
    // Make the request to Spotify API for artist data
    axios.request(artistConfig)
    .then((response) => {
      console.log(JSON.stringify(response.data));  // Print artist data
    })
    .catch((error) => {
      console.error('Error fetching artist data:', error);
    });
  })
  .catch((error) => {
    console.error('Error fetching token:', error);
  });
  






