import { css } from 'styled-components';
import { devices } from './devices';
import { shade } from 'polished';

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

export const textButton = css`
  padding: 8px 16px;
  background-color: transparent;
  color: ${({ theme }) => theme.palette.primary};

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const containedButton = css`
  background-color: ${({ theme }) => theme.palette.primary};
  color: #fff;

  &:hover {
    background-color: ${({ theme }) => shade(0.1, theme.palette.primary)};
  }
`;

export const outlinedButton = css`
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

export const gradientButton = css`
  width: 100%;
  background: linear-gradient(104.06deg, #f180c1 4.55%, #a450c9 95.79%);
  color: #fff;

  &:hover {
    background: linear-gradient(
      104.06deg,
      ${shade(0.1, '#f180c1')} 4.55%,
      ${shade(0.1, '#a450c9')} 95.79%
    );
  }
`;
