import theme from '@styles/Theme';
import React from 'react';
import { Text } from '@components';

type TextEmptyPageProps = {
  children: React.ReactNode;
  style?: Object;
};

const TextEmptyPage: React.FC<TextEmptyPageProps> = ({ children, style }) => {
  return (
    <Text
      fontSize={26}
      weight="Bold"
      color={theme.colors.grey}
      style={{ ...style, marginBottom: 17 }}>
      {children}
    </Text>
  );
};

export default TextEmptyPage;
