import styled from 'styled-components';
import { devices } from '../../styles/devices';
import {
  mobileFormContainer,
  gradientButton,
  textButton,
} from '../../styles/commons';

import Button from '../../components/Button';

export const Container = styled.div`
  @media ${devices.mobileL} {
    ${mobileFormContainer};
  }
`;

export const SubmitButton = styled(Button)`
  ${gradientButton};
  margin-top: 16px;
`;

export const ForgotPassword = styled.div`
  margin-top: 4px;
  text-align: right;
  font-size: 14px;
`;

export const Footer = styled.div`
  text-align: center;
`;

export const RegisterButton = styled(Button)`
  ${textButton};
  margin-top: 8px;
`;
