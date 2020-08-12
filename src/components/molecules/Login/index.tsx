import React from 'react';
import { Molecule } from './styles';

import Logo from '../Logo';
import Link from '../../atoms/Link';
interface Props {
  href: string;
}

function Login(props: Props) {
  const { href } = props;
  return (
    <Molecule>
      <Logo />
      <Link href={href}>LOGIN SPOTIFOOD</Link>
    </Molecule>
  );
}

export default Login;