import { AuthenticationTemplate } from '@templates';
import React, { useCallback, useEffect, useState } from 'react';
import { Keyboard, View } from 'react-native';
import { Input, Text } from '@components';
import theme from '@styles/Theme';
import { useNavigation } from '@react-navigation/native';
import api from '@config/api';
import { useAuthentication } from '@contexts/authentication/authentication.context';
import { validateEmail } from '@services/functions';
import { Popup } from 'popup-ui';

const Authentication = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const { setUserAuthentication } = useAuthentication();
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleEmailVerification = useCallback(async () => {
    Keyboard.dismiss();
    try {
      const res = await api.get(`user/verify-email/${email}`);
      setUserAuthentication({ ...res.data.user });
      navigation.navigate('Password');
    } catch (err) {
      const status = err.response ? err.response.status : 500;

      if (status === 404) {
        setUserAuthentication({ email });
        navigation.navigate('PersonalInfo');
      } else {
        Popup.show({
          type: 'Warning',
          title: 'Ocorreu um erro',
          button: true,
          textBody:
            'Não foi possível continuar devido a uma falha interna do servidor. Aguarde alguns momentos ou entre em contato com a secretaria.',
          buttonText: 'Tudo bem',
          callback: () => Popup.hide(),
        });
      }
    }
  }, [email, navigation, setUserAuthentication]);

  useEffect(() => {
    if (validateEmail(email)) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [email]);

  return (
    <AuthenticationTemplate
      buttonText="Continuar"
      onPress={() => handleEmailVerification()}
      buttonDisabled={buttonDisabled}>
      <View>
        <Text
          fontSize={20}
          color={theme.colors.midGrey}
          style={{ marginBottom: 26 }}
          weight="Medium">
          Qual o seu e-mail?
        </Text>
        <Input
          autoComplete="email"
          value={email}
          autoCapitalize="none"
          setValue={text => setEmail(text)}
          placeholder="E-mail"
          autoFocus
        />
      </View>
    </AuthenticationTemplate>
  );
};

export default Authentication;
