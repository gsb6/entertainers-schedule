import React from 'react';

import * as S from './styles';

type Props = {
  name: string;
  label: string;
  type?: string;
  error?: string;
  value?: string | number;
  onChange?: (e: any) => void;
};

const Input: React.FC<Props> = ({ name, label, error, ...rest }) => (
  <>
    <S.Label htmlFor={name}>{label}</S.Label>
    <S.Container>
      <S.TextField id={name} {...rest} />
    </S.Container>
    {error && <S.Error>{error}</S.Error>}
  </>
);

export default Input;
