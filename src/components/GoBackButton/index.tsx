import { useNavigation } from '@react-navigation/native';
import theme from '@styles/Theme';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-starsystem/dist/Icon';

type IGoBackButton = {
  color?: string;
};

const GoBackButton = ({ color }: IGoBackButton) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon
        size={20}
        name="chevron-left"
        type="font-awesome-5"
        color={color || theme.colors.white}
        containerStyle={{ width: 20 }}
      />
    </TouchableOpacity>
  );
};

export default GoBackButton;
