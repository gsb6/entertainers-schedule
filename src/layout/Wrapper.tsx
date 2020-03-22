import React from 'react';
import styled from 'styled-components';
import { devices } from '../style/devices';

export const Container = styled.div`
  display: flex;
  flex: 1;

  @media ${devices.mobileS} {
    width: 100vw;
    height: 100vh;
    display: block;
    position: absolute;
  }
`;

const Wrapper: React.FC = ({ children }) => <Container>{children}</Container>;

export default Wrapper;
