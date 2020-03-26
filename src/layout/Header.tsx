import React from 'react';
import styled from 'styled-components';
import { devices } from '../styles/devices';

const Container = styled.header`
  width: 100%;
  height: 60px;
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);

  @media ${devices.laptopL} {
    height: 40px;
  }

  @media ${devices.tablet} {
    display: none;
  }
`;

const Header: React.FC = () => <Container />;

export default Header;
