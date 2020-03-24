import { call, put } from 'redux-saga/effects';
import { LoginCreators } from './index';
import api from '../../../services/api';

export function* auth({ payload }: any) {
  const { email, password } = payload.auth;
  try {
    const { data } = yield call(api.get, `/users?email=${email}`);

    if (!data.length) {
      yield put(LoginCreators.failure('Usuário não existe ou senha incorreta'));
      return;
    }

    if (password !== data[0].password) {
      yield put(LoginCreators.failure('Usuário não existe ou senha incorreta'));
      return;
    }

    yield put(LoginCreators.success(data[0]));
  } catch (e) {
    yield put(LoginCreators.failure(e.toString()));
  }
}
