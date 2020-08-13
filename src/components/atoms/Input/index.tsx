import React from 'react';

interface Props {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: Function;
}

function Input(props: Props) {
  const { type, name, value, placeholder, onChange } = props;
  
  return <input type={type} name={name} value={value} placeholder={placeholder} onChange={event => onChange(event.target.value)} />;
}

export default Input;