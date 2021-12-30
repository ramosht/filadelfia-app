import React from 'react';
import * as S from './styles';
import HeaderWithBackground from './components/HeaderWithBackground';
import HeaderWithoutBackground from './components/HeaderWithoutBackground';
import HeaderOnlyForGoingBack from './components/HeaderOnlyForGoingBack';
import { View } from 'react-native';

type IHeader = {
  goBack?: boolean;
  profile?: boolean;
  title?: Text;
  type?: 'onlyGoBack' | 'home' | 'default';
  authentication?: boolean;
  description?: string;
};

const Header = ({
  goBack = true,
  profile = true,
  title,
  description,
  type = 'default',
}: IHeader) => {
  return (
    <View>
      {type === 'home' && <HeaderWithoutBackground />}

      {type === 'onlyGoBack' && <HeaderOnlyForGoingBack />}

      {type === 'default' && (
        <HeaderWithBackground
          goBack={goBack}
          profile={profile}
          title={title}
          description={description}
        />
      )}
    </View>
  );
};

export default Header;
