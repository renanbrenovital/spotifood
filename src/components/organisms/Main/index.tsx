import React, { useState, useEffect } from 'react';
import { apiSpotify } from '../../../services/api';

import { Organism } from './styles';

import Play from '../../molecules/Play';
import Img from '../../atoms/Img';

interface Playlist {
  id: string;
  name: string;
  external_urls: { spotify: string };
  images: [{ url: string }];
}

function Main() {
  const [featuredPlaylists, setFeaturedPlaylists] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await apiSpotify.get('/browse/featured-playlists');
      setFeaturedPlaylists(data.playlists.items);
    }
    
    getData();
  }, []);

  return (
    <Organism>
      <h2>Featured playlists at Spotify</h2>
      <ul>
        {featuredPlaylists.map((playlist: Playlist) => 
          <li key={playlist.id}>
            <Play href={playlist.external_urls.spotify} />
            <Img src={playlist.images[0].url} alt={playlist.name} />
            <h3>{playlist.name}</h3>
          </li>
        )}
      </ul>
    </Organism>
  );
}

export default Main;