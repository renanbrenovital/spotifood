import React from 'react';
import { Organism } from './styles';

import Logo from '../../molecules/Logo';
import Logout from '../../molecules/Logout';
import Customer from '../../molecules/Customer';

import { useAuth } from '../../../context/AuthContext';

function Aside() {  
  const { user } = useAuth();

  return (
    <Organism>
      <Logo />
      <Customer
        tag="#iFoodMusicLover"
        name={user.display_name}
      />
      <Logout />
    </Organism>
  );
}

export default Aside;