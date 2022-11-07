import React, {useState, useEffect} from 'react';
import {View, Pressable, Text, Box} from 'native-base';
import {Dimensions, TouchableOpacity} from 'react-native';
import {DEVICE_WIDTH} from '../config';
import {getColors} from '../theme/colors';
import {SwipeListView} from 'react-native-swipe-list-view';
import Animated from 'react-native-reanimated';
import CheckSvg from '../assets/svg/CheckSvg';

interface HiddenItemI {
  onPressDelete?: () => void;
  swipeAnimatedValue?: any;
  data?:any;
}

export const HiddenItem = ({
  onPressDelete,
  swipeAnimatedValue,
  data
}: HiddenItemI) => {

  
  return (
    <Animated.View
      style={{
        height: 250,
        alignItems: 'flex-end',
        justifyContent: 'center',
        width: '100%',
        padding: 30,
      }}>
      <TouchableOpacity onPress={onPressDelete}>
        <Animated.View
          style={{
            width: 40,
            height: 40,
            borderRadius: 50,
            backgroundColor: getColors('green'),
            justifyContent:'center',
            alignItems:'center'
          }}>
          <CheckSvg color={getColors('white')} />
        </Animated.View>
      </TouchableOpacity>
    </Animated.View>
  );
};
