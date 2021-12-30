import React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header, Loading } from '@components';
import theme from '@styles/Theme';
import { useLoading } from '@contexts/loading/loading.context';

type IDefaultTemplate = {
  children: React.ReactNode;
  goBack?: boolean;
  pageName?: string;
  home?: boolean;
  description?: string;
};

const DefaultTemplate = ({
  children,
  goBack = true,
  pageName,
  description,
  home = false,
}: IDefaultTemplate) => {
  const { loading } = useLoading();

  return (
    <SafeAreaProvider>
      {loading && <Loading />}
      <View style={{ flex: 1, backgroundColor: `${theme.colors.white}` }}>
        <Header
          title={pageName}
          goBack={goBack}
          type={home ? 'home' : 'default'}
          description={description}
        />

        <View style={{ flex: 1 }}>{children}</View>
      </View>
    </SafeAreaProvider>
  );
};

export default DefaultTemplate;
