import React, { useState, useEffect } from 'react';
import { useFilter, useQuery } from '../../../context/FilterContext';
import useDebounceState from '../../../hooks/useDebounceState';

import { apiSpotify } from '../../../services/api';

import { Organism } from './styles';
import Playlists from '../../molecules/Playlists';

function Main() {
  const [playlistsItems, setPlaylistsItems] = useState([]);  
  
  const { locale, country, timestamp, limit, offset } = useFilter();  
  const { query } = useQuery();
  
  const filters = [];  
  
  if(locale)
    filters.push(`locale=${locale}`);
  
  if(country)
    filters.push(`country=${country}`);
  
  if(limit)
    filters.push(`limit=${limit}`);
  
  if(offset)
    filters.push(`offset=${offset}`);
  
  if(timestamp) {
    const dateISO = new Date(timestamp).toISOString();
    const timestampISO = dateISO.substr(0,19);
    filters.push(`timestamp=${timestampISO}`);
  }
  
  const params = (filters.length > 0) ? `?${filters.join('&')}` : '';

  const random = new Date();
  const every30seconds = useDebounceState(random, 30000);
  const delayedQuery = useDebounceState(query, 500);
  const delayedParams = useDebounceState(params, 1000);
  
  useEffect(() => {
    const getData = async () => {
      try {     
        const response = delayedQuery ?
          await apiSpotify.get(`/search?q=name:${delayedQuery}&type=playlist`) :
          await apiSpotify.get(`/browse/featured-playlists${delayedParams}`);
        
        const { data: { playlists } } = response;
        
        setPlaylistsItems(playlists.items);
      } catch (error) {
        throw new Error(error);
      }
    }  
    
    getData();
  }, [delayedQuery, delayedParams, every30seconds]);

  return (
    <Organism>
      <h2>Featured playlists at Spotify</h2>
      <Playlists data={playlistsItems} />
    </Organism>
  );
}

export default Main;