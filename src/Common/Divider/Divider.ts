import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Divider = styled.div<{ revert: boolean }>`
  height: 50px;
  background: linear-gradient(to left bottom,
    ${(props) => (props.revert ? '#060606' : '#0d0d0d')} 49%,
    ${(props) => (props.revert ? '#0d0d0d' : '#060606')} 50%);  
  @media (max-width: 768px) {
    padding-bottom: 50px;
  }
`;
