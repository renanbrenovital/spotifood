import styled from 'styled-components';

export const Molecule = styled.aside`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  
  select, input {
    width: 160px;
    height: 40px;
    background: var(--color-dark-30);
    border-radius: 25px;
    outline: 0;
    color: var(--color-light-50);
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }
`;