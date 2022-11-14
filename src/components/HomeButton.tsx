import React from 'react';
import {TouchableOpacity} from 'react-native';
import {getColors} from '../theme/colors';

interface HomeButtonI {
  onPress?: () => void;
  icon?: any;
}

export const HomeButton = ({onPress, icon}: HomeButtonI) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 50,
        width: 45,
        height: 45,
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: getColors('primary'),
        justifyContent:'center',
        alignItems:'center'
      }}>
        {icon}
      </TouchableOpacity>
  );
};
