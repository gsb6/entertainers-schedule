import styled from 'styled-components';
import { devices } from '../../style/devices';

export const Container = styled.div`
  @media ${devices.mobileL} {
    padding: 64px 32px 24px 32px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.17);
  }
`;
