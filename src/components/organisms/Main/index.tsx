import React, { useState, useEffect } from 'react';
import { useFilter, useQuery } from '../../../context/FilterContext';
import useDebounceState from '../../../hooks/useDebounceState';

import { spotifyApi } from '../../../services/api';

import { Organism } from './styles';
import Playlists from '../../molecules/Playlists';

function Main() {
  const [playlistsItems, setPlaylistsItems] = useState([]);  
  
  const { locale, country, timestamp, limit, offset } = useFilter();  
  const { query } = useQuery();
  
  const filters: Array<string> = [];
  
  if(locale.value)
    filters.push(`locale=${locale.value}`);
  
  if(country.value)
    filters.push(`country=${country.value}`);
  
  if(limit.value)
    filters.push(`limit=${limit.value}`);
  
  if(offset.value)
    filters.push(`offset=${offset.value}`);
  
  if(timestamp.value) {
    const dateISO = new Date(timestamp.value).toISOString();
    const timestampISO = dateISO.substr(0,19);
    filters.push(`timestamp=${timestampISO}`);
  }
  
  const params = (filters.length > 0) ? `?${filters.join('&')}` : '';

  const random = new Date().toString();
  const every30seconds = useDebounceState(random, 30000);
  const delayedQuery = useDebounceState(query, 200);
  const delayedParams = useDebounceState(params, 1000);
  
  useEffect(() => {
    const getData = async () => {          
      const response = delayedQuery ?
        await spotifyApi.get(`/search?q=name:${delayedQuery}&type=playlist`) :
        await spotifyApi.get(`/browse/featured-playlists${delayedParams}`);
      
      const { data: { playlists } } = response;
      
      setPlaylistsItems(playlists.items);
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