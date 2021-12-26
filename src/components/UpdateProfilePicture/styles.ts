import theme from '@styles/Theme';
import Styled from 'styled-components/native';

export const Wrapper = Styled.View`
  position: relative;
  width: 120px;
  height: 120px;
`;

export const ProfilePicture = Styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 150px;
`;

export const UpdateButton = Styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  background-color: ${theme.colors.white};
  border-radius: 50px;
  position: absolute;
  bottom: 4px;
  right: 4px;
  align-items: center;
  justify-content: center;
`;
