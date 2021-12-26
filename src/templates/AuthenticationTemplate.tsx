import FButton from '@components/FButton';
import { Header } from '@components';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

type IAuthenticationTemplate = {
  children: React.ReactNode;
  buttonText: string;
  onPress: () => void;
  buttonDisabled?: boolean;
};

const AuthenticationTemplate = ({
  children,
  buttonText,
  buttonDisabled = false,
  onPress,
}: IAuthenticationTemplate) => {
  return (
    <SafeAreaProvider style={{}}>
      <Header type="onlyGoBack" />
      <View style={{ flex: 1, padding: 16 }}>
        <ScrollView keyboardShouldPersistTaps="handled">{children}</ScrollView>
      </View>
      <View style={{ paddingTop: 16 }}>
        <FButton
          buttonDisabled={buttonDisabled}
          buttonStyle={{
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
            height: 52,
          }}
          text={buttonText}
          onPress={() => onPress()}
        />
      </View>
    </SafeAreaProvider>
  );
};

export default AuthenticationTemplate;
