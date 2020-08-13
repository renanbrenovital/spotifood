import React, { useState } from 'react';
import { Molecule } from './styles';
import _ from 'lodash';

import Input from '../../atoms/Input';

function Search() {
  const [value, setValue] = useState('');

  const search = (q: string) => {
    console.log(`Querying for ${q}`)
  }

  const delayedQuery = _.debounce((q: string) => search(q), 1000);

  const onChange = (value: string) => {
    setValue(value);
    delayedQuery(value);
  }

  return (
    <Molecule>
      <Input value={value} type="text" name="search" placeholder="Search playlists by name" onChange={(value: string) => onChange(value)} />
    </Molecule>
  );
}

export default Search;