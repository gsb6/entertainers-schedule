import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import * as S from './styles';

type Option = {
  value: string | number;
  label?: string;
};

type Props = {
  name: string;
  label: string;
  options: Option[];
};

const Select: React.FC<Props> = ({ name, label, options, ...rest }) => {
  const selectRef = useRef(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <div>
      <S.Label>{label}</S.Label>
      <S.Container defaultValue={defaultValue} ref={selectRef} {...rest}>
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
