import { Text } from '@components';
import { useNavigation } from '@react-navigation/native';
import { theme } from '@styles/Theme';
import React from 'react';
import * as S from './styles';

type ScheduleItemProps = {
  style?: Object;
  eventId: string;
  title: string;
  time: string;
  thumbnail: string;
  description: string;
  local: string | null;
  dia: string;
};

const ScheduleItem: React.FC<ScheduleItemProps> = ({
  style,
  eventId,
  title,
  thumbnail,
  time,
  description,
  local,
  dia,
}) => {
  const navigation = useNavigation();

  return (
    <S.Wrapper
      style={{ elevation: 5, ...style }}
      onPress={() =>
        navigation.navigate('EventInfo', {
          event: {
            eventId,
            title,
            thumbnail,
            time,
            description,
            dia,
          },
        })
      }>
      <S.ThumbnailWrapper />
      <S.Thumbnail
        source={{
          uri: thumbnail,
        }}
      />
      <S.ContentWrapper>
        <Text fontSize={14} weight="Medium" style={{ flexWrap: 'wrap' }}>
          {local}
        </Text>
        <Text fontSize={18} weight="Medium" color={theme.colors.primary}>
          {title}
        </Text>
        <S.TimeWrapper>
          <S.ClockIcon name="clockcircleo" color={theme.colors.midGrey} />
          <Text>{`Às ${time.split(':')[0]}h${time.split(':')[1]}`}</Text>
        </S.TimeWrapper>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default ScheduleItem;
