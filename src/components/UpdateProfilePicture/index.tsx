import { useUser } from '@contexts/user/user.context';
import React from 'react';
import { Icon } from 'react-native-starsystem/dist/Icon';
import * as S from './styles';

import ProfilePicturePlaceholder from '../../assets/images/ProfilePicturePlaceholder.jpg';

type IUpdateProfilePicture = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  containerStyle?: Object;
};

const UpdateProfilePicture = ({
  containerStyle = {},
}: IUpdateProfilePicture) => {
  const { user } = useUser();

  return (
    <S.Wrapper style={{ ...containerStyle }}>
      {user?.profilePicture ? (
        <S.ProfilePicture
          source={{
            uri: user.profilePicture,
          }}
        />
      ) : (
        <S.ProfilePicture source={ProfilePicturePlaceholder} />
      )}
      <S.UpdateButton>
        <Icon name="pen" type="font-awesome-5" color="#517fa4" size={12} />
      </S.UpdateButton>
    </S.Wrapper>
  );
};

export default UpdateProfilePicture;
