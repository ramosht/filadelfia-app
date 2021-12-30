import Styled from 'styled-components/native';
import theme from '@styles/Theme';

export const HeaderContainer = Styled.View`
  height: 81px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-color: ${theme.colors.white}60;
`;

export const Background = Styled.ImageBackground``;

export const Column = Styled.View`
  justify-content: center;
  height: 100%;
`;

export const Description = Styled.View`
  padding: 26px 16px 26px 16px;
`;
