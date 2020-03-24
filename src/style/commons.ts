import { css } from 'styled-components';
import { devices } from './devices';

export const mobileFormContainer = css`
  padding: 64px 32px 24px 32px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.17);
`;

export const inputLabel = css`
  display: inline-block;
  margin-bottom: 12px;
  font-size: 1.8rem;

  @media ${devices.mobileL} {
    margin-bottom: 8px;
    font-size: 1.4rem;
  }
`;
