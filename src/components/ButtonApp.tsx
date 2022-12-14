import React, {useState, useEffect} from 'react';
import {StyleSheet, TouchableOpacity,Text} from 'react-native';
import {getColors} from '../theme/colors';

interface ButtonAppI {
  title: string;
  width?: number | string;
  height?: number;
  bgColor?: string;
  textColor?: string;
  marginBottom?: number;
  onPress: () => void;
}

export const ButtonApp = ({
  title,
  width,
  height,
  bgColor,
  textColor,
  marginBottom,
  onPress,
  ...props
}: ButtonAppI) => {
  return (
    <TouchableOpacity
    onPress={onPress}
      style={{
        width: width,
        height: height,
        backgroundColor: bgColor ? bgColor : getColors('primary'),
        borderRadius: 10,
        justifyContent: 'center',
        paddingVertical:10,
        paddingHorizontal:10,
        marginBottom:marginBottom
      }}>
      <Text
        style={{
          textAlign: 'center',
          color: textColor,
          fontSize: 14,
          fontFamily:'Montserrat-Regular'
        }}
        {...props}
        >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
