import { action } from 'typesafe-actions';
import { Reducer } from 'redux';

export enum EventsTypes {
  ADD = 'events/ADD',
  REQUEST = 'events/REQUEST',
  SUCCESS = 'events/SUCCESS',
  FAILURE = 'events/FAILURE',
}

export type Event = {
  id?: number;
  user_id: number;
  name: string;
  date: string;
  week_day: string;
  day_shift: string;
  address: string;
};

export type EventState = {
  readonly data: Event[];
  readonly loading: boolean;
  readonly error: string | null;
};

export const EventsCreators = {
  add: (event: Event) => action(EventsTypes.ADD, { event }),
  request: (user_id: number | undefined) =>
    action(EventsTypes.REQUEST, { user_id }),
  success: (data: Event[]) => action(EventsTypes.SUCCESS, { data }),
  failure: (error: string) => action(EventsTypes.FAILURE, { error }),
};

const INITIAL_STATE: EventState = {
  data: [],
  loading: false,
  error: null,
};

const reducer: Reducer<EventState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EventsTypes.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case EventsTypes.SUCCESS:
      return {
        data: action.payload.data,
        loading: false,
        error: null,
      };
    case EventsTypes.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default reducer;
