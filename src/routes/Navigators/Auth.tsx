import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Authentication from '@pages/Authentication';
import Password from '@pages/Authentication/Password';
import PersonalInfo from '@pages/Authentication/PersonalInfo';
import CreatePassword from '@pages/Authentication/CreatePassword';
import Home from '@pages/Home';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
  cardStyle: { backgroundColor: '#FFFFFF' },
};

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Authentication" component={Authentication} />
      <Stack.Screen name="Password" component={Password} />
      <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
      <Stack.Screen name="CreatePassword" component={CreatePassword} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
