import { Text } from '@components';
import { useNavigation } from '@react-navigation/core';
import theme from '@styles/Theme';
import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as S from './styles';

const ProjectThumb = ({ project }: any) => {
  const navigation = useNavigation();

  return (
    <S.Wrapper
      onPress={() => navigation.navigate('Project', { id: project.id })}
      activeOpacity={1.0}>
      <>
        <S.Background
          source={{
            uri: `${project.thumbnail}`,
          }}
        />
        <LinearGradient
          colors={['#00000000', '#000000cc']}
          style={styles.linearGradient}>
          <S.Content>
            <Text
              fontSize={26}
              weight="Bold"
              color={theme.colors.white}
              style={{ marginBottom: 8, textTransform: 'uppercase' }}>
              {project.title}
            </Text>
          </S.Content>
        </LinearGradient>
      </>
    </S.Wrapper>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});

export default ProjectThumb;
