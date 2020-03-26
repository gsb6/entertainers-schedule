import styled from 'styled-components';
import { devices } from '../../styles/devices';
import {
  containedButton,
  outlinedButton,
  textButton,
} from '../../styles/commons';

import Button from '../../components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media ${devices.mobileL} {
    justify-content: space-between;
    margin-top: 20%;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 1;

  @media ${devices.mobileL} {
    justify-content: flex-end;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;

  @media ${devices.mobileL} {
    flex-direction: column-reverse;
  }
`;

export const LoginButton = styled(Button)`
  width: 220px;
  margin-right: 20px;

  ${containedButton};

  @media ${devices.laptop} {
    width: 200px;
  }

  @media ${devices.mobileL} {
    width: 100%;
    margin: 0;

    ${outlinedButton};
  }
`;

export const RegisterButton = styled(Button)`
  ${textButton};

  @media ${devices.mobileL} {
    ${containedButton};

    width: 100%;
    margin-bottom: 20px;
    padding: 16px;
    background-color: #fff;
    color: #be50b1;

    &:hover {
      background-color: #ddd;
    }
  }
`;

export const Line = styled.hr`
  @media ${devices.mobileL} {
    display: none;
  }
`;

export const Cards = styled.div`
  div {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  @media ${devices.mobileL} {
    display: none;
  }
`;

export const CardBody = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 12%;
  }

  span {
    margin: 0 24px;
    flex-wrap: wrap;
    flex: 1;
  }
`;

export const Footer = styled.div`
  margin: 40px 0 24px 0;

  @media ${devices.mobileL} {
    text-align: center;
    color: #fff;
  }
`;
