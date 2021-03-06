import styled from 'styled-components';
import Part from 'react-particles-js';

export const Container = styled.section`
  position: relative;
  border-bottom: solid 1px #bd5f00;
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  
  & > #name-poster {
    text-align: center;
    text-shadow: 0 0 2px #bd5f00;
    padding: 2vw;
    border-radius: 10%;
    background: rgba(6, 6, 6, .8);
    box-shadow: 0 0 3vw 2vw rgb(6, 6, 6);
  
    & > #name {
      font-size: 86px;
      margin-bottom: 60px;
      
      @media (max-width: 768px) {
        font-size: 54px;
      }
    }
  
    & > #profession {
      font-size: 54px;
      line-height: 2em;
      display: flex;
      align-items: center;
      
      @media (max-width: 768px) {
        font-size: 32px;
      }
    }
  }
`;

export const WordScroller = styled.div`
  color: #bd5f00;
  margin-left: .5em;
  height: 2em;
  overflow: hidden;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  & > div {
    margin-bottom: 1em;
    overflow: visible;
    text-align: left;
  }
`;

export const Particles = styled(Part)`
  height: 100vh;
  width: 100vw;
`;
