import { 
  MOCKY_URL_API,
  SPOTIFY_URL_ACCOUNTS,
  SPOTIFY_URL_API,
  CLIENT_ID,
  CLIENT_SECRET
} from '../utils/config';

import axios from 'axios';

const token = localStorage.getItem('@Spotifood:token') || '';
const { access_token } = token ? JSON.parse(token) : { access_token:'' };

const spotifyApi = axios.create({
  baseURL: SPOTIFY_URL_API,
  headers: {
    "Authorization": `Bearer ${access_token}`
  }
});

const spotifyAccounts = axios.create({
  baseURL: SPOTIFY_URL_ACCOUNTS,
  headers: { 
    "Content-Type": "application/x-www-form-urlencoded",
    'Authorization': 'Basic ' + (new Buffer(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'))
  }
});

const apiMocky = axios.create({
  baseURL: MOCKY_URL_API,
});

export {
  spotifyAccounts,
  spotifyApi,
  apiMocky
};