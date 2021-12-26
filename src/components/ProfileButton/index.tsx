import { useUser } from '@contexts/user/user.context';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import * as S from './styles';

import ProfilePicturePlaceholder from '../../assets/images/ProfilePicturePlaceholder.jpg';

const ProfileButton = () => {
  const navigation = useNavigation();
  const { user } = useUser();

  return (
    <S.Wrapper onPress={() => navigation.navigate('UpdateProfile')}>
      {user?.profilePicture ? (
        <S.ProfilePicture
          source={{
            uri: user?.profilePicture,
          }}
        />
      ) : (
        <S.ProfilePicture source={ProfilePicturePlaceholder} />
      )}
    </S.Wrapper>
  );
};

export default ProfileButton;
