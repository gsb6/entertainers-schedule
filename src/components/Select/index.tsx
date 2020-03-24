import React from 'react';

import * as S from './styles';

type Option = {
  value: string | number;
  label?: string;
};

type Props = {
  label: string;
  options: Option[];
  onChange: (e: any) => void;
};

const Select: React.FC<Props> = ({ label, options, onChange }) => {
  return (
    <div>
      <S.Label>{label}</S.Label>
      <S.Container onChange={(e) => onChange(e)}>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </S.Container>
    </div>
  );
};

export default Select;
