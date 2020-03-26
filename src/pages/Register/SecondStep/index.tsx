import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  SecondStep,
  RegisterCreators,
} from '../../../store/ducks/register/index';
import { ApplicationState } from '../../../store';

import DayShifts from '../../../components/DayShifts';
import GradientButton from '../../../components/GradientButton';
import Input from '../../../components/Input';
import Select from '../../../components/Select';
import Title from '../../../components/Title';
import WeekDays from '../../../components/WeekDays';

import { Container } from './styles';

const categories = [
  { value: 'juggler', label: 'Malabarista' },
  { value: 'magician', label: 'Mágico' },
  { value: 'clown', label: 'Palhaço' },
];

const WorkInfo: React.FC = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const user = useSelector((state: ApplicationState) => state.register.data);

  const [work, setWork] = useState<SecondStep>({
    category: 'juggler',
    day_shifts: [],
    week_days: [],
    price: '',
  });

  const changeCategoryHandler = (e: any) => {
    setWork({
      ...work,
      category: e.target.value,
    });
  };

  const changeWeekDaysHandler = (days: string[]) => {
    setWork({
      ...work,
      week_days: days,
    });
  };

  const changeDayShiftsHandler = (shifts: string[]) => {
    setWork({
      ...work,
      day_shifts: shifts,
    });
  };

  const createAccountHandler = () => {
    const newUser = { ...user, ...work };

    console.log(newUser);

    dispatch(RegisterCreators.setSecondStep(work));
    dispatch(RegisterCreators.request(newUser));

    alert('Usuário cadastrado');

    history.push('/');
  };

  return (
    <>
      <Title>Criar conta</Title>
      <Container>
        <Select
          label="Selecione sua categoria"
          onChange={changeCategoryHandler}
          options={categories}
        />
        <WeekDays onSelectDay={changeWeekDaysHandler} />
        <DayShifts onSelectShift={changeDayShiftsHandler} />
        <Input
          name="price"
          label="Informe o preço do seu serviço"
          onChange={(e) => setWork({ ...work, price: e.target.value })}
          value={work.price}
        />
        <GradientButton label="Criar conta" onClick={createAccountHandler} />
      </Container>
    </>
  );
};

export default WorkInfo;
