import React from 'react';
import { Molecule } from './styles';

import Button from '../../atoms/Button';
import Img from '../../atoms/Img';
import iconPower from '../../../assets/IconPower.svg';

function Logout() {
  return (
    <Molecule>
      <Button>
        Sair <Img src={iconPower} alt="Logout" />
      </Button>
    </Molecule>
  );
}

export default Logout;