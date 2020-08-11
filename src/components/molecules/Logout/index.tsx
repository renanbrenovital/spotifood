import React from 'react';

import Button from '../../atoms/Button';
import Img from '../../atoms/Img';

import logout from '../../../assets/logout.svg';

function Logout() {
  return (
    <Button>
      <Img src={logout} alt="Icon Logout" />
    </Button>
  );
}

export default Logout;