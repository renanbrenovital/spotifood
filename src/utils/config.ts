import * as dotenv from 'dotenv';

dotenv.config({ path: __dirname + './env' });

export const MOCKY_URL_API = process.env.MOCKY_URL_API ?? 'http://www.mocky.io/v2/';

export const SPOTIFY_URL_ACCOUNTS = process.env.SPOTIFY_URL_ACCOUNTS ?? 'https://accounts.spotify.com/';
export const SPOTIFY_URL_API = process.env.SPOTIFY_URL_API ?? 'https://api.spotify.com/v1/';

export const CLIENT_ID = process.env.CLIENT_ID ?? '1f5cf2cc56dc40abb4dc1ab3ac3c797d';
export const CLIENT_SECRET = process.env.CLIENT_SECRET ?? 'd8cf1f7d6fda42f883ceec22137aaca5';

export const REDIRECT_URI = process.env.REDIRECT_URI ?? 'https://spotifood-react.netlify.app/';
export const SCOPE = process.env.SCOPE ?? 'user-read-private user-read-email';