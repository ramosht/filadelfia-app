import { AuthenticationTemplate } from '@templates';
import React, { useCallback, useState } from 'react';
import { Keyboard, TouchableOpacity, View } from 'react-native';
import { Input, Text } from '@components';
import theme from '@styles/Theme';
import { useAuthentication } from '@contexts/authentication/authentication.context';
import api from '@config/api';
import { useUser } from '@contexts/user/user.context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Popup } from 'popup-ui';

const Password = () => {
  const [password, setPassword] = useState('');
  const { userAuthentication, setUserAuthentication, setAuth } =
    useAuthentication();
  const { setUser } = useUser();
  const [errorLogin, setErrorLogin] = useState('');

  const handleSubmit = useCallback(async () => {
    Keyboard.dismiss();
    try {
      const { data } = await api.post('session', {
        email: userAuthentication?.email,
        password,
      });

      setUser({ ...data.user });
      setErrorLogin('');
      setUserAuthentication({});
      setAuth({ token: data.token, userIsAuthenticated: true });
      AsyncStorage.setItem('@Filadelfia:token', data.token);
      AsyncStorage.setItem('@Filadelfia:userIsAuthenticated', 'true');
      AsyncStorage.setItem(
        '@Filadelfia:authenticatedUser',
        JSON.stringify(data.user),
      );
    } catch (err) {
      const status = err.response ? err.response.status : 500;

      if (status === 401) {
        setErrorLogin('Senha incorreta');
      } else {
        setErrorLogin('');
        Popup.show({
          type: 'Warning',
          title: 'Ocorreu um erro',
          button: true,
          textBody:
            'Não foi possível fazer o login devido a uma falha interna do servidor. Aguarde alguns momentos ou entre em contato com a secretaria.',
          buttonText: 'Tudo bem',
          callback: () => Popup.hide(),
        });
      }
    }
  }, [
    userAuthentication?.email,
    password,
    setUser,
    setUserAuthentication,
    setAuth,
  ]);

  return (
    <AuthenticationTemplate buttonText="Entrar" onPress={() => handleSubmit()}>
      <View>
        <Text
          fontSize={20}
          color={theme.colors.midGrey}
          style={{ marginBottom: 16 }}
          weight="Medium">
          Olá, {userAuthentication?.name?.split(' ')[0]}! Agora, insira sua
          senha para entrar.
        </Text>
        <Input
          value={password}
          setValue={setPassword}
          passwordField
          placeholder="Senha"
          errorMessage={errorLogin}
        />
        <TouchableOpacity
          style={{ padding: 16, width: '100%', alignItems: 'center' }}>
          <Text color={theme.colors.secondary} fontSize={16} weight="Medium">
            Esqueci minha senha
          </Text>
        </TouchableOpacity>
      </View>
    </AuthenticationTemplate>
  );
};

export default Password;
