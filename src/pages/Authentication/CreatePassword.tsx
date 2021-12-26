import { AuthenticationTemplate } from '@templates';
import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
import { Input, PasswordDemands, Text } from '@components';
import theme from '@styles/Theme';
import api from '@config/api';
import { useAuthentication } from '@contexts/authentication/authentication.context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUser } from '@contexts/user/user.context';
import { Popup } from 'popup-ui';

const Password = () => {
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const { userAuthentication, setUserAuthentication, setAuth } =
    useAuthentication();
  const { setUser } = useUser();

  const handleSubmit = useCallback(async () => {
    try {
      const { data } = await api.post('user', {
        ...userAuthentication,
        password,
        type: 5,
      });

      setUser({ ...data.user });
      setUserAuthentication({});
      setAuth({ token: data.token, userIsAuthenticated: true });
      AsyncStorage.setItem('@Filadelfia:token', data.token);
      AsyncStorage.setItem('@Filadelfia:userIsAuthenticated', 'true');
    } catch (err) {
      const errorMessage =
        'Não foi possível continuar devido a uma falha interna do servidor. Aguarde alguns momentos ou entre em contato com a secretaria.';
      Popup.show({
        type: 'Danger',
        title: 'Ocorreu um erro',
        button: true,
        textBody: errorMessage,
        buttonText: 'Tudo bem',
        callback: () => Popup.hide(),
      });
    }
  }, [setUser, setUserAuthentication, userAuthentication, password, setAuth]);

  return (
    <AuthenticationTemplate
      buttonText="Finalizar cadastro"
      onPress={() => handleSubmit()}>
      <View>
        <Text
          fontSize={20}
          color={theme.colors.midGrey}
          style={{ marginBottom: 16 }}
          weight="Medium">
          Para finalizar, só falta criar uma senha:
        </Text>
        <Input
          value={password}
          setValue={setPassword}
          passwordField
          placeholder="Senha"
        />
        <Input
          value={passwordConfirmation}
          setValue={setPasswordConfirmation}
          passwordField
          placeholder="Repita sua senha"
          containerStyle={{ marginTop: 16 }}
        />

        <PasswordDemands
          style={{ marginTop: 16 }}
          password={password}
          passwordConfirmation={passwordConfirmation}
        />
      </View>
    </AuthenticationTemplate>
  );
};

export default Password;
