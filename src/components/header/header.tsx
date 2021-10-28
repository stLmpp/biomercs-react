import React, { ReactElement } from 'react';
import { AppBar, createStyles, makeStyles, Theme, Toolbar } from '@material-ui/core';
import { useAuthUser } from '../../hooks/use-auth-user';
import { HeaderUserMenu } from './user-menu';
import { ButtonLink } from '../router/ButtonLink';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    spacer: {
      flexGrow: 1,
    },
    title: {
      cursor: 'pointer',
    },
  })
);

export function Header(): ReactElement {
  const classes = useStyles();

  const [user] = useAuthUser();

  let rightMenu = (
    <>
      <ButtonLink color="inherit" to="/auth/register">
        Register
      </ButtonLink>
      <ButtonLink to="/auth/login">Login</ButtonLink>
    </>
  );

  if (user) {
    rightMenu = <HeaderUserMenu user={user} />;
  }

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <ButtonLink to="/home" size="large">
            Biomercs2
          </ButtonLink>
          <span className={classes.spacer} />
          {rightMenu}
        </Toolbar>
      </AppBar>
    </div>
  );
}
