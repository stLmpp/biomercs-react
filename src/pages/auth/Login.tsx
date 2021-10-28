import React, { FunctionComponent, useState } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  createStyles,
  FormControlLabel,
  IconButton,
  InputAdornment,
  LinearProgress,
  makeStyles,
  TextField,
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { AuthService } from '../../services/auth';
import { useService } from '../../hooks/use-service';
import { useAuthUser } from '../../hooks/use-auth-user';
import { AuthCredentials } from '../../models/auth';

const useStyles = makeStyles(theme =>
  createStyles({
    card: {
      maxWidth: theme.breakpoints.width('sm'),
      minWidth: theme.breakpoints.width('sm'),
    },
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
      '& .MuiTextField-root': {
        marginBottom: theme.spacing(1),
      },
    },
  })
);

export const Login: FunctionComponent = () => {
  const classes = useStyles();

  const [passwordHidden, setPasswordHidden] = useState(true);
  const [logging, setLogging] = useState(false);
  const { login } = useService(AuthService);

  const [, setAuthUser] = useAuthUser();

  const {
    handleSubmit,
    register,
    formState: { isValid, isDirty, errors },
  } = useForm<AuthCredentials>({
    shouldFocusError: true,
    defaultValues: { password: '', rememberMe: false, username: '' },
    mode: 'onTouched',
  });

  const togglePasswordHidden = (): void => setPasswordHidden(isHidden => !isHidden);

  async function onSubmit(authCredentials: AuthCredentials): Promise<void> {
    setLogging(true);
    setAuthUser(await login(authCredentials));
    setLogging(false);
  }

  return (
    <form className={classes.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <Card className={classes.card}>
        {logging && <LinearProgress variant="indeterminate" />}
        <CardHeader title="Login" />
        <CardContent>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            error={!!errors.username}
            helperText={errors.username?.message}
            autoComplete="username"
            disabled={logging}
            name="username"
            inputRef={register({ required: 'Username is required' })}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            error={!!errors.password}
            helperText={errors.password?.message}
            disabled={logging}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordHidden}>
                    {passwordHidden ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            type={passwordHidden ? 'password' : 'text'}
            autoComplete="current-password"
            inputRef={register({ required: 'Password is required' })}
            name="password"
          />
          <FormControlLabel control={<Checkbox />} label="Remember me" inputRef={register} name="rememberMe" />
        </CardContent>
        <CardActions>
          <Button disabled={!isDirty || !isValid || logging} type="submit">
            Login
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};
