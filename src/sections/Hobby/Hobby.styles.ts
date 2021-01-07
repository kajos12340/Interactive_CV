import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 0 20%;
  
  @media (max-width: 768px) {
    padding: 0 5px;
  }
`;

export const Video = styled.div`
  margin-top: 30px;
  display: flex;
  margin-bottom: 50px;
`;

export const MobileIcons = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;
