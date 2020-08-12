import React from 'react';
import { isAuthenticated } from './services/auth';

import SignIn from './components/pages/SignIn';
import Home from './components/pages/Home';

function App() {
    return isAuthenticated() ? <Home /> : <SignIn />;
}

export default App;