import { call, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import { UserCreators } from './index';
import api from '../../../services/api';

export function* login({ payload }: AnyAction) {
  const { email, password } = payload.login;

  try {
    const { data } = yield call(api.get, `/users?email=${email}`);

    if (!data.length) {
      yield put(
        UserCreators.loginFailure('Usuário não existe ou senha incorreta')
      );
      return;
    }

    if (password !== data[0].password) {
      yield put(
        UserCreators.loginFailure('Usuário não existe ou senha incorreta')
      );
      return;
    }

    yield put(UserCreators.loginSuccess(data[0]));
  } catch (e) {
    yield put(UserCreators.loginFailure(e.toString()));
  }
}

export function* register({ payload }: any) {
  try {
    const response = yield call(api.post, '/users', payload.user);
  } catch (e) {
    console.log(e);
  }
}
