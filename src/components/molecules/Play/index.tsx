import React from 'react';

import Img from '../../atoms/Img';
import play from '../../../assets/play.png';
import Link from '../../atoms/Link';

interface Props {
  href: string;
}

function Play(props: Props) {
  const { href } = props;
  return (
    <Link href={href}>
      <Img src={play} alt="Play" />    
    </Link>
  );
}

export default Play;