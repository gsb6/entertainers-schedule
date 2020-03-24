import React from 'react';
import { useHistory } from 'react-router-dom';

import * as S from './styles';

import Card from '../../components/Card';
import Title from '../../components/Title';

import IconBalloon from '../../assets/balloon.svg';
import IconParty from '../../assets/party.svg';

const Initial: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <S.Container>
        <Title>Gerenciador de eventos para animadores de festas</Title>
        <S.Body>
          <S.Buttons>
            <S.LoginButton
              label="Entrar"
              onClick={() => history.push('/login')}
            />
            <S.RegisterButton to="/register">Criar conta</S.RegisterButton>
          </S.Buttons>
          <S.Line />
          <S.Cards>
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
          </S.Cards>
        </S.Body>
      </S.Container>
      <S.Footer>Desafio Front end Triider</S.Footer>
    </>
  );
};

export default Initial;
