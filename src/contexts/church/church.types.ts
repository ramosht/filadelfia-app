import { ReactNode } from 'react';

export type Church = {
  name?: string | number;
  cnpj?: string;
  address_temple1?: string;
  address_temple2?: string;
  phone?: string;
  whatsapp?: string;
  aboutUs?: number;
} | null;

export type ChurchProviderProps = {
  children: ReactNode;
};

export type ChurchStateProps = {
  church: Church | null;
  setChurch: React.Dispatch<React.SetStateAction<Church>>;
};
