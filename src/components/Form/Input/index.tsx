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
    <>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Container>
        <S.TextField
          defaultValue={defaultValue}
          id={name}
          ref={inputRef}
          {...rest}
        />
      </S.Container>
      {error && <S.Error>{error}</S.Error>}
    </>
  );
};

export default Input;
