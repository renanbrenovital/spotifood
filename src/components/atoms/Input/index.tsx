import React from 'react';

interface Props {
  type: string;
  name: string;
  placeholder: string;
}

function Input(props: Props) {
  return (
    <input type={props.type} name={props.name} placeholder={props.placeholder} />
  );
}

export default Input;