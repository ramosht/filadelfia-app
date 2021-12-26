import { Text } from '@components';
import React, { useCallback } from 'react';
import { Alert } from 'react-native';
import { useAuthentication } from '@contexts/authentication/authentication.context';

import * as S from './styles';
import { Icon } from 'react-native-starsystem/dist/Icon';
import theme from '@styles/Theme';
import { Popup } from 'popup-ui';

const Logout: React.FC = () => {
  const { handleLogout } = useAuthentication();

  const confirmLogout = useCallback(() => {
    Alert.alert(
      'Você tem certeza?',
      'Você tem certeza que quer sair da sua conta?',
      [
        { text: 'Sair', onPress: () => handleLogout() },
        { text: 'Cancelar', onPress: () => null },
      ],
    );
  }, [handleLogout]);

  return (
    <S.Wrapper onPress={() => confirmLogout()}>
      <Text fontSize={16} weight="Medium">
        Sair
      </Text>

      <Icon
        type="material"
        name="logout"
        size={20}
        color={theme.colors.primary}
      />
    </S.Wrapper>
  );
};

export default Logout;
