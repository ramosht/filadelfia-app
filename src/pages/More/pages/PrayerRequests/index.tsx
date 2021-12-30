import React, { useCallback, useState } from 'react';
import { Toast } from 'popup-ui';
import { DefaultTemplate } from '@templates';
import { Input } from '@components';

import { Keyboard, View } from 'react-native';
import { useUser } from '@contexts/user/user.context';
import FButton from '@components/FButton';
import { useLoading } from '@contexts/loading/loading.context';
import api from '@config/api';

const PrayerRequests = () => {
  const [prayerRequest, setPrayerRequest] = useState('');
  const { user } = useUser();
  const { setLoading } = useLoading();

  const handleCreatePrayerRequest = useCallback(async () => {
    Keyboard.dismiss();

    setLoading(true);

    try {
      console.log(user.id);
      await api.post('prayer-request', {
        prayerRequest,
        user_id: user?.id,
      });

      setLoading(false);
      setPrayerRequest('');
      Toast.show({
        title: 'Enviado!',
        text: 'O pedido de oração foi enviado com sucesso.',
        color: '#2ecc71',
      });
    } catch (err) {
      console.log(err.response.data);
      setLoading(false);
      Toast.show({
        title: 'Ocorreu um erro',
        text: 'Não foi possível enviar o pedido de oração. Tente novamente mais tarde.',
        color: '#cc2e2e',
      });
    }
  }, [prayerRequest, setLoading, user?.id]);

  return (
    <>
      <DefaultTemplate
        pageName="Pedidos de oração"
        description="Faça seu pedido e estaremos orando por você">
        <View style={{ padding: 16, flex: 1 }}>
          <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <Input
              placeholder="Qual o seu pedido de oração?"
              multiline
              numberOfLines={8}
              textAlignVertical="top"
              value={prayerRequest}
              setValue={setPrayerRequest}
            />
            <FButton
              buttonDisabled={prayerRequest.length === 0}
              text="Enviar"
              onPress={() => handleCreatePrayerRequest()}
            />
          </View>
        </View>
      </DefaultTemplate>
    </>
  );
};

export default PrayerRequests;
