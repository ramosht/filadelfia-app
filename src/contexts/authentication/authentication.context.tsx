import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useState } from 'react';
import { useUser } from '../user/user.context';
import {
  AuthenticationProviderProps,
  AuthenticationStateProps,
  AuthProps,
  UserAuthenticationProps,
} from './authentication.types';

const defaultAuth: AuthProps = {
  userIsAuthenticated: false,
  token: '',
};

const AuthenticationContext = React.createContext<AuthenticationStateProps>({
  handleLogout: () => {},
  verifyAuth: () => {},
  auth: defaultAuth,
  setAuth: () => {},
  setUserAuthentication: () => {},
  userAuthentication: {},
});

const AuthenticationProvider: React.FC<AuthenticationProviderProps> = ({
  children,
}) => {
  const { user, setUser } = useUser();
  const [auth, setAuth] = useState<AuthProps>(defaultAuth);
  const [userAuthentication, setUserAuthentication] =
    useState<UserAuthenticationProps>({});

  const verifyAuth = async () => {
    const userData: any = await AsyncStorage.getItem(
      '@Filadelfia:authenticatedUser',
    );
    const token: any = await AsyncStorage.getItem('@Filadelfia:token');
    const isAuth: any = await AsyncStorage.getItem(
      '@Filadelfia:userIsAuthenticated',
    );
    const userParse = JSON.parse(userData);

    if (isAuth) {
      setAuth({ ...auth, userIsAuthenticated: true, token: String(token) });
      setUser({
        ...user,
        ...userParse,
      });
    }
  };

  const handleLogout = () => {
    setUser(null);
    setAuth(defaultAuth);
    AsyncStorage.removeItem('@Filadelfia:token');
    AsyncStorage.removeItem('@Filadelfia:userIsAuthenticated');
  };

  const value: AuthenticationStateProps = {
    handleLogout,
    verifyAuth,
    auth,
    setAuth,
    userAuthentication,
    setUserAuthentication,
  };

  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
};

const useAuthentication = () => {
  return useContext(AuthenticationContext);
};

export { AuthenticationProvider, useAuthentication };
