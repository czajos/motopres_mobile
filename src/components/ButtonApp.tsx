import React, {useState, useEffect} from 'react';
import {Box, Pressable, Text, View} from 'native-base';
import {StyleSheet} from 'react-native';
import {getColors} from '../theme/colors';

interface Button {
  title: string;
  width: number | string;
  height: number;
  bgColor: string;
  textColor: string;
  borderColor: boolean;
  borderWidth: boolean;
  marginBottom: number;
  // onPress: () => void;
}

export const ButtonApp = ({
  title,
  width,
  height,
  bgColor,
  textColor,
  borderColor,
  borderWidth,
  marginBottom,
}: Button) => {
  return (
    <Pressable
      width={width}
      height={height}
      backgroundColor={bgColor}
      borderRadius={50}
      justifyContent={'center'}
      borderWidth={borderWidth ? 2 : null}
      borderColor={borderColor ? getColors('secondary') : null}
      marginBottom={marginBottom ? marginBottom : null}>
      <Text
        style={{
          textAlign: 'center',
          color: textColor,
          fontSize: 16,
        }}
        bold>
        {title}
      </Text>
    </Pressable>
  );
};
