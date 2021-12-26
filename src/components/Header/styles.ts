import Styled from 'styled-components/native';
import theme from '@styles/Theme';

export const Wrapper = Styled.View`
  height: 81px;
`;

export const Background = Styled.ImageBackground`
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Overlay = Styled.View`
  background-color: ${theme.colors.primary};
  width: 100%;
  left: 100%;
  position: absolute;
  z-index: 1;
`;

export const Column = Styled.View`
  justify-content: center;
  height: 100%;
`;
