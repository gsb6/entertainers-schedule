import styled from 'styled-components';
import { inputLabel } from '../../styles/commons';

export const Container = styled.select`
  width: 100%;
  padding: 16px;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid #ccc;
  color: #ee7ec2;
  appearance: button;
`;

export const Label = styled.label`
  ${inputLabel};
`;
