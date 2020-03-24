import styled from 'styled-components';
import { devices } from '../../style/devices';
import { mobileFormContainer } from '../../style/commons';

export const Container = styled.div`
  @media ${devices.mobileL} {
    ${mobileFormContainer};
  }
`;
