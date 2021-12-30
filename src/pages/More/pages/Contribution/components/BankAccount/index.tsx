import React from 'react';
import Clipboard from '@react-native-community/clipboard';
import { Text } from '@components';
import * as S from './styles';
import { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { Toast } from 'popup-ui';
import theme from '@styles/Theme';

type BankAccountProps = {
  bank: string;
  agency: string;
  account: string;
};

const BankAccount: React.FC<BankAccountProps> = ({ bank, agency, account }) => {
  const copyInfo = useCallback((titleToast: string, info: string) => {
    Clipboard.setString(info);
    Toast.show({
      title: `${titleToast}`,
      color: '#2ecc71',
    });
  }, []);

  return (
    <S.Wrapper>
      <S.AccountWrapper>
        <TouchableOpacity
          style={{ flexDirection: 'row', padding: 4 }}
          onLongPress={() => copyInfo('Banco copiado com sucesso!', bank)}>
          <Text color={theme.colors.midGrey} fontSize={16} weight="Bold">
            {`Banco: `}
          </Text>
          <Text color={theme.colors.midGrey} fontSize={16}>
            {bank}
          </Text>
        </TouchableOpacity>
      </S.AccountWrapper>
      <S.AccountWrapper>
        <TouchableOpacity
          style={{ flexDirection: 'row', padding: 4 }}
          onLongPress={() => copyInfo('Agência copiada com sucesso!', agency)}>
          <Text color={theme.colors.midGrey} fontSize={16} weight="Bold">
            {`Agência: `}
          </Text>
          <Text color={theme.colors.midGrey} fontSize={16}>
            {agency}
          </Text>
        </TouchableOpacity>
      </S.AccountWrapper>
      <S.AccountWrapper>
        <TouchableOpacity
          style={{ flexDirection: 'row', padding: 4 }}
          onLongPress={() =>
            copyInfo('Conta bancária copiada com sucesso!', account)
          }>
          <Text color={theme.colors.midGrey} fontSize={16} weight="Bold">
            {`Conta: `}
          </Text>
          <Text color={theme.colors.midGrey} fontSize={16}>
            {account}
          </Text>
        </TouchableOpacity>
      </S.AccountWrapper>
    </S.Wrapper>
  );
};

export default BankAccount;
