import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { ApplicationState } from '../../store';
import { EventsCreators } from '../../store/ducks/events';

import GradientButton from '../GradientButton';
import Input from '../Form/Input';
import Select from '../Form/Select';

import * as S from './styles';

const days = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];

const shifts = [
  { label: 'Manhã', value: 'morning' },
  { label: 'Tarde', value: 'afternoon' },
  { label: 'Noite', value: 'night' },
];

const NewEvent: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const dispatch = useDispatch();

  const user = useSelector((state: ApplicationState) => state.user.data);

  const handleSubmit = (data: any, { reset }: any) => {
    const eventDate = new Date(data.date);

    const dateInMilliseconds = eventDate.getTime();
    const weekDay = days[eventDate.getUTCDay()];

    const { name, address, day_shift } = data;

    const payload = {
      user_id: user!.id,
      name,
      date: dateInMilliseconds.toString(),
      week_day: weekDay,
      day_shift,
      address,
    };

    // dispatch(EventsCreators.add(payload));

    alert('Evento criado!');

    reset();
  };

  return (
    <Form onSubmit={handleSubmit} ref={formRef}>
      <Input name="name" label="Nome do evento" />
      <Input name="address" label="Local" />
      <S.Grid>
        <Input name="date" label="Data" type="date" />
        <Select name="day_shift" label="Turno" options={shifts} />
      </S.Grid>
      <GradientButton label="Adicionar evento" type="submit" />
    </Form>
  );
};

export default NewEvent;
