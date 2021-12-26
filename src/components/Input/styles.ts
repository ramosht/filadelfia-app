import theme from '@styles/Theme';
import Styled from 'styled-components/native';

export const Wrapper = Styled.View`
  border-width: 1px;
  border-color: ${theme.colors.midGrey};
  border-radius: 6px;
  padding-left: 8px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonToggleExibition = Styled.TouchableOpacity`
  padding: 12px;
`;
