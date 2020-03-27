import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import { Event as TEvent, EventsCreators } from '../../store/ducks/events';
import { days, months, weekDays } from '../../constants';

import Event from '../../components/Event';
import Modal from '../../components/Modal';
import NewEvent from '../../components/NewEvent';
import Title from '../../components/Title';
import NotAvailable from '../../components/NotAvailable';

import LeftArrowIcon from '../../assets/left-arrow.svg';
import RightArrowIcon from '../../assets/right-arrow.svg';

import * as S from './styles';

type Day = {
  time: number;
  day: string;
};

const DAY_IN_MS = 86400000;

const Schedule: React.FC = () => {
  const dispatch = useDispatch();

  const [openNewEvent, setOpenNewEvent] = useState<boolean>(false);
  const [firstDay, setFirstDay] = useState<number>(0);

  const user = useSelector((state: ApplicationState) => state.user.data);
  const events = useSelector((state: ApplicationState) => state.events.data);

  const currentWeek = useMemo<Day[]>(() => {
    const newWeek = new Array(7).fill(0);

    return newWeek.map((_, index) => ({
      time: new Date(DAY_IN_MS * index + firstDay).getDate(),
      day: weekDays[index],
    }));
  }, [firstDay]);

  useEffect(() => {
    console.log(events.length, 'eventos');
    console.log('user.id', user.id);
  }, [events]);

  const weeklyEvents = useMemo<TEvent[]>(() => {
    if (!events.length) return [];

    return events.filter(
      (event) =>
        Number(event.date) >= firstDay &&
        Number(event.date) <= firstDay + DAY_IN_MS * 6
    );
  }, [events, firstDay]);

  useEffect(() => {
    dispatch(EventsCreators.request(user.id));
  }, []);

  useEffect(() => {
    const today = Date.now();
    const monday = today - new Date(today).getDay() * DAY_IN_MS;

    setFirstDay(monday);
  }, []);

  const markParty = (day: string, shift: string) => {
    const event = weeklyEvents.filter(
      (event) => event.week_day === day && event.day_shift === shift
    );

    if (!event.length) return [];

    return event;
  };

  const previousWeek = () => {
    setFirstDay(firstDay - DAY_IN_MS * 7);
  };

  const nextWeek = () => {
    setFirstDay(firstDay + DAY_IN_MS * 7);
  };

  const newEventHandler = () => {
    dispatch(EventsCreators.request(user.id));
  };

  return (
    <>
      <S.LeftArrow onClick={previousWeek}>
        <img src={LeftArrowIcon} />
      </S.LeftArrow>
      <S.RightArrow onClick={nextWeek}>
        <img src={RightArrowIcon} />
      </S.RightArrow>
      <S.Container>
        <S.Header>
          <Title>
            <b>{`${months[new Date(firstDay).getMonth()]}, ${new Date(
              firstDay
            ).getFullYear()}`}</b>
          </Title>
          <S.NewEvent
            label="Novo evento"
            onClick={() => setOpenNewEvent(true)}
          />
        </S.Header>
        <S.Calendar>
          {/* {events.map((event) => (
          <div key={event.id}>{event.name}</div>
        ))} */}
          <S.Days>
            <S.Grid>
              {currentWeek.map(({ time, day }) => (
                <S.Box key={day}>
                  <S.DayNumber>{time}</S.DayNumber>
                  <S.DayName>{day}</S.DayName>
                </S.Box>
              ))}
            </S.Grid>
          </S.Days>
          <S.Grid>
            {days.map((day) => {
              if (
                !user.day_shifts?.includes('morning') ||
                !user.week_days?.includes(day)
              ) {
                return (
                  <div>
                    <NotAvailable />
                  </div>
                );
              }

              return (
                <div key={day}>
                  <Event event={markParty(day, 'morning')} />
                </div>
              );
            })}
          </S.Grid>
          <S.Grid>
            {days.map((day) => {
              if (
                !user.day_shifts?.includes('afternoon') ||
                !user.week_days?.includes(day)
              ) {
                return (
                  <div>
                    <NotAvailable />
                  </div>
                );
              }

              return (
                <div key={day}>
                  <Event event={markParty(day, 'afternoon')} />
                </div>
              );
            })}
          </S.Grid>
          <S.Grid>
            {days.map((day) => {
              if (
                !user.day_shifts?.includes('night') ||
                !user.week_days?.includes(day)
              ) {
                return (
                  <div>
                    <NotAvailable />
                  </div>
                );
              }

              return (
                <div key={day}>
                  <Event event={markParty(day, 'night')} />
                </div>
              );
            })}
          </S.Grid>
        </S.Calendar>
        <Modal
          isOpen={openNewEvent}
          onRequestClose={() => setOpenNewEvent(false)}
          title="Cadastrar evento"
        >
          <NewEvent onSubmit={newEventHandler} />
        </Modal>
      </S.Container>
    </>
  );
};

export default Schedule;
