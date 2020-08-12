import React from 'react';
import { Organism } from './styles';

import Filters from '../../molecules/Filters';
import Search from '../../molecules/Search';

function Header() {
  return (
    <Organism>
      <Filters />
      <Search />
    </Organism>
  );
}

export default Header;