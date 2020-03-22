import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  border-radius: 5px;
  border: 0;
  font: inherit;
  cursor: pointer;
`;

export type Props = {
  onClick: () => void;
  label: string;
};

const Button: React.FC<Props> = ({ onClick, label, ...rest }) => (
  <Container onClick={onClick} {...rest}>
    {label}
  </Container>
);

export default Button;
