import styled from 'styled-components';
import { devices } from '../../../styles/devices';
import {
  mobileFormContainer,
  gradientButton,
  textButton,
} from '../../../styles/commons';

import Button from '../../../components/Button';

export const Container = styled.div`
  @media ${devices.mobileL} {
    ${mobileFormContainer};
  }
`;

export const SubmitButton = styled(Button)`
  ${gradientButton};
  margin-top: 16px;
`;

export const Footer = styled.div`
  text-align: center;
`;

export const LoginButton = styled(Button)`
  ${textButton};
  margin-top: 8px;
`;
