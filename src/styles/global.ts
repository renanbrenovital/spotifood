import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-primary: #E4492E;
    --color-background: #171E31;
    --color-background-dark: #12192C;
    --color-shadow: #000000;
  }  
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }  
  body {
    margin: 0;
    padding: 0;
    outline: 0;
    font-family: Poppins, sans-serif;
    font-size: 62.5%;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0;
    transition: all 0.25s linear;
  }
`;