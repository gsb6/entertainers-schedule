import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import GradientButton from '../GradientButton';
import Input from '../Form/Input';

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

const NewEvent: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const dispatch = useDispatch();

  const handleSubmit = (data: any) => {
    console.log(data.date);
  };

  return (
    <Form onSubmit={handleSubmit} ref={formRef}>
      <Input name="name" label="Nome do evento" />
      <Input name="address" label="Local" />
      <S.Grid>
        <Input name="date" label="Data" type="date" />
        <Input name="day_shift" label="Turno" />
      </S.Grid>
      <GradientButton label="Adicionar evento" type="submit" />
    </Form>
  );
};

export default NewEvent;
