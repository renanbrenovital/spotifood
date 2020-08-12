import React, { useState, useEffect } from 'react';
import { Organism } from './styles';
import { apiSpotify } from '../../../services/api';

import Logo from '../../molecules/Logo';
import Logout from '../../molecules/Logout';
import Customer from '../../molecules/Customer';

function Aside() {
  const [name, setName] = useState('');

  useEffect(() => {
    const getCustomer = async () => {
      const { data } = await apiSpotify.get('/me');
      setName(data.display_name);
    }

    getCustomer();
  }, []);

  return (
    <Organism>
      <Logo />
      <Customer
        tag="#iFoodMusicLover"
        name={name}
      />
      <Logout />
    </Organism>
  );
}

export default Aside;