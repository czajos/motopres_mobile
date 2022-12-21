import React, {useState, useEffect} from 'react';
import {View, Pressable, Text, Box} from 'native-base';
import {Dimensions, TouchableOpacity} from 'react-native';
import {DEVICE_WIDTH} from '../config';
import {getColors} from '../theme/colors';
import {SwipeListView} from 'react-native-swipe-list-view';
import Animated from 'react-native-reanimated';
import CheckSvg from '../assets/svg/CheckSvg';
import EditSvg from '../assets/svg/EditSvg';
import UndoSvg from '../assets/svg/UndoSvg';

interface HiddenItemI {
  onPressDelete?: () => void;
  onPressEdit?: () => void;
  swipeAnimatedValue?: any;
  data?: any;
  undoOrders?: boolean;
}

export const HiddenItem = ({
  onPressDelete,
  onPressEdit,
  swipeAnimatedValue,
  data,
  undoOrders,
}: HiddenItemI) => {
  return (
    <Animated.View
      style={{
        height: 250,
        alignItems: 'center',
        justifyContent: undoOrders ? 'flex-end' : 'space-between',
        width: '100%',
        padding: 30,
        flexDirection: 'row',
      }}>
      {undoOrders ? null : (
        <TouchableOpacity onPress={onPressEdit}>
          <Animated.View
            style={{
              width: 40,
              height: 40,
              borderRadius: 50,
              backgroundColor: getColors('blue'),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <EditSvg />
          </Animated.View>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={onPressDelete}>
        <Animated.View
          style={{
            width: 40,
            height: 40,
            borderRadius: 50,
            backgroundColor: getColors('green'),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {undoOrders ? <UndoSvg /> : <CheckSvg color={getColors('white')} />}
        </Animated.View>
      </TouchableOpacity>
    </Animated.View>
  );
};
