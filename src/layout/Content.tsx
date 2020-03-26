import React from 'react';
import styled from 'styled-components';
import { devices } from '../styles/devices';

const Container = styled.main`
  width: 100%;
  max-width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  flex: 1;

  @media ${devices.mobileL} {
    padding: 0 16px;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Content: React.FC = ({ children }) => <Container>{children}</Container>;

export default Content;
