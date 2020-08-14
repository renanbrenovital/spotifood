import React from 'react';
import { isAuthenticated } from './services/auth';

import SignIn from './pages/SignIn';
import Home from './pages/Home';

import GlobalStyle from './styles/global';

function App() {
    return (
			<>
				<GlobalStyle />
					{
						isAuthenticated() ? <Home /> : <SignIn />
					}
			</>
    )
    
}

export default App;