import React from 'react';
import { DefaultTemplate } from '@templates/index';
import { View } from 'react-native';
import { Text } from '@components';
import theme from '@styles/Theme';
import { useRoute } from '@react-navigation/core';
import * as S from './styles';
import { Icon } from 'react-native-starsystem/dist/Icon';

const More: React.FC = () => {
  const route = useRoute();

  const { title, thumbnail, time, type, date, dia } = route.params?.event;

  return (
    <>
      <DefaultTemplate pageName="Evento">
        <S.ThumbnailWrapper>
          {thumbnail && (
            <S.Thumbnail
              source={{
                uri: thumbnail,
              }}
            />
          )}
        </S.ThumbnailWrapper>

        <S.Wrapper>
          <S.Header>
            <S.Date style={{ elevation: 8 }}>
              <Text color={theme.colors.primary} fontSize={22} weight="Bold">
                {dia}
              </Text>
            </S.Date>
            <View>
              {title && (
                <Text fontSize={22} weight="Bold" color={theme.colors.midGrey}>
                  {title}
                </Text>
              )}
              <S.Time>
                <Icon
                  name="clock"
                  type="feather"
                  size={13}
                  color={theme.colors.lightGrey}
                  style={{ marginRight: 5 }}
                />
                {time && (
                  <Text fontSize={16}>
                    {type === 'weekly'
                      ? `${translateKey(date)}, às ${time.split(':')[0]}h${
                          time.split(':')[1]
                        }`
                      : `Às ${time.split(':')[0]}h${time.split(':')[1]}`}
                  </Text>
                )}
              </S.Time>
            </View>
          </S.Header>

          <Text fontSize={16} style={{ marginTop: 16 }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            vitae molestias inventore totam expedita adipisci debitis! Enim sit
            ex quam et libero dolore non inventore, alias quidem, illo sed
            accusamus.
          </Text>
        </S.Wrapper>
      </DefaultTemplate>
    </>
  );
};

export default More;
