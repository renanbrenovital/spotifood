import React from 'react';
interface Props {
  children: any;
  onClick(): void;
}

function Button(props: Props) {
  const { children, onClick } = props;
  
  return <button onClick={onClick}>{children}</button>;
}

export default Button;