import GoBackButton from '@components/GoBackButton';
import ProfileButton from '@components/ProfileButton';
import Text from '@components/Text';
import theme from '@styles/Theme';
import React from 'react';
import * as S from '../styles';

import HeaderBackground from '../../../assets/images/HeaderBackground.jpg';
import { View } from 'react-native';

type IHeader = {
  goBack?: boolean;
  profile?: boolean;
  title?: Text;
  description?: string;
};

const HeaderWithBackground = ({
  goBack,
  title,
  profile,
  description,
}: IHeader) => {
  return (
    <View
      style={{
        borderBottomRightRadius: description ? 70 : 0,
        overflow: 'hidden',
      }}>
      <S.Background source={HeaderBackground}>
        <S.HeaderContainer>
          <S.Column style={{ paddingLeft: 16, width: '20%' }}>
            {goBack && <GoBackButton />}
          </S.Column>
          <S.Column style={{ alignItems: 'center', width: '60%' }}>
            <Text color={theme.colors.white} weight="Medium" fontSize={16}>
              {title}
            </Text>
          </S.Column>
          <S.Column
            style={{ alignItems: 'flex-end', paddingRight: 16, width: '20%' }}>
            {profile && <ProfileButton />}
          </S.Column>
        </S.HeaderContainer>
        {description && (
          <S.Description>
            <Text color={theme.colors.white} weight="Medium" fontSize={18}>
              {description}
            </Text>
          </S.Description>
        )}
      </S.Background>
    </View>
  );
};

export default HeaderWithBackground;
