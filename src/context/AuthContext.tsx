import React, { createContext, useCallback, useContext, useState, useEffect } from 'react';
import { spotifyAccounts, spotifyApi } from '../services/api';

import { 
  SPOTIFY_URL_ACCOUNTS,
  REDIRECT_URI,
  CLIENT_ID,
  SCOPE
} from '../utils/config';

interface User {
  display_name: string;
}
interface IAuthContext {
  user: User;
  signIn(): void;
  signOut(): void;
}

interface IAuthState {
  token: object;
  user: User;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {  
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@Spotifood:token');
    const user = localStorage.getItem('@Spotifood:user');

    if(token && user) {
      return {
        token: JSON.parse(token),
        user: JSON.parse(user)
      }
    }

    return {} as IAuthState;
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    const error = params.get('error');
    
    const requestToken = async (code: string) => {
      const params = new URLSearchParams();
      params.append('grant_type', 'authorization_code');
      params.append('redirect_uri', REDIRECT_URI);
      params.append('code', code); 
  
      const token = await spotifyAccounts.post("/api/token", params.toString());
      localStorage.setItem('@Spotifood:token', JSON.stringify(token.data));
  
      const { access_token } = token.data;
      const user = await spotifyApi.get("/me", {
        headers: {
          "Authorization": `Bearer ${access_token}`
        }
      });
      localStorage.setItem('@Spotifood:user', JSON.stringify(user.data));
  
      setData({
        token: token.data,
        user: user.data
      });
      
      window.location.assign(REDIRECT_URI);
    };

    
    if(code) {
      requestToken(code);
    }

    if(error) {
      throw new Error(error); 
    }
     
  }, []);

  const signIn = () => {
    const params = new URLSearchParams();
    params.append('response_type', 'code');
    params.append('redirect_uri', REDIRECT_URI);
    params.append('client_id', CLIENT_ID);
    params.append('scope', SCOPE);
    
    window.location.assign(`${SPOTIFY_URL_ACCOUNTS}authorize?${params.toString()}`);
  };

  const signOut = useCallback(() => {
    localStorage.removeItem('@Spotifood:token');
    localStorage.removeItem('@Spotifood:user');
    
    setData({} as IAuthState);

    window.location.assign(REDIRECT_URI);
  }, []);

  const { user } = data;
  
  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  if(!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth }

