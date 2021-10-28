import { Button, ButtonProps } from '@material-ui/core';
import { Link, LinkProps } from 'react-router-dom';
import React, { ReactElement } from 'react';

export const ButtonLink = ({ children, ...props }: ButtonProps & LinkProps): ReactElement => (
  <Button component={Link} {...props}>
    {children}
  </Button>
);
