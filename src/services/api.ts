import axios from 'axios';
import { token } from './auth';

const accountsSpotify = axios.create({
  baseURL: 'https://accounts.spotify.com/api/',
  headers: { 
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": "Basic MWY1Y2YyY2M1NmRjNDBhYmI0ZGMxYWIzYWMzYzc5N2Q6ZDhjZjFmN2Q2ZmRhNDJmODgzY2VlYzIyMTM3YWFjYTU="
  }
});

const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    "Authorization": `Bearer ${token}`
  }
});

const apiMocky = axios.create({
  baseURL: "http://www.mocky.io/v2/",
});

export {
  accountsSpotify,
  apiSpotify,
  apiMocky
};