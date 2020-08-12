import React from 'react';
import { Organism } from './styles';

import Logo from '../../molecules/Logo';
import Customer from '../../molecules/Customer';
import Logout from '../../molecules/Logout';

function Aside() {
  return (
    <Organism>
      <Logo />
      <Customer />
      <Logout />
    </Organism>
  );
}

export default Aside;