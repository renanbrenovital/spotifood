import React from 'react';
import { Molecule } from './styles';
import { logout } from '../../../services/auth';

import Img from '../../atoms/Img';
import iconPower from '../../../assets/iconPower.png';
import Button from '../../atoms/Button';

function Logout() {
  return (
    <Molecule>
      <Button onClick={() => logout()}>
        <Img src={iconPower} alt="Logout" /> Sair
      </Button>
    </Molecule>
  );
}

export default Logout;