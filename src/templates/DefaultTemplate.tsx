import React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from '@components';
import theme from '@styles/Theme';

type IDefaultTemplate = {
  children: React.ReactNode;
  goBack?: boolean;
  pageName?: string;
  home?: boolean;
};

const DefaultTemplate = ({
  children,
  goBack = true,
  pageName,
  home = false,
}: IDefaultTemplate) => {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: `${theme.colors.white}` }}>
        <Header
          title={pageName}
          goBack={goBack}
          type={home ? 'home' : 'default'}
        />

        <View style={{ flex: 1 }}>{children}</View>
      </View>
    </SafeAreaProvider>
  );
};

export default DefaultTemplate;
