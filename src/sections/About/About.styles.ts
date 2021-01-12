import styled from 'styled-components';

import photo from '../../assets/me.jpg';

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 15%;
  
  flex: 0 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;

export const PhotoContainer = styled.div`
  height: 600px;
  flex: 0 0 450px;
  padding: 0 0 25px 25px;
  position: relative;
  
  @media (max-width: 768px) {
    height: 400px;
    margin: 20px 10% 0 10%;
    flex: 0 0 auto;
    padding: 0 10px 40px 25px;
  }
  
  &::before {
    width: calc(100% - 45px);
    height: calc(100% - 45px);
    position: absolute;
    z-index: 1;
    left: 0;
    top: 25px;
    border: solid 10px #bd5f00;
    content: "";
    
    @media (max-width: 768px) {
      top: 25px;
    }
  }
`;

export const Photo = styled.div`
  width: calc(100% - 25px);
  height: calc(100% - 25px);
  position: absolute;
  z-index: 2;
  
  background-image: url(${photo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #bd5f00;
`;

export const Description = styled.div`
  margin-top: 40px;
  padding: 1vw;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 0.8px;
  
  & span {
    color: #bd5f00;
  }
  
  @media (max-width: 768px) {
    font-size: 18px;
    margin-top: 20px;
    padding: 0 5vw;
  }
`;
