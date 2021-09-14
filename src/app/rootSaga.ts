import { all } from 'redux-saga/effects';
import counterSaga from 'features/counter/counterSaga';
import { authSaga } from 'features/auth/authSaga';
import { dashboardSaga } from 'features/dashboard/dashboardSaga';

export default function* rootSaga() {
  console.log('root saga');
  yield all([counterSaga(), authSaga(), dashboardSaga()]);
}
