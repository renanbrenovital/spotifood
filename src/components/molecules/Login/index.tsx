import React from 'react';
import { Molecule } from './styles';

import Logo from '../Logo';
import Button from '../../atoms/Button';
interface Props {
  onClick(): void;
}

function Login(props: Props) {
  const { onClick } = props;
  return (
    <Molecule>
      <Logo />
      <Button onClick={onClick}>ENTRAR</Button>
    </Molecule>
  );
}

export default Login;