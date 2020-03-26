import styled, { css } from 'styled-components';
import { devices } from '../../styles/devices';
import { inputLabel } from '../../styles/commons';

type Props = {
  selected?: boolean;
};

const selectedCSS = css`
  color: #fff;
  background: #f097ce;
  border: 1px solid #ee7ec2;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.label`
  ${inputLabel};
`;

export const ShiftButton = styled.button<Props>`
  padding: 16px 32px;
  background-color: transparent;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 2rem;
  font-weight: bold;
  color: #ee7ec2;
  cursor: pointer;

  @media ${devices.mobileL} {
    padding: 8px 16px;
    font-size: 1.4rem;
  }

  @media ${devices.mobileS} {
    padding: 4px 12px;
    font-size: 1.2rem;
  }

  ${({ selected }) => selected && selectedCSS};
`;
