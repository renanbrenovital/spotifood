import React from 'react';

interface Props {
  src: string;
  alt: string;
}

function Img(props: Props) {
  return (
    <img src={props.src} alt={props.alt} />
  );
}

export default Img;