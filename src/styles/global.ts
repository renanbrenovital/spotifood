import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-primary: #ff2132;
    --color-background: #171E31;
    --color-background-dark: #12192C;
    --color-dark: #000000;
    --color-dark-30: #00000030;
    --color-light: #E5E5E5;
    --color-light-50: #E5E5E550;
  }  
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }  
  ::-webkit-scrollbar {
    display: none;
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