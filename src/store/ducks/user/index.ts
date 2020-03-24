import { action } from 'typesafe-actions';
import { Reducer } from 'redux';

export enum LoginTypes {
  REQUEST = 'login/REQUEST',
  SUCCESS = 'login/SUCCESS',
  FAILURE = 'login/FAILURE',
}

export type Auth = {
  email: string;
  password: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  category: 'juggler' | 'magician' | 'clown';
  week_days: string[];
  day_shifts: string[];
  price: number;
};

export type UserState = {
  readonly data: User | null;
  readonly loading: boolean;
  readonly error: string | null;
  readonly signed: boolean;
};

export const LoginCreators = {
  request: (auth: Auth) => action(LoginTypes.REQUEST, { auth }),
  success: (data: User) => action(LoginTypes.SUCCESS, { data }),
  failure: (error: string) => action(LoginTypes.FAILURE, { error }),
};

const INITIAL_STATE: UserState = {
  data: null,
  loading: false,
  error: null,
  signed: false,
};

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LoginTypes.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LoginTypes.SUCCESS:
      return {
        data: action.payload.data,
        loading: false,
        error: null,
        signed: true,
      };
    case LoginTypes.FAILURE:
      return {
        data: null,
        loading: false,
        error: action.payload.error,
        signed: false,
      };
    default:
      return state;
  }
};

export default reducer;
