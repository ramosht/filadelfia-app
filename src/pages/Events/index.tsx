import React from 'react';

import { DefaultTemplate } from '@templates/index';

import EventsPerDay from './components/EventsPerDay';
import { View } from 'react-native';

const Schedule: React.FC = () => {
  return (
    <DefaultTemplate goBack={false} home>
      <View style={{ padding: 16 }}>
        <EventsPerDay />
      </View>
    </DefaultTemplate>
  );
};

export default Schedule;
