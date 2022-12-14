import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {ButtonApp} from '../../components/ButtonApp';
import {getColors} from '../../theme/colors';

export const ChoiceFormScreen = () => {
  const {t} = useTranslation();
  const navigation=useNavigation()
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
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
          onPress={() => console.log('')}
        />
      </View>
    </View>
  );
};
