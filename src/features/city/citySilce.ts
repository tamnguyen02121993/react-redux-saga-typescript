import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { City, ListResponse } from 'models';

export interface CityState {
  list: City[];
  loading: boolean;
}

const initialState: CityState = {
  list: [],
  loading: false,
};

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    fetchCityList(state) {
      state.loading = true;
    },
    fetchCityListSuccess(state, action: PayloadAction<ListResponse<City>>) {
      state.loading = false;
      state.list = action.payload.data;
    },
    fetchCityListFailed(state) {
      state.loading = false;
    },
  },
});

// Actions
export const cityActions = citySlice.actions;

// Selectors
export const selectCityList = (state: RootState) => state.city.list;
export const selectCityMap = createSelector(selectCityList, (cityList) => {
  return cityList.reduce((map: { [key: string]: City }, city: City) => {
    map[city.code] = city;
    return map;
  }, {});
});

export const selectCityOptions = createSelector(selectCityList, (cityList) =>
  [
    {
      name: 'No select',
      code: '',
    },
    ...cityList,
  ].map((city) => ({
    label: city.name,
    value: city.code,
  }))
);
// Reducer
const cityReducer = citySlice.reducer;
export default cityReducer;
