import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const ScrollButtonContainer = styled.div<{ rightAligned: boolean }>`
  position: absolute;
  width: calc(100% - 2vw);
  top: 90vh;
  bottom: unset;
  padding: 0 1vw 1vw 1vw;
  display: flex;
  justify-content: ${(props) => (props.rightAligned ? 'flex-end' : 'center')};
  
  & svg {
    font-size: 400%;
    cursor: pointer;
    font-weight: 100;
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
