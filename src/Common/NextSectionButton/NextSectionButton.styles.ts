import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const ScrollButtonContainer = styled.div<{ reverse: boolean }>`
  position: fixed;
  width: calc(100% - 2vw);
  top: 90vh;
  bottom: unset;
  padding: 0 1vw 1vw 1vw;
  display: flex;
  justify-content: flex-end;
  z-index: 222;
  
  & svg {
    font-size: 400%;
    cursor: pointer;
    font-weight: 100;
    transition-duration: 0.5s;
    transform: ${(props) => (props.reverse ? 'rotate(180deg)' : 'none')};
    box-shadow: 0 0 7px white;
    border-radius: 100%;
  }

  @media (max-width: 768px) {
  padding-top: 3vw;
  bottom: 0;
  top: unset;
  
    & svg {
      font-size: 300%;
    }
  }
`;
