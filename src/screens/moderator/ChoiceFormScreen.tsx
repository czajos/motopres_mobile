import {useNavigation} from '@react-navigation/native';
import {ArrowBackIcon, StatusBar} from 'native-base';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, TouchableOpacity, View} from 'react-native';
import BackArrowSvg from '../../assets/svg/BackArrowSvg';
import {ButtonApp} from '../../components/ButtonApp';
import {getColors} from '../../theme/colors';

export const ChoiceFormScreen = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <StatusBar
        backgroundColor={getColors('primary')}
        barStyle="light-content"
      />
      <View style={{backgroundColor:getColors('primary'),height:60,width:'100%',position:'absolute',top:0}}>
      <TouchableOpacity
        style={{
          top: 20,
          left: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}
        onPress={() => navigation.goBack()}>
        <BackArrowSvg />
        <Text
          style={{
            fontSize: 18,
            color: getColors('white'),
            fontFamily: 'Montserrat-Bold',
            marginLeft: 10,
          }}>
          {t('home.back')}
        </Text>
      </TouchableOpacity>
      </View>
      <View
        style={{width: '55%', height: '12%', justifyContent: 'space-between'}}>
        <ButtonApp
          title={t('modal.reg')}
          textColor={getColors('white')}
          onPress={() => navigation.navigate('AddRegeneratedScreen')}
        />
        <ButtonApp
          title={t('modal.new')}
          textColor={getColors('white')}
          onPress={() => navigation.navigate('AddNewScreen')}
        />
      </View>
    </View>
  );
};
