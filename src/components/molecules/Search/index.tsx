import React from 'react';
import { Molecule } from './styles';

import Input from '../../atoms/Input';

function Search() {
  return (
    <Molecule>
      <Input value="" type="text" name="search" placeholder="Search playlists by name" />
    </Molecule>
  );
}

export default Search;