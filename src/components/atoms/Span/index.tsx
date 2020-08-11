import React from 'react';

interface Props {
  children: any;
}

function Span(props: Props) {
  return (
    <span>
      {props.children}
    </span>
  );
}

export default Span;