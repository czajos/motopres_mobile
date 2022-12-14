import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity, View, Text, ScrollView} from 'react-native';
import BackArrowSvg from '../../assets/svg/BackArrowSvg';
import {ButtonApp} from '../../components/ButtonApp';
import {InputApp} from '../../components/InputApp';
import {getColors} from '../../theme/colors';

export const AddRegeneratedScreen = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();

  return (
    <ScrollView style={{paddingHorizontal: 15}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 15,
        }}>
        <TouchableOpacity
          style={{position: 'absolute', left: 0}}
          onPress={() => navigation.navigate('ChoiceFormScreen')}>
          <BackArrowSvg />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Montserrat-Bold',
            color: getColors('black'),
          }}>
          Dodaj zlecenie - regenerowane
        </Text>
      </View>
      <View style={{marginTop: 20, marginBottom: 50}}>
        <InputApp
          title={t('formAdd.commodity')}
          placeholder={t('formAdd.commodity')}
        />
        <InputApp title={t('formAdd.band')} placeholder={t('formAdd.band')} />
        <InputApp
          title={t('formAdd.index')}
          placeholder={t('formAdd.index')}
          keyboardType={'numeric'}
        />
        <InputApp
          title={t('formAdd.contractor')}
          placeholder={t('formAdd.contractor')}
        />
        <InputApp
          title={t('formAdd.info')}
          placeholder={t('formAdd.info')}
          multiline={true}
        />
      </View>
      <ButtonApp
        title={t('formAdd.add')}
        textColor={getColors('white')}
        onPress={() => console.log('add')}
      />
    </ScrollView>
  );
};
