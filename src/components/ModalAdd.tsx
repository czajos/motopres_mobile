import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {getColors} from '../theme/colors';
import Modal from 'react-native-modal';
import {useTranslation} from 'react-i18next';
import {ButtonApp} from './ButtonApp';
import {useNavigation} from '@react-navigation/native';

interface ModalI {
  showModal: boolean;
  hideModal: () => void;
}

export const ModalAdd = ({showModal, hideModal}: ModalI) => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  return (
    <Modal
      isVisible={showModal}
      onBackdropPress={hideModal}
      backdropColor={'rgba(255,255,255,0.9)'}>
      <View
        style={{
          width: '100%',
          height: 230,
          backgroundColor: getColors('white'),
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderRadius: 10,
          borderColor: getColors('primary'),
        }}>
        <Text
          style={{
            fontFamily: 'Montserrat-Bold',
            color: getColors('black'),
            fontSize: 18,
            position: 'absolute',
            top: 20,
          }}>
          {t('modal.addOrders')}
        </Text>
        <View style={{width: '100%', alignItems: 'center', marginTop: 25}}>
          <ButtonApp
            onPress={() => navigation.navigate('HomeStack',{screen:'AddRegeneratedScreen'})}
            title={t('modal.reg')}
            bgColor={getColors('primary')}
            textColor={getColors('white')}
            width={'70%'}
            marginBottom={10}
          />
          <ButtonApp
            onPress={() => navigation.navigate('')}
            title={t('modal.new')}
            bgColor={getColors('primary')}
            textColor={getColors('white')}
            width={'70%'}
          />
        </View>
      </View>
    </Modal>
  );
};
