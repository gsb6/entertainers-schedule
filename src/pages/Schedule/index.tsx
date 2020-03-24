import React, { useState } from 'react';
import moment from 'moment';

import Modal from '../../components/Modal';
import NewEvent from '../../components/NewEvent';
import Title from '../../components/Title';

import * as S from './styles';

const Schedule: React.FC = () => {
  const [openNewEvent, setOpenNewEvent] = useState<boolean>(false);

  return (
    <S.Container>
      <S.Header>
        <Title>Novembro</Title>
        <S.NewEvent label="Novo evento" onClick={() => setOpenNewEvent(true)} />
      </S.Header>
      <S.Calendar>alo</S.Calendar>
      <Modal
        isOpen={openNewEvent}
        onRequestClose={() => setOpenNewEvent(false)}
        title="Cadastrar evento"
      >
        <NewEvent />
      </Modal>
    </S.Container>
  );
};

export default Schedule;
