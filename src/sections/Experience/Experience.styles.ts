import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Content = styled.div`
  display: flex;
  position: relative;
  padding: 0 15%;
  
  @media (max-width: 768px) {
    padding: 0 5px;
  }
`;

export const Line = styled.div`
  position: absolute;
  width: 7px;
  margin: 0 4px;
  
  min-height: 100%;
  
  border-radius: 5px;
  
  background: #1a1a1a;
`;

export const Nodes = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Node = styled.div`
  display: grid;
  z-index: 1;
  margin: 10px 0;
  
  grid-template: "dot time title" auto
                 ". description description" auto
                 / 30px 10vw 1fr;
  grid-column-gap: 10px;                 

  @media (max-width: 768px) {
    grid-template: "dot time" auto
                   ". title" auto
                   ". description" auto
                   / 30px auto;
  }
`;

const CenteredDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const Dot = styled(CenteredDiv)`
  grid-area: dot;
  
  &::after {
    background: #bd5f00;
    content: '';
    width: 15px;
    height: 15px;
  }
`;

export const Time = styled(CenteredDiv)`
  grid-area: time;
`;

export const Title = styled(CenteredDiv)`
  grid-area: title;
  font-size: 20px;
  color: #bd5f00;
`;

export const Description = styled.div`
  grid-area: description;
  padding-top: 10px;
`;
