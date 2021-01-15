import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Section = styled.section<{ primaryColor: boolean, contactHeight: boolean }>`
  position: relative;
  min-height: ${(props) => (props.contactHeight ? '50vh' : '100vh')};
  max-width: 100vw;
  background: ${(props) => (props.primaryColor ? '#060606' : '#0d0d0d')};
  
  @media (max-width: 768px) {
    padding-bottom: 70px;
  }
`;
