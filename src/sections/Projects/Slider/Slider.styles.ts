import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 70%;
  margin: 0 15% 50px 15%;
  
  @media (max-width: 768px) {
    margin: 0 5% 30px 5%;
    width: 90%;
  }
`;

export const Dots = styled.div`
  width: 100%;
  position: absolute;
  bottom: -2vw;
  display: flex;
  justify-content: center;
`;

export const Dot = styled.div`
  width: 1vw;
  height: 1vw;
  margin: 0 1.5vw;
  
  border-radius: 100%;
  
  cursor: pointer;
  background: white;
  
  @media (max-width: 768px) {
    height: 3vw;
    width: 3vw;
  }
`;

const Switch = styled.div`
  width: 5%;
  height: 100%;
  top: 0;
  
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 54px;
  
  & > svg {
    cursor: pointer;
  }
  
  @media (max-width: 768px) {
    width: 10%;
    font-size: 32px;
    align-items: flex-end;
    bottom: -4vw;
    top: unset;
  }
`;

export const SwitchLeft = styled(Switch)`
  left: -5%;
  
  @media (max-width: 768px) {
    left: -5%;
  }
`;

export const SwitchRight = styled(Switch)`
  right: -5%;
  
  @media (max-width: 768px) {
    right: -5%;
  }
`;

export const Slides = styled.div`
  width: 100%;
  overflow: hidden;
  
  & > div {
    display: flex;
  }
`;

export const Slide = styled.div`
  font-size: 18px;

  min-width: 100%;
  display: grid;
  
  grid-template: "photo title" 15%
                 "photo description" 70%
                 "photo link" 15%
                 / 50% 50%;
  grid-column-gap: 1vw;
  
  @media (max-width: 768px) {
    grid-template: "title" auto
                   "photo" 320px
                   "description" auto
                   "link" auto
                   / 100%;
  }
`;

export const Img = styled.div<{ photo: string }>`
  grid-area: photo;
  height: 600px;
  
  background-image: url(${(props) => props.photo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

export const Title = styled.div`
  grid-area: title;
  
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const Description = styled.div`
  grid-area: description;
`;

export const Buttons = styled.div`
  grid-area: link;
  display: flex;
  align-items: center;
  & > div {
    margin-right: 10px;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 20px;
    & > div {
      margin-right: 0;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
`;
