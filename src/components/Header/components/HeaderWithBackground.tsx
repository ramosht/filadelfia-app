import GoBackButton from '@components/GoBackButton';
import ProfileButton from '@components/ProfileButton';
import Text from '@components/Text';
import theme from '@styles/Theme';
import React from 'react';
import * as S from '../styles';

import HeaderBackground from '../../../assets/images/HeaderBackground.jpg';

type IHeader = {
  goBack?: boolean;
  profile?: boolean;
  title?: Text;
};

const HeaderWithBackground = ({ goBack, title, profile }: IHeader) => {
  return (
    <>
      <S.Background source={HeaderBackground}>
        <S.Overlay />
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
      </S.Background>
    </>
  );
};

export default HeaderWithBackground;
