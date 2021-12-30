import React from 'react';
import { Root } from 'popup-ui';
import { ThemeProvider } from 'react-native-starsystem';
import Routes from './routes';
import { AuthenticationProvider } from '@contexts/authentication/authentication.context';
import { UserProvider } from '@contexts/user/user.context';
import { LoadingProvider } from '@contexts/loading/loading.context';
import { ChurchProvider } from '@contexts/church/church.context';

const App = () => {
  return (
    <Root>
      <ThemeProvider>
        <UserProvider>
          <ChurchProvider>
            <LoadingProvider>
              <AuthenticationProvider>
                <Routes />
              </AuthenticationProvider>
            </LoadingProvider>
          </ChurchProvider>
        </UserProvider>
      </ThemeProvider>
    </Root>
  );
};

export default App;
