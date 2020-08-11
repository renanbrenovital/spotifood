import React from 'react';

interface Props {
  children: any;
}

function Button(props: Props) {
  return (
    <button>
      {props.children}
    </button>
  );
}

export default Button;