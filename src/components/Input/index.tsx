import theme from '@styles/Theme';
import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Text } from '@components';
import * as S from './styles';
import { Icon } from 'react-native-starsystem';

type IInputField = {
  value: string;
  setValue: (val: string) => void;
  placeholder: string;
  autoFocus?: boolean;
  secureTextEntry?: boolean;
  errorMessage?: string;
  containerStyle?: Object;
  inputStyle?: Object;
  numberOfLines?: number;
  onBlur?: () => void;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  passwordField?: boolean;
  maxLength?: number;
  multiline?: boolean;
  textAlignVertical?: 'center' | 'top' | 'auto' | 'bottom';
  keyboardType?:
    | 'default'
    | 'numeric'
    | 'email-address'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'number-pad'
    | 'phone-pad'
    | 'name-phone-pad'
    | 'decimal-pad'
    | 'twitter'
    | 'web-search'
    | 'visible-password';
  autoComplete?: 'email' | 'gender' | 'name' | 'postal-address' | 'tel' | 'off';
};

const InputField = ({
  value,
  setValue,
  placeholder,
  passwordField = false,
  autoComplete = 'off',
  autoFocus = false,
  errorMessage,
  keyboardType,
  containerStyle,
  numberOfLines,
  onBlur,
  inputStyle,
  textAlignVertical,
  multiline = false,
  maxLength,
  autoCapitalize = 'sentences',
  secureTextEntry = false,
}: IInputField) => {
  const [showPassword, setShowPassword] = useState(!passwordField);

  return (
    <View>
      <S.Wrapper style={{ ...containerStyle }}>
        <TextInput
          keyboardType={keyboardType}
          autoComplete={autoComplete}
          secureTextEntry={!showPassword || secureTextEntry}
          value={value}
          onBlur={onBlur}
          numberOfLines={numberOfLines}
          maxLength={maxLength}
          textAlignVertical={textAlignVertical}
          multiline={multiline}
          onChangeText={text => setValue(text)}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.lightGrey}
          autoCapitalize={autoCapitalize}
          autoFocus={autoFocus}
          showSoftInputOnFocus
          style={{
            ...inputStyle,
            color: theme.colors.grey,
            fontFamily: 'Montserrat-Regular',
            flex: 1,
          }}
        />

        {passwordField && (
          <S.ButtonToggleExibition
            onPress={() => setShowPassword(!showPassword)}>
            <Icon
              name={showPassword ? 'eye-slash' : 'eye'}
              type="font-awesome-5"
              color={theme.colors.midGrey}
              size={20}
            />
          </S.ButtonToggleExibition>
        )}
      </S.Wrapper>
      {!!errorMessage && (
        <Text
          style={{ marginTop: 8, marginLeft: 8 }}
          weight="Regular"
          fontSize={15}
          color={theme.colors.danger}>
          {errorMessage}
        </Text>
      )}
    </View>
  );
};

export default InputField;
