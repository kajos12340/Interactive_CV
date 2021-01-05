import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const ScrollButtonContainer = styled.div<{ rightAligned: boolean }>`
  position: absolute;
  width: calc(100% - 2vw);
  bottom: 0;
  padding: 0 1vw 1vw 1vw;
  display: flex;
  justify-content: ${(props) => (props.rightAligned ? 'flex-end' : 'center')};
  
  & svg {
    font-size: 400%;
    cursor: pointer;
    font-weight: 100;
  }

  @media (max-width: 768px) {
  padding-bottom: 3vw;
    & svg {
      font-size: 300%;
    }
  }
`;
