import React, { useCallback } from 'react';
import theme from '@styles/Theme';
import { DefaultTemplate } from '@templates';
import { Text } from '@components';
import Clipboard from '@react-native-community/clipboard';
import ContributionVerse from './components/ContributionVerse';
import BankAccount from './components/BankAccount';
import { TouchableOpacity, View } from 'react-native';
import { Toast } from 'popup-ui';
import * as S from './styles';
import { useLoading } from '@contexts/loading/loading.context';
import { useEffect } from 'react';
import { useState } from 'react';
import api from '@config/api';
import { Popup } from 'popup-ui';
import { useNavigation } from '@react-navigation/native';
import { useChurch } from '@contexts/church/church.context';

type ContributionProps = {
  children?: React.ReactNode;
};

const Contribution: React.FC<ContributionProps> = ({ children }) => {
  const { setLoading } = useLoading();
  const navigation = useNavigation();
  const [bankAccounts, setBankAccounts] = useState<any>([]);
  const { church } = useChurch();

  const copyInfo = useCallback((titleToast: string, info: string) => {
    Clipboard.setString(info);
    Toast.show({
      title: `${titleToast}`,
      color: '#2ecc71',
    });
  }, []);

  useEffect(() => {
    const getInfo = async () => {
      try {
        setLoading(true);
        const { data } = await api.get('bank-account');
        setBankAccounts(data.bankAccounts);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        Popup.show({
          type: 'Danger',
          title: 'Ocorreu um erro',
          button: true,
          textBody:
            'Não foi possível obter as contas bancárias da igreja. Aguarde alguns instantes ou entre em contato com a secretaria.',
          buttonText: 'Tudo bem',
          callback: () => {
            Popup.hide();
            navigation.goBack();
          },
        });
      }
    };

    getInfo();
  }, [navigation, setLoading]);

  return (
    <>
      <DefaultTemplate description="Dízimos e ofertas" pageName="Contribuição">
        <View style={{ flex: 1, padding: 16 }}>
          <ContributionVerse />

          <S.ChurchInfo>
            {church && church.name && (
              <TouchableOpacity
                onLongPress={() =>
                  copyInfo('Nome da igreja copiado com sucesso!', church.name)
                }
                style={{ padding: 4 }}>
                <Text
                  style={{ marginBottom: 8 }}
                  weight="Bold"
                  fontSize={16}
                  color={theme.colors.midGrey}>
                  {church.name}
                </Text>
              </TouchableOpacity>
            )}

            {church && church.name && (
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                  onLongPress={() =>
                    copyInfo('CNPJ copiado com sucesso!', church.cnpj)
                  }
                  style={{ padding: 4, flexDirection: 'row' }}>
                  <Text
                    style={{ marginRight: 4 }}
                    weight="Bold"
                    fontSize={16}
                    color={theme.colors.midGrey}>
                    CNPJ/PIX:
                  </Text>
                  <Text fontSize={16} color={theme.colors.midGrey}>
                    {church.cnpj}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </S.ChurchInfo>

          {bankAccounts.map((account: any) => (
            <BankAccount
              key={account.id}
              account={account.account}
              bank={account.title}
              agency={account.agency}
            />
          ))}
        </View>

        <View style={{ padding: 16 }}>
          <Text fontSize={16}>
            * Pressione e segure a informação desejada para copiá-la.
          </Text>
        </View>
      </DefaultTemplate>
    </>
  );
};

export default Contribution;
