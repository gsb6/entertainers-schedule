import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 16px 24px;
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.13);
  border-radius: 5px;
`;

const Card: React.FC = ({ children, ...rest }) => (
  <Container {...rest}>{children}</Container>
);

export default Card;
