import * as React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import AddEditPage from './pages/AddEditPage';
import ListPage from './pages/ListPage';

export default function StudentFeature() {
  const routeMatch = useRouteMatch();

  return (
    <Switch>
      <Route path={routeMatch.path} exact>
        <ListPage />
      </Route>

      <Route path={`${routeMatch.path}/add`}>
        <ListPage />
      </Route>

      <Route path={`${routeMatch.path}/:studentId`}>
        <AddEditPage />
      </Route>
    </Switch>
  );
}
