import { DefaultTemplate } from '@templates';
import { useNavigation, useRoute } from '@react-navigation/core';
import theme from '@styles/Theme';
import React, { useCallback, useEffect, useState } from 'react';
import { Alert, Linking, ScrollView, View } from 'react-native';
import { Image } from 'react-native-animatable';
import * as S from './styles';
import FButton from '@components/FButton';
import { Popup } from 'popup-ui';
import api from '@config/api';
import { useLoading } from '@contexts/loading/loading.context';
import HTML from 'react-native-render-html';

const Project: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [data, setData] = useState<any | null>(null);
  const params = route.params;
  const { setLoading } = useLoading();

  useEffect(() => {
    const getProjectInfo = async () => {
      setLoading(true);
      try {
        const response = await api.get(`project/${params.id}`);
        setData(response.data.project);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        Popup.show({
          type: 'Danger',
          title: 'Ocorreu um erro',
          button: true,
          textBody: 'Não foi possível abrir o projeto',
          buttonText: 'Tudo bem',
          callback: () => navigation.goBack(),
        });
      }
    };

    if (params.id) {
      getProjectInfo();
    } else {
      Popup.show({
        type: 'Danger',
        title: 'Ocorreu um erro',
        button: true,
        textBody: 'Não foi possível abrir o projeto',
        buttonText: 'Tudo bem',
        callback: () => navigation.goBack(),
      });
    }
  }, [navigation, params.id, setLoading]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleAccessWebsite = () => {
    Linking.openURL(data.project.url).catch(() =>
      Popup.show({
        type: 'Danger',
        title: 'Ocorreu um erro',
        button: true,
        textBody: 'Não foi possível acessar o link desejado.',
        buttonText: 'Tudo bem',
        callback: () => Popup.hide(),
      }),
    );
  };

  const verifyAccessWebsite = useCallback(() => {
    Alert.alert(
      '',
      'Você será redirecionado para fora do aplicativo. Deseja continuar?',
      [
        { text: 'Cancelar', onPress: () => null },
        { text: 'Continuar', onPress: () => handleAccessWebsite() },
      ],
    );
  }, [handleAccessWebsite]);

  return (
    <DefaultTemplate description={data ? data.title : ' '} pageName="Projetos">
      {data && (
        <S.Wrapper>
          {data && (
            <View style={{ flex: 1 }}>
              <ScrollView>
                <S.Title weight="Bold">{data.title}</S.Title>

                <Image
                  style={{
                    marginTop: 8,
                    marginBottom: 16,
                    width: '100%',
                    height: 200,
                  }}
                  source={{ uri: data.thumbnail }}
                />
                <HTML
                  tagsStyles={{
                    p: {
                      marginTop: 8,
                      marginBottom: 8,
                      color: theme.colors.midGrey,
                      fontSize: 16,
                      fontStyle: 'italic',
                    },
                    img: {
                      marginTop: 15,
                    },
                  }}
                  source={{
                    html: data.description,
                  }}
                />
              </ScrollView>
            </View>
          )}
          <FButton
            onPress={() => verifyAccessWebsite()}
            buttonStyle={{ marginTop: 16, alignItems: 'center' }}
            text="Ver mais informações"
          />
        </S.Wrapper>
      )}
    </DefaultTemplate>
  );
};

export default Project;
