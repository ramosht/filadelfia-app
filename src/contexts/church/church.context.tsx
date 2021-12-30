import React, { useContext, useState } from 'react';
import { Church, ChurchProviderProps, ChurchStateProps } from './church.types';

const ChurchContext = React.createContext<ChurchStateProps>({
  church: null,
  setChurch: () => {},
});

const ChurchProvider: React.FC<ChurchProviderProps> = ({ children }) => {
  const [church, setChurch] = useState<Church>({});

  const value: ChurchStateProps = {
    church,
    setChurch,
  };

  return (
    <ChurchContext.Provider value={value}>{children}</ChurchContext.Provider>
  );
};

const useChurch = () => {
  return useContext(ChurchContext);
};

export { ChurchProvider, useChurch };
