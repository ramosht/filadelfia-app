import FButton from '@components/FButton';
import UpdateProfilePicture from '@components/UpdateProfilePicture';
import { useUser } from '@contexts/user/user.context';
import theme from '@styles/Theme';
import DefaultTemplate from '@templates/DefaultTemplate';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Input } from 'react-native-starsystem/dist/Input';
import { telephoneMask, telephoneUnmask } from 'js-essentials-functions';

import * as S from './styles';
import { convertUSDateToBRDate } from '@services/functions';

const UpdateProfile = () => {
  const { user } = useUser();

  const [name, setName] = useState(user?.name || '');
  const [email] = useState(user?.email || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [birthday, setBirthday] = useState(
    convertUSDateToBRDate(user?.birthday) || '',
  );

  return (
    <DefaultTemplate pageName="Atualizar perfil">
      <View style={{ flex: 1 }}>
        <ScrollView>
          <S.Wrapper>
            <UpdateProfilePicture containerStyle={{ marginBottom: 16 }} />
            <Input
              containerStyle={{ marginBottom: 12 }}
              value={name}
              style={{ color: theme.colors.midGrey }}
              onChangeText={text => setName(text)}
            />
            <Input
              containerStyle={{ marginBottom: 12 }}
              disabled
              value={email}
              style={{ color: theme.colors.midGrey }}
            />
            <Input
              containerStyle={{ marginBottom: 12 }}
              value={telephoneMask(phone)}
              style={{ color: theme.colors.midGrey }}
              onChangeText={text => setPhone(telephoneUnmask(text))}
            />
            <Input
              containerStyle={{ marginBottom: 12 }}
              value={birthday}
              onChangeText={text => setBirthday(text)}
              style={{ color: theme.colors.midGrey }}
            />
          </S.Wrapper>
        </ScrollView>
      </View>
      <S.Footer style={{ padding: 16 }}>
        <FButton text="Salvar perfil" onPress={() => console.log('teste')} />
      </S.Footer>
    </DefaultTemplate>
  );
};

export default UpdateProfile;
