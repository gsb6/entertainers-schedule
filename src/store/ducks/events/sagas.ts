import { call, put } from 'redux-saga/effects';
import { EventsCreators } from './index';
import api from '../../../services/api';

export function* get({ payload }: any) {
  const { user_id } = payload;

  try {
    const { data } = yield call(api.get, `/events?user_id=${user_id}`);

    if (!data.length) {
      yield put(EventsCreators.failure('Nenhum evento encontrado'));
      return;
    }

    yield put(EventsCreators.success(data));
  } catch (e) {
    yield put(EventsCreators.failure(e.toString()));
    console.log(e);
  }
}

export function* add({ payload }: any) {
  const { event } = payload;

  try {
    const response = yield call(api.post, '/events', event);
    console.log(response.data);
  } catch (e) {
    yield put(EventsCreators.failure(e.toString()));
  }
}
