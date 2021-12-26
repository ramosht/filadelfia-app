import React from 'react';
import * as S from './styles';
import HeaderWithBackground from './components/HeaderWithBackground';
import HeaderWithoutBackground from './components/HeaderWithoutBackground';
import HeaderOnlyForGoingBack from './components/HeaderOnlyForGoingBack';

type IHeader = {
  goBack?: boolean;
  profile?: boolean;
  title?: Text;
  type?: 'onlyGoBack' | 'home' | 'default';
  authentication?: boolean;
};

const Header = ({
  goBack = true,
  profile = true,
  title,
  type = 'default',
}: IHeader) => {
  return (
    <S.Wrapper home={type === 'home'}>
      {type === 'home' && <HeaderWithoutBackground />}

      {type === 'onlyGoBack' && <HeaderOnlyForGoingBack />}

      {type === 'default' && (
        <HeaderWithBackground goBack={goBack} profile={profile} title={title} />
      )}
    </S.Wrapper>
  );
};

export default Header;
