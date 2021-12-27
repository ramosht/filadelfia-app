import React from 'react';
import { Root } from 'popup-ui';
import { ThemeProvider } from 'react-native-starsystem';
import Routes from './routes';
import { AuthenticationProvider } from '@contexts/authentication/authentication.context';
import { UserProvider } from '@contexts/user/user.context';

const App = () => {
  return (
    <Root>
      <ThemeProvider>
        <UserProvider>
          <AuthenticationProvider>
            <Routes />
          </AuthenticationProvider>
        </UserProvider>
      </ThemeProvider>
    </Root>
  );
};

export default App;
