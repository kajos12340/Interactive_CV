import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  position: relative;
  width: 50%;
  margin: 50px 25% 100px 25%;
  font-size: 20px;
  
  @media (max-width: 768px) {
    margin: 0 5%;
    width: 90%;
    font-size: 16px;
  }
  
  & span {
   color: #bd5f00;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  
  & > div {
    margin-right: 20px;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    
    &>div {
      margin-bottom: 10px;
      margin-right: 0;
    }
  }
`;

export const CopiedAlert = styled.div`
  position: fixed;
  box-shadow: -3px 3px 10px black;
  opacity: 0;
  border-radius: 15px;
  padding: 1vw;
  background-color: #bd5f00;
  font-size: 18px;
  width: auto;
  max-width: 50%;
  right: -10%;
  margin: 1% 10px;
  top: 0;
  
  @media (max-width: 768px) {
    padding: 3vw;    
    margin: 1% 2%;
    max-width: 96%;
  }
`;
