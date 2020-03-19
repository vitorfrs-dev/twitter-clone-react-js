import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { history } from '../../../routes';
import api from '../../../services/api';

import { signInSuccess, signInFailure } from './actions';

function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/users/signIn', {
      email,
      password,
    });

    yield put(signInSuccess(response.data));

    api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
    history.push('/');
  } catch (err) {
    yield put(signInFailure());
    toast.error('Senha ou usuário inválidos');
  }
}

function setToken({ payload }) {
  if (!payload) {
    return;
  }
  api.defaults.headers.common.Authorization = `Bearer ${payload.auth.token}`;
}

export default function* saga() {
  yield all([
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('persist/REHYDRATE', setToken),
  ]);
}
