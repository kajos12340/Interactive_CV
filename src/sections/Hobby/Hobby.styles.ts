import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 0 15%;
  
  @media (max-width: 768px) {
    padding: 0 5px;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  
  & > div {
    margin: 10px 20px 0 20px;
    font-size: 54px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    
    background: #bd5f00;
  }
`;

export const Video = styled.div`
  margin-top: 30px;
  display: flex;
  margin-bottom: 50px;
`;
