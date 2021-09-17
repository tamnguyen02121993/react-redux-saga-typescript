import { useAppDispatch } from 'app/hooks';
import { cityActions } from 'features/city/citySilce';
import React, { useEffect } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import AddEditPage from './pages/AddEditPage';
import ListPage from './pages/ListPage';

export default function StudentFeature() {
  const routeMatch = useRouteMatch();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(cityActions.fetchCityList());
  }, [dispatch]);

  return (
    <Switch>
      <Route path={routeMatch.path} exact>
        <ListPage />
      </Route>

      <Route path={`${routeMatch.path}/add`}>
        <AddEditPage />
      </Route>

      <Route path={`${routeMatch.path}/:studentId`}>
        <AddEditPage />
      </Route>
    </Switch>
  );
}
