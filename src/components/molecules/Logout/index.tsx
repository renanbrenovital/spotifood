import React from 'react';
import { Molecule } from './styles';
import { useAuth } from '../../../context/AuthContext';

import Img from '../../atoms/Img';
import iconPower from '../../../assets/iconPower.png';
import Button from '../../atoms/Button';

function Logout() {
  const { signOut } = useAuth();
  
  return (
    <Molecule>
      <Button onClick={() => signOut()}>
        <Img src={iconPower} alt="Logout" /> Sair
      </Button>
    </Molecule>
  );
}

export default Logout;