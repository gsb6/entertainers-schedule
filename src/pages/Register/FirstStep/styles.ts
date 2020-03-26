import styled from 'styled-components';
import { devices } from '../../../styles/devices';
import { mobileFormContainer, gradientButton } from '../../../styles/commons';

import Button from '../../../components/Button';

export const Container = styled.div`
  @media ${devices.mobileL} {
    ${mobileFormContainer};
  }
`;

export const SubmitButton = styled(Button)`
  ${gradientButton};
`;
