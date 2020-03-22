import React from 'react';
import styled from 'styled-components';

export const Container = styled.hr`
  margin: 1em 0;
  border: 0;
  border-top: 1px solid #ccc;
`;

const Divider: React.FC = () => <Container />;

export default Divider;
