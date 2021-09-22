import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

export function PrivateRoute(props: RouteProps) {
  // Check if user is logged in
  // If yes, show route
  // Otherwise, redirect to login page

  const isLogggedIn = Boolean(localStorage.getItem('access_token'));
  if (!isLogggedIn) {
    return <Redirect to="/" />;
  }

  return <Route {...props} />;
}
