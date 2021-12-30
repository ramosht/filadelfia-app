import GoBackButton from '@components/GoBackButton';
import theme from '@styles/Theme';
import React from 'react';
import * as S from '../styles';

const HeaderOnlyForGoingBack = () => {
  return (
    <S.HeaderContainer
      style={{ height: '100%', width: '100%', flexDirection: 'row' }}>
      <S.Column style={{ paddingLeft: 16, width: '20%' }}>
        <GoBackButton color={theme.colors.primary} />
      </S.Column>
      <S.Column style={{ alignItems: 'center', width: '60%' }} />
      <S.Column
        style={{ alignItems: 'flex-end', paddingRight: 16, width: '20%' }}
      />
    </S.HeaderContainer>
  );
};

export default HeaderOnlyForGoingBack;
