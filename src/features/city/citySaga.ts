import { call, put, takeLatest } from '@redux-saga/core/effects';
import cityApi from 'api/cityApi';
import { City, ListResponse } from 'models';
import { cityActions } from './citySilce';

function* fetchCityList() {
  try {
    const city: ListResponse<City> = yield call(cityApi.getAll);
    yield put(cityActions.fetchCityListSuccess(city));
  } catch (error) {
    yield put(cityActions.fetchCityListFailed());
  }
}

export default function* citySaga() {
  yield takeLatest(cityActions.fetchCityList.type, fetchCityList);
}
