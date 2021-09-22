import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from 'features/auth/pages/LoginPage';
import { AdminLayout } from 'components/Layout';
import { NotFound, PrivateRoute } from 'components/Common';

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <LoginPage />
      </Route>

      <PrivateRoute path="/admin">
        <AdminLayout />
      </PrivateRoute>

      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default App;
