import React, { FunctionComponent } from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';
import { Login } from './auth/Login';
import { GuardedRoute } from '../components/router/GuardedRoute';
import { useAuthUser } from '../hooks/use-auth-user';

export const Auth: FunctionComponent = () => {
  const match = useRouteMatch();
  const [user] = useAuthUser();
  return (
    <Switch>
      <GuardedRoute path={`${match.path}/login`} condition={() => !user || '/home'}>
        <Login />
      </GuardedRoute>
    </Switch>
  );
};
