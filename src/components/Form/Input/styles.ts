import styled from 'styled-components';
import { devices } from '../../../styles/devices';

export const Label = styled.label`
  font-size: 1.8rem;

  @media ${devices.mobileL} {
    font-size: 1.4rem;
  }
`;

export const Box = styled.div`
  margin-top: 12px;
  padding: 12px;
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
  color: ${({ theme }) => theme.palette.primary};
  -webkit-text-fill-color: ${({ theme }) => theme.palette.primary};
`;

export const Error = styled.div`
  height: 24px;
  font-size: 12px;
  color: ${({ theme }) => theme.palette.error};
`;
