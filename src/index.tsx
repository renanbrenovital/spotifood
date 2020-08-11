import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`  
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }  
  body {
    margin: 0;
    padding: 0;
    outline: 0;
    font-family: 'Poppins', sans-serif;
    font-size: 62.5%;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0;
    transition: all 0.25s linear;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);