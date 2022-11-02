import React, {useState, useEffect} from 'react';
import {View, Pressable, Text, Box} from 'native-base';
import {Dimensions} from 'react-native';
import {DEVICE_WIDTH} from '../../config';
import {getColors} from '../../theme/colors';
import {BoxOrder} from '../../components/BoxOrder';

export const HomeScreen = () => {
  return (
    <View flex={1} alignItems={'center'} backgroundColor={getColors('white')}>
      <BoxOrder
        condition="Regenerowane"
        collect_date="2022-10-10"
        part="Belka"
        band_number={212}
        indexx={111}
        company={'Jarcar'}
        note={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'}
      />
           <BoxOrder
        condition="Regenerowane"
        collect_date="2022-10-10"
        part="Belka"
        band_number={212}
        indexx={111}
        company={'Jarcar'}
        note={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'}
      />
    </View>
  );
};
