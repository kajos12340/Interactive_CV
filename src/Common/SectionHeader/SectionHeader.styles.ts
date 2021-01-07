import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  overflow: hidden;

  & > div {
    position: relative;
    transform: rotate(1.5deg);
    max-width: 100vw;
    overflow: hidden;
    
    padding: 40px 20%;
    @media (max-width: 768px) {
      padding: 20px 10%;
  } 
  }

`;

export const Banner = styled.div`
  height: 100px;
  transform: skew(20deg);
  background: #bd5f00;
  padding: 10px 10%;
  
  @media (max-width: 768px) {
    max-height: 100px;
    padding: 0 10%;
  }
`;

export const Title = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  transform: rotate(-2deg);
  font-size: 54px;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;
