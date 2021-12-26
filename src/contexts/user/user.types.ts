import { ReactNode } from 'react';

export type User = {
  id?: string | number;
  name?: string;
  email?: string;
  phone?: string;
  profilePicture?: string;
  birthday?: string;
  type?: number;
  created_at?: string;
  updated_at?: string;
} | null;

export type UserProviderProps = {
  children: ReactNode;
};

export type UserStateProps = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};
