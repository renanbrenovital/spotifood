import React from 'react';

interface Props {
  type: string;
  name: string;
  value: any;
  placeholder: string;
}

function Input(props: Props) {
  const { type, name, value, placeholder } = props;
  
  return <input type={type} name={name} value={value} placeholder={placeholder} />;
}

export default Input;