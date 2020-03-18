import React from 'react';
import styled from 'styled-components';

import clownPicture from '../assets/humberto-chavez-7MZclz4GQE8-unsplash.jpg';

const Container = styled.aside`
  width: 30%;
  max-width: 670px;
  background: url(${clownPicture});
  background-size: cover;
  background-position-x: center;
  background-position-y: top;
`;

const Gradient = styled.div`
  height: 100%;
  background: linear-gradient(161.88deg, #FC66A4 0%, #993CFF 98.7%);
  opacity: 0.8;
`;

const Aside: React.FC = () => (
  <Container>
    <Gradient />
  </Container>
);

export default Aside;
