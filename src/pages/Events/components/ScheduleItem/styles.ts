import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const Wrapper = styled.TouchableOpacity`
  background: #fff;
  padding: 16px;
  flex-direction: row;
  border-radius: 14px;
`;

export const ThumbnailWrapper = styled.View``;

export const Thumbnail = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 14px;
  margin-right: 13px;
`;

export const ContentWrapper = styled.View`
  justify-content: center;
  flex: 1
`;

export const TimeWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const ClockIcon = styled(AntDesign)`
  margin-right: 4px;
`;

export const ArrowRight = styled(MaterialIcons)`
  position: absolute;
  right: 0;
  bottom: 0;
`;
