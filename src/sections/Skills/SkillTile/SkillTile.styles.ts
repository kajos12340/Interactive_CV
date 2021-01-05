import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  padding: 2vw;
  
  font-size: 18px;
  
  text-align: center;
  line-height: 1.5;
  letter-spacing: 0.8px;
  
  @media (max-width: 768px) {
    padding: 30px 2vw;
  }
`;

export const Icon = styled.div`
  color: #bd5f00;
  font-size: 86px;
  transform-origin: 50% 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @keyframes iconAnimation {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
    animation: 3s infinite iconAnimation ease-in-out;
`;

export const Technologies = styled.div`
  & > h3 {
    color: #bd5f00;
  }
`;

export const Description = styled.div`
  & > span {
    color: #bd5f00;
  }
`;
