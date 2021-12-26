import { AuthenticationTemplate } from '@templates';
import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { Input, Text } from '@components';
import theme from '@styles/Theme';
import { useNavigation } from '@react-navigation/native';
import { useAuthentication } from '@contexts/authentication/authentication.context';
import {
  dateMask,
  telephoneMask,
  telephoneUnmask,
  telephoneValidator,
} from 'js-essentials-functions';
import { convertBRDateToUSDate, validateDate } from '@services/functions';

const PersonalInfo = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [birthday, setBirthday] = useState('');
  const [birthdayError, setBirthdayError] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const { userAuthentication, setUserAuthentication } = useAuthentication();
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleSubmit = useCallback(async () => {
    setUserAuthentication({
      ...userAuthentication,
      name,
      birthday: convertBRDateToUSDate(birthday),
      phone,
    });
    navigation.navigate('CreatePassword');
  }, [
    userAuthentication,
    birthday,
    name,
    navigation,
    phone,
    setUserAuthentication,
  ]);

  const validateName = useCallback(() => {
    if (name.length >= 3 && name.trim().split(' ').length >= 2) {
      setNameError('');
    } else {
      setNameError('Por favor, insira o nome e sobrenome');
    }
  }, [name]);

  const validatePhone = useCallback(() => {
    if (telephoneValidator(phone)) {
      setPhoneError('');
    } else {
      setPhoneError('Por favor, insira um telefone válido');
    }
  }, [phone]);

  const validateBirthday = useCallback(() => {
    if (validateDate(birthday, true)) {
      setBirthdayError('');
    } else {
      setBirthdayError('Por favor, insira uma data válida');
    }
  }, [birthday]);

  useEffect(() => {
    if (!birthday || !name || !phone) {
      setButtonDisabled(true);
    } else {
      const phoneIsValid = telephoneValidator(phone);
      const nameIsValid =
        name.length >= 3 && name.trim().split(' ').length >= 2;
      const birthdayIsValid = validateDate(birthday, true);

      if (phoneIsValid && nameIsValid && birthdayIsValid) {
        setButtonDisabled(false);
      } else {
        setButtonDisabled(true);
      }
    }
  }, [birthday, name, phone]);

  return (
    <AuthenticationTemplate
      buttonText="Continuar"
      onPress={() => handleSubmit()}
      buttonDisabled={buttonDisabled}>
      <View>
        <Text
          fontSize={22}
          color={theme.colors.midGrey}
          style={{ marginBottom: 26 }}
          weight="Medium">
          Que bom te ter por aqui!
        </Text>
        <Text
          fontSize={18}
          color={theme.colors.midGrey}
          style={{ marginBottom: 26 }}
          weight="Medium">
          Para realizar seu cadastro, precisamos de algumas informações suas:
        </Text>
        <Input
          autoComplete="name"
          value={name}
          setValue={text => setName(text)}
          placeholder="Nome e sobrenome"
          autoFocus
          onBlur={() => validateName()}
          autoCapitalize="words"
          errorMessage={nameError}
        />
        <Input
          keyboardType="number-pad"
          value={dateMask(birthday)}
          setValue={text => setBirthday(text)}
          placeholder="Data de nascimento"
          containerStyle={{ marginTop: 16 }}
          errorMessage={birthdayError}
          onBlur={() => validateBirthday()}
          maxLength={10}
        />
        <Input
          autoComplete="tel"
          keyboardType="phone-pad"
          value={telephoneMask(phone)}
          setValue={text => setPhone(telephoneUnmask(text))}
          placeholder="Celular"
          containerStyle={{ marginTop: 16 }}
          errorMessage={phoneError}
          onBlur={() => validatePhone()}
          maxLength={15}
        />
      </View>
    </AuthenticationTemplate>
  );
};

export default PersonalInfo;
