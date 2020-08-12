import React from 'react';
import { Molecule } from './styles';

import Span from '../../atoms/Span';
import Heading from '../../atoms/Heading';
interface Props {
  tag: string;
  name: string;
}

function Customer(props: Props) {
  const { tag, name } = props;
  return (
    <Molecule>
      <Span>{tag}</Span>
      <Heading>{name}</Heading>
    </Molecule>
  );
}

export default Customer;