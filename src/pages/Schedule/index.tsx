import React from 'react';

import { DefaultTemplate } from '@templates/index';

import WeeklyEvents from './components/WeeklyEvents';
import { View } from 'react-native';

const Schedule: React.FC = () => {
  return (
    <DefaultTemplate home goBack={false}>
      <View style={{ padding: 16 }}>
        <WeeklyEvents />
      </View>
    </DefaultTemplate>
  );
};

export default Schedule;
