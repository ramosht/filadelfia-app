import React, { useEffect, useState } from 'react';
import { Alert, Linking, View } from 'react-native';
import HTML from 'react-native-render-html';
import theme from '@styles/Theme';
import DefaultTemplate from '@templates/DefaultTemplate';
import api from '@config/api';
import { Popup } from 'popup-ui';
import FButton from '@components/FButton';
import { useLoading } from '@contexts/loading/loading.context';
import { useNavigation } from '@react-navigation/native';

const AboutUs: React.FC = () => {
  const [about, setAbout] = useState<Object | null>(null);
  const { setLoading } = useLoading();
  const navigation = useNavigation();

  useEffect(() => {
    const getAboutUsText = async () => {
      setLoading(true);
      try {
        const { data } = await api.get('church-info');
        setAbout(data.info[0]);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        Popup.show({
          type: 'Danger',
          title: 'Ocorreu um erro',
          button: true,
          textBody:
            'Não foi possível obter as informações da igreja. Aguarde alguns instantes ou entre em contato com a secretaria.',
          buttonText: 'Tudo bem',
          callback: () => {
            Popup.hide();
            navigation.goBack();
          },
        });
      }
    };

    getAboutUsText();
  }, [setLoading, navigation]);

  const handleAccessWebsite = link => {
    Linking.openURL(link).catch(err =>
      Alert.alert('', 'Não foi possível acessar o link desejado.', [
        { text: 'Tudo bem', onPress: () => null },
      ]),
    );
  };

  const verifyAccessWebsite = () => {
    Alert.alert(
      '',
      'Você será redirecionado para fora do aplicativo. Deseja continuar?',
      [
        { text: 'Cancelar', onPress: () => null },
        { text: 'Continuar', onPress: () => handleAccessWebsite('#') },
      ],
    );
  };

  return (
    <>
      <DefaultTemplate pageName="A igreja" description="Conheça nossa história">
        {about && about.aboutUs && (
          <>
            <View style={{ padding: 16, flex: 1 }}>
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
                  html: about.aboutUs,
                }}
              />
            </View>
            <View style={{ padding: 16 }}>
              <FButton
                text="Acesse nosso site e conheça um pouco mais sobre nós"
                onPress={() => verifyAccessWebsite()}
                buttonStyle={{ height: 64 }}></FButton>
            </View>
          </>
        )}
      </DefaultTemplate>
    </>
  );
};

export default AboutUs;
