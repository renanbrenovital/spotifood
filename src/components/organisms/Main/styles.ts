import styled from 'styled-components';

export const Organism = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
  justify-self: center;
  overflow: auto;
  
  h2 {
    font-weight: bold;
    font-size: 16px;
    line-height: 100%;
    text-transform: uppercase;
    color: #E5E5E5;
  }

  h3 {
    font-weight: bold;
    font-size: 14px;
    line-height: 100%;
    text-transform: uppercase;
    color: #E5E5E5;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    position: relative;
    background: var(--color-primary);
    box-shadow: 2px 2px 2px var(--color-dark);
    border-radius: 10px;
    width: 180px;
    height: 200px;
    margin: 2rem 2rem 2rem 0;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  li > img {  
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  a > img {
    position: absolute;
    bottom: 58px;
    left: 58px
  }
`;