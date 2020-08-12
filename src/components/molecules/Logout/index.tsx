import React from 'react';
import { Molecule } from './styles';
import { logout } from '../../../services/auth';

import Img from '../../atoms/Img';
import iconPower from '../../../assets/IconPower.svg';
import Button from '../../atoms/Button';

function Logout() {
  return (
    <Molecule>
      <Button onClick={() => logout()}>
        Sair <Img src={iconPower} alt="Logout" />
      </Button>
    </Molecule>
  );
}

export default Logout;