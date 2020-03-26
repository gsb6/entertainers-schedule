import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  padding: 16px;
  border-radius: 5px;
  border: 0;
  font: inherit;
  cursor: pointer;
`;

export type Props = {
  onClick?: () => void;
  label: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
};

const Button: React.FC<Props> = ({ onClick, label, type, ...rest }) => (
  <Container onClick={onClick} type={type} {...rest}>
    {label}
  </Container>
);

export default Button;
