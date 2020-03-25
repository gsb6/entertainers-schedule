import { action } from 'typesafe-actions';
import { Reducer } from 'redux';

export enum RegisterTypes {
  SET_FIRST_STEP = 'register/SET_FIRST_STEP',
  SET_SECOND_STEP = 'register/SET_SECOND_STEP',
  REQUEST = 'register/REQUEST',
  SUCCESS = 'register/SUCCESS',
  FAILURE = 'register/FAILURE',
}

export type FirstStep = {
  name: string;
  email: string;
  password: string;
};

export type SecondStep = {
  category: string;
  week_days: string[];
  day_shifts: string[];
  price: string;
};

export type User = FirstStep & SecondStep;

export type UserState = {
  readonly data: any;
  readonly loading: boolean;
  readonly error: string | null;
};

export const RegisterCreators = {
  setFirstStep: (data: FirstStep) =>
    action(RegisterTypes.SET_FIRST_STEP, { data }),
  setSecondStep: (data: SecondStep) =>
    action(RegisterTypes.SET_SECOND_STEP, { data }),
  request: (user: User | null) => action(RegisterTypes.REQUEST, { user }),
  success: (data: User) => action(RegisterTypes.SUCCESS, { data }),
  failure: (error: string) => action(RegisterTypes.FAILURE, { error }),
};

const INITIAL_STATE: UserState = {
  data: null,
  loading: false,
  error: null,
};

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RegisterTypes.SET_FIRST_STEP:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload.data,
        },
      };
    case RegisterTypes.SET_SECOND_STEP:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload.data,
        },
      };
    case RegisterTypes.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case RegisterTypes.SUCCESS:
      return {
        data: action.payload.data,
        loading: false,
        error: null,
      };
    case RegisterTypes.FAILURE:
      return {
        data: null,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default reducer;
