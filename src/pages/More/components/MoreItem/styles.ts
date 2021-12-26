import styled from 'styled-components/native';
import Entypo from 'react-native-vector-icons/Entypo';
import theme from '@styles/Theme';

export const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
  border-bottom-width: 1px;
  border-color: ${theme.colors.lightGrey}30;
  background-color: ${theme.colors.white};
`;

export const Icon = styled(Entypo)``;
