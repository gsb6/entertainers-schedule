import { action } from 'typesafe-actions';
import { Reducer } from 'redux';

export enum UserTypes {
  LOGIN_REQUEST = 'login/LOGIN_REQUEST',
  LOGIN_SUCCESS = 'login/LOGIN_SUCCESS',
  LOGIN_FAILURE = 'login/LOGIN_FAILURE',
  REGISTER_FIRST_STEP = 'login/REGISTER_FIRST_STEP',
  REGISTER_REQUEST = 'login/REGISTER_REQUEST',
  REGISTER_SUCCESS = 'login/REGISTER_SUCCESS',
  REGISTER_FAILURE = 'login/REGISTER_FAILURE',
}

export type Login = {
  email: string;
  password: string;
};

export type User = {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  category?: string;
  week_days?: string[];
  day_shifts?: string[];
  price?: number;
};

export interface UserState {
  readonly data: User;
  readonly loading: boolean;
  readonly error: string;
  readonly signed: boolean;
}

export const UserCreators = {
  loginRequest: (login: Login) => action(UserTypes.LOGIN_REQUEST, { login }),
  loginSuccess: (data: User) => action(UserTypes.LOGIN_SUCCESS, { data }),
  loginFailure: (error: string) => action(UserTypes.LOGIN_FAILURE, { error }),
  registerFirstStep: (user: User) =>
    action(UserTypes.REGISTER_FIRST_STEP, { user }),
  registerRequest: (user: User) => action(UserTypes.REGISTER_REQUEST, { user }),
  registerSuccess: (data: User) => action(UserTypes.REGISTER_SUCCESS, { data }),
  registerFailure: (error: string) =>
    action(UserTypes.REGISTER_FAILURE, { error }),
};

const INITIAL_STATE: UserState = {
  data: { id: 1 },
  loading: false,
  error: '',
  signed: false,
};

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UserTypes.LOGIN_SUCCESS:
      return {
        data: action.payload.data,
        loading: false,
        error: '',
        signed: true,
      };
    case UserTypes.LOGIN_FAILURE:
      return {
        data: {},
        loading: false,
        error: action.payload.error,
        signed: false,
      };
    case UserTypes.REGISTER_FIRST_STEP:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload.user,
        },
      };
    case UserTypes.REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UserTypes.REGISTER_SUCCESS:
      return {
        data: action.payload.data,
        loading: false,
        error: '',
        signed: true,
      };
    case UserTypes.REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        signed: false,
      };
    default:
      return state;
  }
};

export default reducer;
