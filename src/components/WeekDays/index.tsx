import React, { useEffect, useState } from 'react';

import * as S from './styles';

type Day = {
  label: string;
  value: string;
  selected: boolean;
};

type Props = {
  onSelectDay: (days: string[]) => void;
};

const WeekDays: React.FC<Props> = ({ onSelectDay }) => {
  const [days, setDays] = useState<Day[]>([
    { label: 'S', value: 'monday', selected: false },
    { label: 'T', value: 'tuesday', selected: false },
    { label: 'Q', value: 'wednesday', selected: false },
    { label: 'Q', value: 'thursday', selected: false },
    { label: 'S', value: 'friday', selected: false },
    { label: 'S', value: 'saturday', selected: false },
    { label: 'D', value: 'sunday', selected: false },
  ]);

  useEffect(() => {
    const selectedDays = days.filter((day) => day.selected);
    const daysList = selectedDays.map((day) => day.value);

    onSelectDay(daysList);
  }, [days]);

  const toggleDayHandler = (day: Day) => {
    const dayIndex = days.findIndex((d) => d.value === day.value);
    const daySelected = { ...days[dayIndex] };

    daySelected.selected = !daySelected.selected;

    const daysClone = [...days];

    daysClone[dayIndex] = daySelected;

    setDays(daysClone);
  };
  return (
    <div>
      <S.Label>Selecione os dias que trabalhará</S.Label>
      <S.Container>
        {days.map((day) => (
          <S.DayButton
            key={day.value}
            onClick={() => toggleDayHandler(day)}
            selected={day.selected}
          >
            {day.label}
          </S.DayButton>
        ))}
      </S.Container>
    </div>
  );
};

export default WeekDays;
