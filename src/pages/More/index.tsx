import DefaultTemplate from '@templates/DefaultTemplate';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import Logout from './components/Logout';
import MoreItem from './components/MoreItem';

const More = () => {
  const [pages] = useState([
    {
      label: 'A igreja',
      path: 'AboutUs',
    },
    {
      label: 'Nossas redes',
      path: 'Ministries',
    },
    {
      label: 'Nossos projetos',
      path: 'Projects',
    },
    {
      label: 'Pedidos de oração',
      path: 'PrayerRequests',
    },
    {
      label: 'Contribuição',
      path: 'Contribution',
    },
  ]);

  return (
    <DefaultTemplate goBack={false} home>
      <View style={{ flex: 1 }}>
        <ScrollView>
          {pages.map(page => (
            <MoreItem key={page.label} path={page.path}>
              {page.label}
            </MoreItem>
          ))}
        </ScrollView>
      </View>
      <Logout />
    </DefaultTemplate>
  );
};

export default More;
