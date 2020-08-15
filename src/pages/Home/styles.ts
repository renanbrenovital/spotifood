import styled from 'styled-components';

export const Page = styled.div`
  background: var(--color-background);
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 300px auto;
  grid-template-rows: 200px auto;
  grid-template-areas: 
    "ASIDE HEAD"
    "ASIDE MAIN";

  aside { grid-area: ASIDE; }

  header { grid-area: HEAD; }

  main { grid-area: MAIN; }

  @media only screen and (max-width: 600px) {
    grid-template-areas: 
    "ASIDE"
    "HEAD"
    "MAIN";
    
    grid-template-columns: auto;

    aside {
      flex-direction: row;

      > img {
        height: 10vh;
      }
    }

    main {
     li {
       width: 40%;
     }
    }

  }
`;