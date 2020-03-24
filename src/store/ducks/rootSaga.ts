import { all, takeLatest } from 'redux-saga/effects';

import { LoginTypes } from './user';
import { auth } from './user/sagas';

export default function* rootSaga() {
  return yield all([takeLatest(LoginTypes.REQUEST, auth)]);
}
