import React, { useMemo } from 'react';

import { View } from 'react-native';
import { Text } from '@components';
import theme from '@styles/Theme';

interface PasswordDemandsProps {
  password: string;
  passwordConfirmation: string;
  style?: Object;
}

const PasswordDemands: React.FC<PasswordDemandsProps> = ({
  password,
  passwordConfirmation,
  style,
}) => {
  const passwordLength = useMemo(() => {
    return password ? password.length >= 8 : false;
  }, [password]);

  const passwordHasNumber = useMemo(() => {
    const regex = /(?=.*[0-9])/;
    return regex.test(password);
  }, [password]);

  const passwordHasUpperCaseLetter = useMemo(() => {
    const regex = /(?=.*[A-Z])/;
    return regex.test(password);
  }, [password]);

  const passwordHasLowerCaseLetter = useMemo(() => {
    const regex = /(?=.*[a-z])/;
    return regex.test(password);
  }, [password]);

  const passwordsMatch = useMemo(() => {
    if (password.length === 0) {
      return false;
    } else {
      return password === passwordConfirmation;
    }
  }, [password, passwordConfirmation]);

  return (
    <View style={{ ...style, paddingLeft: 8 }}>
      <Text
        color={theme.colors.midGrey}
        fontSize={18}
        style={{ marginBottom: 8 }}>
        Sua senha deve ter, pelo menos:
      </Text>
      <View style={{ paddingLeft: 8 }}>
        <Text
          style={{ marginBottom: 4 }}
          color={passwordLength ? theme.colors.success : theme.colors.lightGrey}
          fontSize={16}>
          • 8 dígitos
        </Text>
        <Text
          style={{ marginBottom: 4 }}
          color={
            passwordHasUpperCaseLetter
              ? theme.colors.success
              : theme.colors.lightGrey
          }
          fontSize={16}>
          • Uma letra maiúscula
        </Text>
        <Text
          style={{ marginBottom: 4 }}
          color={
            passwordHasLowerCaseLetter
              ? theme.colors.success
              : theme.colors.lightGrey
          }
          fontSize={16}>
          • Uma letra minúscula
        </Text>
        <Text
          style={{ marginBottom: 4 }}
          color={
            passwordHasNumber ? theme.colors.success : theme.colors.lightGrey
          }
          fontSize={16}>
          • Um número
        </Text>
        <Text
          style={{ marginBottom: 4 }}
          color={passwordsMatch ? theme.colors.success : theme.colors.lightGrey}
          fontSize={16}>
          • As senhas coincidem
        </Text>
      </View>
    </View>
  );
};

export default PasswordDemands;
