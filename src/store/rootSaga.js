import { all } from 'redux-saga/effects';
import authSaga from './modules/auth/sagas';

export default function* rootSaga() {
  return yield all([authSaga()]);
}
