import React, { useEffect } from 'react';
import { accountsSpotify } from '../../services/api';

import Login from '../../components/molecules/Login';
import { Page } from './styles';

function SignIn() {
  const hrefAuthorize = 
    'https://accounts.spotify.com/authorize' +
      '?response_type=code' +
      '&client_id=1f5cf2cc56dc40abb4dc1ab3ac3c797d' +
      '&scope=' + encodeURIComponent('user-read-private user-read-email') + 
      '&redirect_uri=' + encodeURIComponent('http://localhost:3000');

  useEffect(() => {    
    const getToken = async () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');
      const error = params.get('error');
  
      if (code) {
        try {
          const data = `grant_type=authorization_code&code=${code}&redirect_uri=${encodeURIComponent('http://localhost:3000')}`;
          const token = await accountsSpotify.post("/token", data);
          localStorage.SpotiFoodToken = JSON.stringify(token);
          window.location.replace('http://localhost:3000/');
        } catch (error) {
          console.log(error);
        }
      }

      if(error) {
        console.log(error);
      }
    }

    getToken();
  }, []);

  return (
    <Page>
      <Login href={hrefAuthorize} />
    </Page>
  );
}

export default SignIn;