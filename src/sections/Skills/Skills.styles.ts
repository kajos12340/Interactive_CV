import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const SkillTilesContainer = styled.div`
  width: 80%;
  margin: 0 10% 50px 10%;
  display: flex;
  background: #0d0d0d;
  border-radius: 15px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0 3%;
    width: 94%;
    
    & > div {
      flex: 33.33333%;
      
      &:first-child {
        border-right: none !important;
        border-bottom: solid 1px #bd5f00;
      }
      
      &:last-child {
        border-top: solid 1px #bd5f00;
        border-left: none !important;;
      }
    }
  }
  
  & > div {
    flex: 33.33333%;
    
    &:first-child {
      border-right: solid 1px #bd5f00;
    }
    
    &:last-child {
      border-left: solid 1px #bd5f00;
    }
  }
`;
