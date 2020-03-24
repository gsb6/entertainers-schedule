import { all, takeLatest } from 'redux-saga/effects';

import { LoginTypes } from './user';
import { RegisterTypes } from './register';

import { auth } from './user/sagas';
import { register } from './register/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(LoginTypes.REQUEST, auth),
    takeLatest(RegisterTypes.REQUEST, register),
  ]);
}
