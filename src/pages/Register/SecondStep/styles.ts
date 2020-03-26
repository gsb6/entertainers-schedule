import styled from 'styled-components';
import { devices } from '../../../styles/devices';
import { mobileFormContainer } from '../../../styles/commons';

export const Container = styled.div`
  @media ${devices.mobileL} {
    ${mobileFormContainer};
  }
`;
