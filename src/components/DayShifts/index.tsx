import React, { useEffect, useState } from 'react';

import * as S from './styles';

type Props = {
  onSelectShift: (shifts: string[]) => void;
};

type Shift = {
  label: string;
  value: string;
  selected: boolean;
};

const WeekDays: React.FC<Props> = ({ onSelectShift }) => {
  const [shifts, setShifts] = useState<Shift[]>([
    { label: 'Manhã', value: 'morning', selected: false },
    { label: 'Tarde', value: 'afternoon', selected: false },
    { label: 'Noite', value: 'night', selected: false },
  ]);

  useEffect(() => {
    const selectedShifts = shifts.filter((shift) => shift.selected);
    const shiftsList = selectedShifts.map((shift) => shift.value);

    onSelectShift(shiftsList);
  }, [shifts]);

  const toggleShiftHandler = (shift: Shift) => {
    const shiftIndex = shifts.findIndex((s) => s.value === shift.value);
    const shiftSelected = { ...shifts[shiftIndex] };

    shiftSelected.selected = !shiftSelected.selected;

    const shiftsClone = [...shifts];

    shiftsClone[shiftIndex] = shiftSelected;

    setShifts(shiftsClone);
  };
  return (
    <div>
      <S.Label>Selecione os turnos que trabalhará</S.Label>
      <S.Container>
        {shifts.map((shift) => (
          <S.ShiftButton
            key={shift.value}
            onClick={() => toggleShiftHandler(shift)}
            selected={shift.selected}
          >
            {shift.label}
          </S.ShiftButton>
        ))}
      </S.Container>
    </div>
  );
};

export default WeekDays;
