import React, {useState, useEffect} from 'react';
import {Box, Input, Pressable, Row, Text, View} from 'native-base';
import {StyleSheet} from 'react-native';
import {getColors} from '../theme/colors';
import {TextInput} from 'react-native-gesture-handler';
import PersonSvg from '../assets/svg/PersonSvg';
import EyeBlockSvg from '../assets/svg/EyeBlockSvg';

interface InputLoginI {
  iconLeft?: any;
  InputRightElement?: any;
  placeholder?: string;
  password?: boolean;
  onPress?: () => void;
  type?: any;
  onChangeText?: any;
  value?: any;
}

export const InputLogin = ({
  iconLeft,
  placeholder,
  password,
  InputRightElement,
  onPress,
  type,
  onChangeText,
  value,
}: InputLoginI) => {
  return (
    <Row borderBottomWidth={1} borderColor={getColors('primary')} w={'100%'}>
      <Input
        borderWidth={0}
        w={'100%'}
        InputLeftElement={iconLeft}
        InputRightElement={InputRightElement}
        placeholder={placeholder}
        fontSize={14}
        fontFamily={'Montserrat-Regular'}
        secureTextEntry={password}
        type={type}
        onChangeText={onChangeText}
        value={value}
      />
    </Row>
  );
};
