import React from 'react';
import { useAuth } from '../../context/AuthContext';

import Login from '../../components/molecules/Login';
import { Page } from './styles';

function SignIn() {
  const { signIn } = useAuth();

  return (
    <Page>
      <Login onClick={() => signIn()} />
    </Page>
  );
}

export default SignIn;