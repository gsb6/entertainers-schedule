import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
`;

const Wrapper: React.FC = ({ children }) => (
  <Container>
    {children}
  </Container>
)

export default Wrapper;