import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Section = styled.section<{ primaryColor: boolean }>`
  position: relative;
  min-height: 100vh;
  max-width: 100vw;
  overflow-x: hidden;
  background: ${(props) => (props.primaryColor ? '#060606' : '#0d0d0d')};
  
  @media (max-width: 768px) {
    padding-bottom: 50px;
  }
`;