import theme from '@styles/Theme';
import React from 'react';
import { Button } from 'react-native-starsystem';

type IFButton = {
  text: string;
  onPress: () => void;
  buttonStyle?: any;
  titleStyle?: any;
  buttonDisabled?: boolean;
};

const FButton = ({
  text,
  onPress,
  buttonStyle,
  titleStyle,
  buttonDisabled,
}: IFButton) => {
  return (
    <Button
      disabled={buttonDisabled}
      buttonStyle={{ ...buttonStyle, backgroundColor: theme.colors.secondary }}
      titleStyle={{ ...titleStyle, fontFamily: 'Montserrat-Medium' }}
      onPress={() => onPress()}
      title={text}
    />
  );
};

export default FButton;
