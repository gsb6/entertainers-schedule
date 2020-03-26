import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { User, UserCreators } from '../../../store/ducks/user';
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

const SecondStep: React.FC = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const [user, setUser] = useState<User>({});

  const firstStepData = useSelector(
    (state: ApplicationState) => state.user.data
  );

  useEffect(() => {
    setUser({
      ...user,
      ...firstStepData,
    });
  }, [firstStepData]);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const changeCategoryHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUser({
      ...user,
      category: e.target.value,
    });
  };

  const changeWeekDaysHandler = (days: string[]) => {
    setUser({
      ...user,
      week_days: days,
    });
  };

  const changeDayShiftsHandler = (shifts: string[]) => {
    setUser({
      ...user,
      day_shifts: shifts,
    });
  };

  const createAccountHandler = () => {
    console.log(user);

    dispatch(UserCreators.registerRequest(user));

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
          onChange={(e) => setUser({ ...user, price: e.target.value })}
          value={user.price}
        />
        <GradientButton label="Criar conta" onClick={createAccountHandler} />
      </Container>
    </>
  );
};

export default SecondStep;
