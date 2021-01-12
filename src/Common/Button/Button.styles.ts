import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Button = styled.button`
  cursor: pointer;
  padding: 1vw;
  transition-duration: .5s;
  font-size: 20px;
  display: flex;
  align-items: center;
  
  color: white;
  background: #bd5f00;
  border: solid 2px #bd5f00;
  border-radius: 5px;
  
  &:hover {
    background: #dc7900;
  }
  
  @media (max-width: 768px) {
    padding: 3.5vw;
  }
  
  & > svg {
    margin-left: 10px;
    font-size: 1.2em;
  }
`;

export const DoubleButton = styled(Button)`
  padding: 0;
  
  &:hover {
    background: #bd5f00;
  }
  
  & > div {
    padding: 1vw;
    
    @media (max-width: 768px) {
      padding: 3.5vw;
    }
    
    &:hover {
      background: #dc7900;
    }
  }
  
  & > div:last-child {
    border-left: solid 1px #954b00;
  }
`;
