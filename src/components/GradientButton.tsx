import React from 'react';
import styled from 'styled-components';

import Button, { Props } from '../components/Button';

export const Container = styled(Button)`
  width: 100%;
  padding: 16px;
  background: linear-gradient(104.06deg, #f180c1 4.55%, #a450c9 95.79%);
  color: #fff;
`;

const GradientButton: React.FC<Props> = ({ onClick, label, ...rest }) => {
  return <Container onClick={onClick} label={label} {...rest} />;
};

export default GradientButton;
