import ProfileButton from '@components/ProfileButton';
import Text from '@components/Text';
import { useAuthentication } from '@contexts/authentication/authentication.context';
import theme from '@styles/Theme';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import * as S from '../styles';
import FiladelfiaLogo from '../../../assets/images/logo.png';
import { useNavigation } from '@react-navigation/native';

const HeaderWithoutBackground = () => {
  const { auth } = useAuthentication();
  const navigation = useNavigation();

  return (
    <S.HeaderContainer
      style={{
        width: '100%',
        flexDirection: 'row',
        backgroundColor: theme.colors.white,
        borderBottomWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
      }}>
      <S.Column style={{ paddingLeft: 16, width: '20%' }}>
        <View style={{ width: 81, height: 23 }}>
          <Image
            source={FiladelfiaLogo}
            style={{ width: '100%', height: '100%' }}
          />
        </View>
      </S.Column>
      <S.Column style={{ alignItems: 'center', width: '60%' }} />
      <S.Column
        style={{
          alignItems: 'flex-end',
          justifyContent: 'center',
          paddingRight: 16,
          width: '20%',
        }}>
        {auth.userIsAuthenticated ? (
          <ProfileButton />
        ) : (
          <TouchableOpacity
            onPress={() => navigation.navigate('Authentication')}>
            <Text fontSize={16} color={theme.colors.secondary} weight="Medium">
              Entrar
            </Text>
          </TouchableOpacity>
        )}
      </S.Column>
    </S.HeaderContainer>
  );
};

export default HeaderWithoutBackground;
