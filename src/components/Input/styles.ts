import styled from 'styled-components';
import { devices } from '../../style/devices';

export const Label = styled.label`
  font-size: 1.8rem;

  @media ${devices.mobileL} {
    font-size: 1.4rem;
  }
`;

export const Container = styled.div`
  margin: 12px 0 32px 0;
  padding: 16px;
  background-color: transparent;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media ${devices.mobileL} {
    margin-top: 8px;
    padding: 8px;
  }
`;

export const TextField = styled.input`
  width: 100%;
  background: transparent;
  border: 0;
  font: inherit;
  color: #ee7ec2;
  -webkit-text-fill-color: #ee7ec2;
`;

export const Error = styled.div`
  color: red;
`;
