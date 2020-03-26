import styled, { css } from 'styled-components';
import { devices } from '../../styles/devices';
import { inputLabel } from '../../styles/commons';

type Props = {
  selected?: boolean;
};

const selectedCSS = css`
  color: #fff;
  background: linear-gradient(
    180deg,
    rgba(237, 125, 194, 0.8) 0%,
    rgba(236, 125, 194, 0.8) 100%
  );
  border: 1px solid #ee7ec2;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.label`
  ${inputLabel};
`;

export const DayButton = styled.button<Props>`
  padding: 16px 24px;
  background-color: transparent;
  border: 1px solid #ccc;
  border-radius: 50%;
  font-size: 2rem;
  line-height: 25px;
  font-weight: bold;
  color: #ee7ec2;
  cursor: pointer;

  @media ${devices.mobileL} {
    padding: 8px 12px;
    font-size: 1.4rem;
    line-height: 17px;
  }

  @media ${devices.mobileS} {
    padding: 4px 8px;
    font-size: 1.2rem;
    line-height: 15px;
  }

  ${({ selected }) => selected && selectedCSS};
`;
