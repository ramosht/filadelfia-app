import React from 'react';
import { theme } from '@styles/Theme';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import Home from '@pages/Home';
import Devotional from '@pages/Devotional';
import Events from '@pages/Events';
import More from '@pages/More';
import Schedule from '@pages/Schedule';

// Icons
import events from '../../assets/icons/calendarDay-inactive.png';
import eventsActive from '../../assets/icons/calendarDay-active.png';
import devotional from '../../assets/icons/devotional-inactive.png';
import devotionalActive from '../../assets/icons/devotional-active.png';
import home from '../../assets/icons/home-inactive.png';
import homeActive from '../../assets/icons/home-active.png';
import schedule from '../../assets/icons/schedule-inactive.png';
import scheduleActive from '../../assets/icons/schedule-active.png';
import more from '../../assets/icons/more-inactive.png';
import moreActive from '../../assets/icons/more-active.png';

const Tab = createBottomTabNavigator();

const BottomBar: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.lightGrey,
        headerShown: false,
        tabBarStyle: {
          height: 58 + getBottomSpace(),
        },
        tabBarLabelStyle: {
          fontFamily: 'Montserrat-Medium',
          fontSize: 12,
          marginTop: -10,
          marginBottom: 6,
        },
        tabBarIcon: ({ focused }) => {
          if (route.name === 'Eventos') {
            return (
              <Image
                resizeMode="contain"
                source={focused ? eventsActive : events}
              />
            );
          }
          if (route.name === 'Devocional') {
            return (
              <Image
                resizeMode="contain"
                source={focused ? devotionalActive : devotional}
              />
            );
          }
          if (route.name === 'Início') {
            return (
              <Image
                resizeMode="contain"
                source={focused ? homeActive : home}
              />
            );
          }
          if (route.name === 'Agenda') {
            return (
              <Image
                resizeMode="contain"
                source={focused ? scheduleActive : schedule}
              />
            );
          }
          if (route.name === 'Mais') {
            return (
              <Image
                resizeMode="contain"
                source={focused ? moreActive : more}
              />
            );
          }

          return null;
        },
        transparentCard: true,
      })}>
      <Tab.Screen name="Início" component={Home} />
      <Tab.Screen name="Eventos" component={Events} />
      <Tab.Screen name="Devocional" component={Devotional} />
      <Tab.Screen name="Agenda" component={Schedule} />
      <Tab.Screen name="Mais" component={More} />
    </Tab.Navigator>
  );
};

export default BottomBar;
