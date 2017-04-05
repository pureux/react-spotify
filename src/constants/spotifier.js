import SpotifyWebApi from 'spotify-web-api-node';
import { CLIENT_ID, CLIENT_SECRET } from './config';

let spotifyApi = new SpotifyWebApi({
  clientId : CLIENT_ID,
  clientSecret : CLIENT_SECRET
});

export default spotifyApi;