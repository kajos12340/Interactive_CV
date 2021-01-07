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
  }
  
  & span {
   color: #bd5f00;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
  
  & > div {
    margin-right: 20px;
  }
`;
