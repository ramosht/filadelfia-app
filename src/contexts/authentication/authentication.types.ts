import { ReactNode } from 'react';

export type AuthenticationProviderProps = {
  children: ReactNode;
};

export type UserAuthenticationProps = {
  id?: string | number;
  name?: string;
  email?: string;
  phone?: string;
  birthday?: string;
};

export interface AuthProps {
  userIsAuthenticated?: boolean;
  token?: string | undefined;
}

export type AuthenticationStateProps = {
  userAuthentication: UserAuthenticationProps;
  setUserAuthentication: React.Dispatch<
    React.SetStateAction<UserAuthenticationProps>
  >;
  auth: AuthProps;
  setAuth: React.Dispatch<React.SetStateAction<AuthProps>>;
  handleLogout: () => void;
  verifyAuth: () => void;
};
