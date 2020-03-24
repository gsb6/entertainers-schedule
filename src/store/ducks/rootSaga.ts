import { all, takeLatest } from 'redux-saga/effects';

import { LoginTypes } from './user';
import { RegisterTypes } from './register';
import { EventsTypes } from './events';

import { auth } from './user/sagas';
import { register } from './register/sagas';
import { get, add } from './events/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(LoginTypes.REQUEST, auth),
    takeLatest(RegisterTypes.REQUEST, register),
    takeLatest(EventsTypes.REQUEST, get),
    takeLatest(EventsTypes.ADD, add),
  ]);
}
