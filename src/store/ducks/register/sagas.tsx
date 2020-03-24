import { call, put } from 'redux-saga/effects';
import { RegisterCreators } from './index';
import api from '../../../services/api';

export function* register({ payload }: any) {
  try {
    const response = yield call(api.post, '/users', payload.data);
  } catch (e) {
    console.log(e);
  }
}
