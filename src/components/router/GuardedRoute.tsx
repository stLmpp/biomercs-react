import React, { ReactElement } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { isAnyObject } from '../../utils/utils';
import { BioRouteCondition } from './BioRoute';

export const GuardedRoute = ({
  children,
  render,
  condition,
  ...props
}: RouteProps & { condition: BioRouteCondition }): ReactElement => {
  function renderCb(location: RouteComponentProps): ReactElement {
    let to = condition(location);
    if (to === true) {
      return <>{children}</>;
    }
    if (isAnyObject(to)) {
      to = { ...to, state: { from: location } };
      return <Redirect to={to} />;
    }
    to = to || '/';
    return <Redirect to={to} />;
  }

  return <Route {...props} render={renderCb} />;
};
