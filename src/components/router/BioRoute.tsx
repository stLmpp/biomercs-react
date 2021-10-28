import React, { FunctionComponent, ReactElement, ReactNode, useEffect, useState } from 'react';
import { Redirect, RedirectProps, Route, RouteProps } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { isAnyObject } from '../../utils/utils';

export type LazyRouteFn = <T>() => Promise<FunctionComponent<T>>;
export type ResolveFn = <T>() => Promise<T>;
export type BioRouteCondition = (location: RouteComponentProps) => boolean | RedirectProps['to'];

export interface BioRouteProps<T> extends RouteProps {
  lazyFn?: LazyRouteFn;
  lazyProps?: T;
  skeleton?: ReactElement;
  guard?: BioRouteCondition;
  resolve?: Record<string | number, ResolveFn>;
}

export function BioRoute<T>({
  children,
  render,
  guard,
  resolve,
  lazyFn,
  lazyProps,
  skeleton,
  ...props
}: BioRouteProps<T>): ReactElement {
  const [LazyComponent, setLazyComponent] = useState<FunctionComponent | null>(null);
  const [renderChildren, setRenderChildren] = useState<ReactNode | null>(null);
  const [resolved, setResolved] = useState<Record<string, any> | null>(null);

  async function resolver(): Promise<void> {
    const entries = Object.entries(resolve ?? {});
    const promises = entries.map(([, value]) => value());
    const values = await Promise.all(promises);
    setResolved(entries.reduce((acc, [key], index) => ({ ...acc, [key]: values[index] }), {}));
  }

  async function loadComponent(): Promise<void> {
    const cpLoaded = lazyFn ? await lazyFn() : null;
    if (cpLoaded) {
      setLazyComponent(cpLoaded);
    } else {
      setRenderChildren(children);
    }
  }

  function isLoaded(): boolean {
    return (!!LazyComponent || !!renderChildren) && !!resolved;
  }

  function getRenderCp(): ReactNode {
    return LazyComponent ? <LazyComponent {...lazyProps} /> : <>{children}</>;
  }

  function renderCb(location: RouteComponentProps): ReactElement {
    let to = (guard ?? (() => true))(location);
    if (to === true) {
      return <>{getRenderCp()}</>;
    }
    if (isAnyObject(to)) {
      to = { ...to, state: { from: location } };
      return <Redirect to={to} />;
    }
    to = to || '/';
    return <Redirect to={to} />;
  }

  useEffect(() => {
    loadComponent().then();
    resolver().then();
  }, []);

  return isLoaded() ? <Route {...props} render={renderCb} /> : <>{skeleton ?? '...Loading'}</>;
}
