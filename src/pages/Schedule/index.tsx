import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import { EventsCreators } from '../../store/ducks/events';

import Modal from '../../components/Modal';
import NewEvent from '../../components/NewEvent';
import Title from '../../components/Title';

import * as S from './styles';

const Schedule: React.FC = () => {
  const dispatch = useDispatch();

  const [openNewEvent, setOpenNewEvent] = useState<boolean>(false);

  const events = useSelector((state: ApplicationState) => state.events.data);
  const user = useSelector((state: ApplicationState) => state.user.data);

  useEffect(() => {
    if (user) {
      dispatch(EventsCreators.request(user!.id));
    }
  }, [user]);

  console.log('alo', events);

  return (
    <S.Container>
      <S.Header>
        <Title>Novembro</Title>
        <S.NewEvent label="Novo evento" onClick={() => setOpenNewEvent(true)} />
      </S.Header>
      <S.Calendar>
        {events.map((event) => (
          <div key={event.id}>{event.name}</div>
        ))}
      </S.Calendar>
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
