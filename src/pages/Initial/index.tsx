import React from 'react';

import * as S from './styles';

import Card from '../../components/Card';

import IconBalloon from '../../assets/balloon.svg';
import IconParty from '../../assets/party.svg';

const Initial: React.FC = () => (
  <>
    <S.Container>
      <h1>Gerenciador de eventos para animadores de festas</h1>
      <S.Buttons>
        <S.LoginButton label="Entrar" onClick={() => {}} />
        <S.RegisterButton to="/register">Criar conta</S.RegisterButton>
      </S.Buttons>
      <S.Line />
      <S.Info>
        <Card>
          <S.CardBody>
            <img alt="Balão" src={IconBalloon} />
            <span>Cadastre suas festas e organize sua agenda!</span>
          </S.CardBody>
        </Card>
        <Card>
          <S.CardBody>
            <img alt="Festa" src={IconParty} />
            <span>
              Informe sua disponibilidade de dias e horários e crie um
              calendário personalizado
            </span>
          </S.CardBody>
        </Card>
      </S.Info>
    </S.Container>
    <S.Footer>Desafio Front end Triider</S.Footer>
  </>
);

export default Initial;
