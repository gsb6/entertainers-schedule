import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import * as S from './styles';

type Props = {
  name: string;
  label: string;
  type?: string;
};

const Input: React.FC<Props> = ({ name, label, ...rest }) => {
  const inputRef = useRef(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <div>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Box>
        <S.TextField
          defaultValue={defaultValue}
          id={name}
          ref={inputRef}
          {...rest}
        />
      </S.Box>
      <S.Error>{error}</S.Error>
    </div>
  );
};

export default Input;
