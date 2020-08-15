import React from 'react';
import { isAuthenticated } from './services/auth';

import SignIn from './pages/SignIn';
import Home from './pages/Home';

import GlobalStyle from './styles/global';
import { AuthProvider } from './context/AuthContext';

function App() {
    return (
			<>
				<GlobalStyle />
				<AuthProvider>
					{isAuthenticated() ? <Home /> : <SignIn />}
				</AuthProvider>
			</>
    )
    
}

export default App;