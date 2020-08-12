import React from 'react';

interface Props {
  href: string;
  children: any;
}

function Link(props: Props) {
  const { href, children } = props;
  
  return <a href={href}>{children}</a>;
}

export default Link;