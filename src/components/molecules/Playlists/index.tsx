import React from 'react';

import Play from '../../molecules/Play';
import Img from '../../atoms/Img';

import { Molecule } from './styles';

interface Playlist {
  id: string;
  name: string;
  external_urls: { spotify: string };
  images: [{ url: string }];
}

interface Props {
  data: Playlist[];
}

function Playlists(props: Props) {
  const { data } = props;
  return (
    <Molecule>
      {data.map((item: Playlist) => 
        <li key={item.id}>
          <Play href={item.external_urls.spotify} />
          <Img src={item.images[0].url} alt={item.name} />
          <h3>{item.name}</h3>
        </li>
      )}
    </Molecule>
  );
}

export default Playlists;