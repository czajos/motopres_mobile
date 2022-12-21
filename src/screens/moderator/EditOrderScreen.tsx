import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity, View, Text, ScrollView, Platform} from 'react-native';
import BackArrowSvg from '../../assets/svg/BackArrowSvg';
import {ButtonApp} from '../../components/ButtonApp';
import {InputApp} from '../../components/InputApp';
import {getColors} from '../../theme/colors';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useDispatch, useSelector} from 'react-redux';
import {
  resetDataInFormReg,
  setBandNumber,
  setCompany,
  setDays,
  setIndexx,
  setMonths,
  setNote,
  setPart,
  setYears,
} from '../../redux/reducer/addOrder/addOrder.slice';
import {SendOrdersActions} from '../../redux/actions/sendOrders.actions';
import {
  resetDataInFormNew,
  setDeposit,
  setFv,
  setPrice,
} from '../../redux/reducer/addOrder/addOrderNew.slice';
import CheckBox from '@react-native-community/checkbox';
import { OrdersActions } from '../../redux/actions/orders.actions';
import { setLoading } from '../../redux/reducer/loader/loader.slice';

export const EditOrderScreen = ({route}) => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const [show, setShow] = useState<boolean>(false);
  const [date, setDate] = useState(new Date());
  const data = useSelector((state: any) => state.addOrders.data);
  const load=0
  const dispatch = useDispatch();
  const id=route.params.id
  const condition=route.params.condition

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let newDate = new Date(currentDate);

    let days = newDate.getDate();
    let months = newDate.getMonth() + 1;
    let years = newDate.getFullYear();
    dispatch(setDays(days));
    dispatch(setMonths(months));
    dispatch(setYears(years));
  };

  const sendEdit = () => {
   dispatch(OrdersActions.editOrder(id,data)).then(()=>{
    dispatch(setLoading(true))
    dispatch(resetDataInFormReg())
    dispatch(resetDataInFormNew())
    navigation.goBack()
    
  })
  };

  useEffect(()=>{
      dispatch(OrdersActions.getOneOrder(id,condition))
  },[id])

  console.log(data);
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
          onPress={() => {
            navigation.goBack();
            dispatch(resetDataInFormNew());
          }}>
          <BackArrowSvg />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Montserrat-Bold',
            color: getColors('black'),
          }}>
          {t('home.edit')}
        </Text>
      </View>
      <View style={{marginTop: 40, marginBottom: 50}}>
        <View>
          <Text
            style={{
              fontSize: 16,
              color: getColors('black'),
              fontWeight: 'bold',
            }}>
            {t('formAdd.date')}
          </Text>
          <TouchableOpacity
            onPress={() => setShow(true)}
            style={{
              borderBottomWidth: 1,
              borderColor: getColors('gray'),
              paddingBottom: 15,
              paddingTop: 15,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black'}}>{data.day}</Text>
              <Text>/</Text>
              <Text style={{color: 'black'}}>{data.month}</Text>
              <Text>/</Text>
              <Text style={{color: 'black'}}>{data.year}</Text>
            </View>
          </TouchableOpacity>
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
          <Text
            style={{
              fontSize: 16,
              color: getColors('black'),
              fontWeight: 'bold',
              paddingRight: 10,
            }}>
            {t('formAdd.deposit2')}
          </Text>
          <CheckBox
            disabled={false}
            value={data.deposit}
            onValueChange={val => dispatch(setDeposit(val))}
          />
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
          <Text
            style={{
              fontSize: 16,
              color: getColors('black'),
              fontWeight: 'bold',
              paddingRight: 10,
            }}>
            {t('formAdd.invoice')}
          </Text>
          <CheckBox
            disabled={false}
            value={data.fv}
            onValueChange={val => dispatch(setFv(val))}
          />
        </View>
        <InputApp
          title={t('formAdd.commodity')}
          placeholder={t('formAdd.commodity')}
          value={data.part}
          onChangeText={val => dispatch(setPart(val))}
        />
        <InputApp
          title={t('formAdd.band')}
          placeholder={t('formAdd.band')}
          value={data.band_number}
          onChangeText={val => dispatch(setBandNumber(val))}
        />
        <InputApp
          title={t('formAdd.index')}
          placeholder={t('formAdd.index')}
          keyboardType={'numeric'}
          value={data.indexx}
          onChangeText={val => dispatch(setIndexx(val))}
        />
        <InputApp
          title={t('formAdd.price')}
          placeholder={t('formAdd.price')}
          keyboardType={'numeric'}
          value={data.price}
          onChangeText={val => dispatch(setPrice(val))}
        />
        <InputApp
          title={t('formAdd.contractor')}
          placeholder={t('formAdd.contractor')}
          value={data.company}
          onChangeText={val => dispatch(setCompany(val))}
        />
        <InputApp
          title={t('formAdd.info')}
          placeholder={t('formAdd.info')}
          multiline={true}
          value={data.note}
          onChangeText={val => dispatch(setNote(val))}
        />
      </View>
      <ButtonApp
        title={t('formAdd.add')}
        textColor={getColors('white')}
        onPress={() => sendEdit()}
      />
    </ScrollView>
  );
};
