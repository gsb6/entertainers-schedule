import React from 'react';
import { Event as TEvent } from '../../store/ducks/events';

import * as S from './styles';

type Props = {
  event: TEvent[];
};

const Event: React.FC<Props> = ({ event }) => {
  if (!event.length) return <S.Empty />;

  return (
    <S.Container>
      <b>{event[0].name}</b>
      <span>{event[0].address}</span>
    </S.Container>
  );
};

export default Event;
