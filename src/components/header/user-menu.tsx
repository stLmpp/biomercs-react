import React, { PropsWithChildren, ReactElement, useState } from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { Person } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { User } from '../../models/user';

export function HeaderUserMenu({ user }: PropsWithChildren<{ user: User }>): ReactElement {
  const [menuElement, setMenuElement] = useState<HTMLElement | null>(null);

  return (
    <>
      <Button startIcon={<Person />} onClick={event => setMenuElement(event.currentTarget)}>
        {user.username}
      </Button>
      <Menu
        anchorEl={menuElement}
        open={!!menuElement}
        onClose={() => setMenuElement(null)}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Link to={`/player/u/${user.id}`}>
          <MenuItem>Profile</MenuItem>
        </Link>
      </Menu>
    </>
  );
}
