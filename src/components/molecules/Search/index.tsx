import React from 'react';
import { useQuery } from '../../../context/FilterContext';

import { Molecule } from './styles';
import Input from '../../atoms/Input';

function Search() {
  const { query, setQuery } = useQuery();
  return (
    <Molecule>
      <Input
        value={query}
        type="text"
        name="search"
        placeholder="Search playlists by name"
        onChange={(value: string) => setQuery(value)} 
      />
    </Molecule>
  );
}

export default Search;