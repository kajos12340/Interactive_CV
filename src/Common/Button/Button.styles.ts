import styled from 'styled-components';

export const Button = styled.a`
  cursor: pointer;
  padding: 1vw;
  transition-duration: .5s;
  font-size: 20px;
  display: flex;
  align-items: center;
  text-decoration: none;
  
  color: white;
  background: #bd5f00;
  border: solid 2px #bd5f00;
  border-radius: 5px;
  
  &:active {
    color: white;
  }
  
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

export const DoubleButton = styled.div`
  padding: 0;
  cursor: pointer;
  transition-duration: .5s;
  font-size: 20px;
  display: flex;
  align-items: center;
  
  color: white;
  background: #bd5f00;
  border: solid 2px #bd5f00;
  border-radius: 5px;
  
  &:hover {
    background: #bd5f00;
  }
  
  & > div, & > a {
    padding: 1vw;
    text-decoration: none;
    color: white;
    
    &:active {
      color: white;
    }
  
    &:hover {
      background: #dc7900;
    }
    
    @media (max-width: 768px) {
      padding: 3.5vw;
    }
  }
  
  & > div:last-child {
    border-left: solid 1px #954b00;
  }
`;
