import styled from 'styled-components';

export const Molecule = styled.div`
  width: 100px;

  button {
    background: var(--color-background);
    border: 1px solid var(--color-primary);
    border-radius: 5px;
    color: var(--color-primary);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    text-transform: uppercase;
    outline: 0;
    cursor: pointer;
    box-shadow: 1px 1px 0 var(--color-shadow);
  }
`;