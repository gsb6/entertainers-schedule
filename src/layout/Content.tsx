import React from 'react';
import styled from 'styled-components';
import { devices } from '../style/devices';

import Button from '../components/Button';
import Card from '../components/Card';
import Divider from '../components/Divider';

const Container = styled.main`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 40px;
  flex: 1;

  @media ${devices.mobileL} {
    padding: 40px;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;

  @media ${devices.mobileL} {
    flex-direction: column-reverse;
  }
`;

const LoginButton = styled(Button)`
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

const RegisterButton = styled(Button)`
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
    color: #be50b1;
  }
`;

const Content: React.FC = () => (
  <Container>
    <h1>Gerenciador de eventos para animadores de festas</h1>
    <Buttons>
      <LoginButton label="Entrar" onClick={() => {}} />
      <RegisterButton label="Criar conta" onClick={() => {}} />
    </Buttons>
    <Divider />
    <Card />
    Desafio Front End Triider
  </Container>
);

export default Content;
