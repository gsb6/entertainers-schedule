import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { devices } from '../../style/devices';

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
  width: 218px;
  margin-right: 16px;
  padding: 18px;
  background-color: #e77cca;
  color: #fff;

  &:hover {
    background-color: #d271b8;
  }

  @media ${devices.laptop} {
    width: 200px;
  }

  @media ${devices.mobileL} {
    width: 100%;
    margin: 0;
    background-color: transparent;
    border: 1px solid #fff;
  }
`;

export const RegisterButton = styled(Link)`
  background-color: transparent;
  color: #e77cca;

  &:hover {
    text-decoration: underline;
  }

  @media ${devices.mobileL} {
    width: 100%;
    margin-bottom: 20px;
    padding: 18px;
    background-color: #fff;
    border-radius: 5px;
    text-align: center;
    color: #be50b1;
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

  span: {
    flex: 1;
    margin: 0 24px;
  }
`;

export const Footer = styled.div`
  margin: 40px 0 24px 0;

  @media ${devices.mobileL} {
    text-align: center;
    color: #fff;
  }
`;
