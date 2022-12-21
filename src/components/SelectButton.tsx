import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import { useSelector } from 'react-redux';
import CloseSvg from '../assets/svg/CloseSvg';
import ListSvg from '../assets/svg/ListSvg';
import {getColors} from '../theme/colors';
import {Shadow} from './Shadow';

interface SelectButtonI {
  onPress?: () => void;
  icon?: any;
  bottom?: number;
  children?: any;
  editor?:boolean;
}

export const SelectButton = ({
  onPress,
  icon,
  bottom,
  children,
  editor
}: SelectButtonI) => {
  const [showList, setShowList] = useState<boolean>(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => setShowList(!showList)}
        style={{
          borderRadius: 50,
          width: 45,
          height: 45,
          position: 'absolute',
          bottom: bottom ? bottom : 65,
          right: 10,
          backgroundColor: getColors('primary'),
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 11,
        }}>
        {showList ? <CloseSvg /> : <ListSvg color={getColors('white')} />}
      </TouchableOpacity>
      {showList ? (
        <View
          style={{
            width: 150,
            height: 180,
            backgroundColor: getColors('white'),
            position: 'absolute',
            bottom:editor ? 60 : 10,
            right: 10,
            borderRadius: 10,
            borderBottomRightRadius: 22,
            borderBottomLeftRadius:110,
            shadowOffset: {width: 15, height: 40},
            shadowColor: getColors('black'),
            shadowOpacity: 8,
            elevation: 5,
            // borderWidth: 0.7,
            borderColor: getColors('primary'),
            justifyContent:'flex-start',
            alignItems:'center',
            paddingTop:10
          }}>
          {children}
        </View>
      ) : null}
    </>
  );
};
