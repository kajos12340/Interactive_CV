import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  transform: rotate(2deg);
`;

export const Banner = styled.div`
  margin: 50px 10%;
  width: 80%;
  height: 200px;
  transform: skew(20deg);
  background: #bd5f00;
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
`;
