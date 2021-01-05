import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Button = styled.div`
  cursor: pointer;
  padding: 1vw;
  transition-duration: .5s;
  
  background: #bd5f00;
  border: solid 2px #bd5f00;
  border-radius: 5px;
  
  &:hover {
    background: #dc7900;
  }
`;
