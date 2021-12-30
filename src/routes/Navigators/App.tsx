import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UpdateProfile from '../../pages/UpdateProfile';
import BottomBar from './BottomBar';

import AboutUs from '@pages/More/pages/AboutUs';
import Projects from '@pages/More/pages/Projects';
import Project from '@pages/More/pages/Projects/Pages/Project';
import Ministries from '@pages/More/pages/Ministries';
import Ministry from '@pages/More/pages/Ministries/Pages/Ministry';
import Contribution from '@pages/More/pages/Contribution';
import PrayerRequests from '@pages/More/pages/PrayerRequests';
import EventInfo from '@pages/Events/pages/EventInfo';

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

      <Stack.Screen name="AboutUs" component={AboutUs} />
      <Stack.Screen name="Projects" component={Projects} />
      <Stack.Screen name="Project" component={Project} />
      <Stack.Screen name="Ministries" component={Ministries} />
      <Stack.Screen name="Ministry" component={Ministry} />
      <Stack.Screen name="Contribution" component={Contribution} />
      <Stack.Screen name="PrayerRequests" component={PrayerRequests} />
      <Stack.Screen name="EventInfo" component={EventInfo} />

      <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
