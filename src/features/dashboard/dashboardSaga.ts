import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import cityApi from 'api/cityApi';
import studentApi from 'api/studentApi';
import { City, ListResponse, Student } from 'models';
import { dashboardActions, RankingByCity } from './dashboardSlice';

function* fetchStatistics() {
  const responseList: Array<ListResponse<Student>> = yield all([
    call(studentApi.getAll, { _page: 1, _limit: 1, gender: 'male' }),
    call(studentApi.getAll, { _page: 1, _limit: 1, gender: 'female' }),
    call(studentApi.getAll, { _page: 1, _limit: 1, mark_gte: 8 }),
    call(studentApi.getAll, { _page: 1, _limit: 1, mark_lte: 5 }),
  ]);

  const statistics = responseList.map((x) => x.pagination._totalRows);
  const [maleCount, femaleCount, highMarkCount, lowMarkCount] = statistics;
  yield put(
    dashboardActions.setStatistics({
      femaleCount,
      highMarkCount,
      lowMarkCount,
      maleCount,
    })
  );
}

function* fetchHighestStudentList() {
  const { data }: ListResponse<Student> = yield call(studentApi.getAll, {
    _page: 1,
    _limit: 5,
    _order: 'desc',
    _sort: 'mark',
  });

  yield put(dashboardActions.setHighestStudentList(data));
}

function* fetchLowestStudentList() {
  const { data }: ListResponse<Student> = yield call(studentApi.getAll, {
    _page: 1,
    _limit: 5,
    _order: 'asc',
    _sort: 'mark',
  });

  yield put(dashboardActions.setLowestStudentList(data));
}

function* fetchRankingByCityList() {
  // Fetch city list
  const { data: cityList }: ListResponse<City> = yield call(cityApi.getAll);

  // Fetch ranking by city
  const callList = cityList.map((x) =>
    call(studentApi.getAll, {
      _page: 1,
      _limit: 5,
      _order: 'desc',
      _sort: 'mark',
      city: x.code,
    })
  );

  const responseList: Array<ListResponse<Student>> = yield all(callList);

  const rankingByCityList: Array<RankingByCity> = responseList.map((x, index) => ({
    cityId: cityList[index].code,
    cityName: cityList[index].name,
    rankingList: x.data,
  }));

  // Update state
  yield put(dashboardActions.setRankingByCityList(rankingByCityList));
}

function* fetchDashboardData() {
  try {
    yield all([
      call(fetchStatistics),
      call(fetchHighestStudentList),
      call(fetchLowestStudentList),
      call(fetchRankingByCityList),
    ]);

    yield put(dashboardActions.fetchDataSuccess());
  } catch (error) {
    yield put(dashboardActions.fetchDataError());
    console.log('Failed to fetch dashboard data', error);
  }
}

export default function* dashboardSaga() {
  yield takeLatest(dashboardActions.fetchData.type, fetchDashboardData);
}
