import { all, takeLatest } from 'redux-saga/effects';

import { UserTypes } from './user';
import { EventsTypes } from './events';

import { login, register } from './user/sagas';
import { get, add } from './events/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(UserTypes.LOGIN_REQUEST, login),
    takeLatest(UserTypes.REGISTER_REQUEST, register),
    takeLatest(EventsTypes.REQUEST, get),
    takeLatest(EventsTypes.ADD, add),
  ]);
}
