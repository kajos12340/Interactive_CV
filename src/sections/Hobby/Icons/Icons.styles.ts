import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  
  & > div {
    margin: 10px 20px 0 20px;
    font-size: 54px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    
    background: #bd5f00;
    
    @media (max-width: 768px) {
      margin: 10px 5px 0 7px;
      font-size: 32px;
    }
  }
`;
