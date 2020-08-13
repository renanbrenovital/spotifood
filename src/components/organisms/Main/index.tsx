import React, { useState, useEffect } from 'react';
import { apiSpotify } from '../../../services/api';

import { Organism } from './styles';

interface Playlist {
  id: string;
  description: string;
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
      <ul>
        {featuredPlaylists.map((playlist: Playlist) => 
          <li key={playlist.id}>{playlist.description}</li>
        )}
      </ul>
    </Organism>
  );
}

export default Main;