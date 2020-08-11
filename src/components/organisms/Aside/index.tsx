import React from 'react';
import logo from '../../../assets/logo.svg';
import { Organism } from './styles';

function Aside() {
  return (
    <Organism className="aside">
      <img src={logo} alt="logo" width="125px" />
    </Organism>
  );
}

export default Aside;