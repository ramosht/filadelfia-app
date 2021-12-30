import DefaultTemplate from '@templates/DefaultTemplate';
import React, { useEffect } from 'react';
import { Text } from 'react-native-starsystem/dist/Text';
import { useChurch } from '@contexts/church/church.context';
import { Popup } from 'popup-ui';
import api from '@config/api';
import ShortcutsHome from './components/ShortcutsHome';

const Home = () => {
  const { setChurch } = useChurch();

  useEffect(() => {
    const getChurchInfo = async () => {
      try {
        const churchInfoResponse = await api.get('church-info');
        setChurch(churchInfoResponse.data.info[0]);
      } catch (err) {
        Popup.show({
          type: 'Danger',
          title: 'Ocorreu um erro',
          button: true,
          textBody: 'Não foi possível obter as informações da igreja.',
          buttonText: 'Tudo bem',
          callback: () => Popup.hide(),
        });
      }
    };

    getChurchInfo();
  }, [setChurch]);

  return (
    <DefaultTemplate goBack={false} home>
      <ShortcutsHome />
    </DefaultTemplate>
  );
};

export default Home;
