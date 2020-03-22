import React from 'react';
import styled from 'styled-components';

import { devices } from '../style/devices';

const Container = styled.header`
  width: 100%;
  height: 60px;
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  @media ${devices.laptop} {
    height: 40px;
  }

  @media ${devices.tablet} {
    display: none;
  }
`;

const Header: React.FC = () => <Container />;

export default Header;
