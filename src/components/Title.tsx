import React from 'react';
import styled from 'styled-components';
import { devices } from '../style/devices';

export const Container = styled.h1`
  padding: 40px 0;

  @media ${devices.mobileL} {
    padding: 20px 0;
  }
`;

const Title: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Title;
