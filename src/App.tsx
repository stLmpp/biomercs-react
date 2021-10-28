import React, { FunctionComponent, useEffect, useState } from 'react';
import { createStyles, CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';
import { BrowserRouter, Switch } from 'react-router-dom';
import { theme } from './theme';
import { Header } from './components/header/header';
import { useAuthUser } from './hooks/use-auth-user';
import { useService } from './hooks/use-service';
import { AuthService } from './services/auth';
import { AUTH_TOKEN } from './tokens/auth';
import { BioRoute, LazyRouteFn } from './components/router/BioRoute';

const useStyles = makeStyles(() =>
  createStyles({
    main: {
      margin: '1rem',
    },
  })
);

const authLazy: LazyRouteFn = () => import('./pages/Auth').then(m => m.Auth);

export const App: FunctionComponent = () => {
  const classes = useStyles();

  const { autoLogin } = useService(AuthService);
  const [, setAuthUser] = useAuthUser();
  const [loading, setLoading] = useState(true);

  async function autoLoginFromToken(): Promise<void> {
    const user = await autoLogin();
    setAuthUser(user);
  }

  const app = (
    <BrowserRouter>
      <header>
        <Header />
      </header>
      <main className={classes.main}>
        <Switch>
          <BioRoute path="/auth" lazyFn={authLazy} />
        </Switch>
      </main>
    </BrowserRouter>
  );

  useEffect(() => {
    const token = localStorage.getItem(AUTH_TOKEN);
    if (token) {
      autoLoginFromToken()
        .then()
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {loading ? <div>Loading...</div> : app}
    </ThemeProvider>
  );
};
