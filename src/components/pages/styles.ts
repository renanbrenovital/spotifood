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

  aside {
    grid-area: ASIDE;
  }

  header {
    grid-area: HEAD;
  }

  main {
    grid-area: MAIN;
  }
`;