import React, { ConsumerProps, createContext, FunctionComponent, ReactElement, useContext, useState } from 'react';
import { User } from '../models/user';

export type AuthUserContextType = [User | null, (user: User | null) => void];

const AuthUserContext = createContext<AuthUserContextType>([null, () => {}]);

export const AuthUserProvider: FunctionComponent = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const setAuthUser = (newUser: User | null): void => {
    setUser(newUser);
  };

  return <AuthUserContext.Provider value={[user, setAuthUser]}>{children}</AuthUserContext.Provider>;
};

export const AuthUserConsumer = ({ children }: ConsumerProps<User | null>): ReactElement => (
  <AuthUserContext.Consumer>{([value]) => children(value)}</AuthUserContext.Consumer>
);

export function useAuthUser(): AuthUserContextType {
  return useContext(AuthUserContext);
}
