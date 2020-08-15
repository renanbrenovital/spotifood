import React from 'react';
import { Organism } from './styles';

import Logo from '../../molecules/Logo';
import Logout from '../../molecules/Logout';
import Customer from '../../molecules/Customer';

function Aside() {  
  return (
    <Organism>
      <Logo />
      <Customer
        tag="#iFoodMusicLover"
        name="Renan"
      />
      <Logout />
    </Organism>
  );
}

export default Aside;