import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UpdateProfile from '../../pages/UpdateProfile';
import Home from '../../pages/Home';
import BottomBar from './BottomBar';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
  cardStyle: { backgroundColor: '#FFFFFF' },
};

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="News" component={BottomBar} />
      <Stack.Screen name="Devotional" component={BottomBar} />
      <Stack.Screen name="Home" component={BottomBar} />
      <Stack.Screen name="Schedule" component={BottomBar} />
      <Stack.Screen name="More" component={BottomBar} />

      <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
