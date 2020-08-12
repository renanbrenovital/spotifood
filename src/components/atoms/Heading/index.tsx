import React from 'react';
interface Props {
  children: any;
}

function Heading(props: Props) {
  return (
    <h1>
      {props.children}
    </h1>
  );
}

export default Heading;