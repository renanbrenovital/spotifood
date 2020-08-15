import styled from 'styled-components';

export const Molecule = styled.div`
  button {
    background: var(--color-primary);
    border: 2px solid var(--color-dark-30);
    border-radius: 5px;
    color: var(--color-light);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    outline: 0;
    cursor: pointer;
    box-shadow: 1px 1px 0 var(--color-dark);
    text-decoration: none;
    font-size: 1rem;
    margin-top: 2rem;
  }
`;