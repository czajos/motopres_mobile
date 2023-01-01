import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity, View, Text, ScrollView, Platform, StatusBar} from 'react-native';
import BackArrowSvg from '../../assets/svg/BackArrowSvg';
import {ButtonApp} from '../../components/ButtonApp';
import {InputApp} from '../../components/InputApp';
import {getColors} from '../../theme/colors';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useDispatch, useSelector} from 'react-redux';
import {SendOrdersActions} from '../../redux/actions/sendOrders.actions';
import {
  resetDataInFormNew,
  setBandNumberNew,
  setCompanyNew,
  setDaysNew,
  setDepositNew,
  setFvNew,
  setIndexxNew,
  setInternalIdNew,
  setMonthsNew,
  setNoteNew,
  setPartNew,
  setPriceNew,
  setYearsNew,
} from '../../redux/reducer/addOrder/addOrderNew.slice';
import CheckBox from '@react-native-community/checkbox';
import { DEVICE_WIDTH } from '../../config';
import { setLoading } from '../../redux/reducer/loader/loader.slice';

export const AddNewScreen = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const [show, setShow] = useState<boolean>(false);
  const [date, setDate] = useState(new Date());
  const data = useSelector((state: any) => state.addOrderNew.data);
  const dispatch = useDispatch();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);

    let newDate = new Date(currentDate);

    let days = newDate.getDate();
    let months = newDate.getMonth() + 1;
    let years = newDate.getFullYear();
    dispatch(setDaysNew(days));
    dispatch(setMonthsNew(months));
    dispatch(setYearsNew(years));
  };

  const submit = () => {
    dispatch(SendOrdersActions.sendOrdersNew(data)).then(() => {
      dispatch(resetDataInFormNew());
      dispatch(setLoading(true))
    }).finally(()=>navigation.navigate('HomeScreen'))
  };

  console.log(data);
  return (
    <ScrollView >
           <StatusBar backgroundColor={getColors('primary')} barStyle='light-content'/>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: getColors('primary'),
          height: 60,
          width: DEVICE_WIDTH,
        }}>
        <TouchableOpacity
          style={{position: 'absolute', left: 15}}
          onPress={() => {
            navigation.navigate('ChoiceFormScreen');
            dispatch(resetDataInFormNew());
          }}>
          <BackArrowSvg />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Montserrat-Bold',
            color: getColors('white'),
          }}>
          {t('formAdd.headerNew')}
        </Text>
      </View>
      <View style={{marginTop: 40, marginBottom: 50,paddingHorizontal: 15}}>
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
            <Text style={{color: getColors('black')}}>{data.day +'/'}</Text>
              <Text style={{color: getColors('black')}}>{data.month + '/'}</Text>
              <Text style={{color: getColors('black')}}>{data.year}</Text>
            </View>
          </TouchableOpacity>
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            // is24Hour={true}
            // display="default"
            onChange={onChange}
            display={Platform.OS==='ios'? 'inline':'default'}

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
            onValueChange={val => dispatch(setDepositNew(val))}
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
            onValueChange={val => dispatch(setFvNew(val))}
          />
        </View>
        <InputApp
          title={t('formAdd.id')}
          placeholder={t('formAdd.id')}
          value={data.internal_id}
          onChangeText={val => dispatch(setInternalIdNew(val))}
        />
        <InputApp
          title={t('formAdd.commodity')}
          placeholder={t('formAdd.commodity')}
          value={data.part}
          onChangeText={val => dispatch(setPartNew(val))}
        />
        <InputApp
          title={t('formAdd.band')}
          placeholder={t('formAdd.band')}
          value={data.band_number}
          onChangeText={val => dispatch(setBandNumberNew(val))}
        />
        <InputApp
          title={t('formAdd.index')}
          placeholder={t('formAdd.index')}
          keyboardType={'numeric'}
          value={data.indexx}
          onChangeText={val => dispatch(setIndexxNew(val))}
        />
        <InputApp
          title={t('formAdd.price')}
          placeholder={t('formAdd.price')}
          keyboardType={'numeric'}
          value={data.price}
          onChangeText={val => dispatch(setPriceNew(val))}
        />
        <InputApp
          title={t('formAdd.contractor')}
          placeholder={t('formAdd.contractor')}
          value={data.company}
          onChangeText={val => dispatch(setCompanyNew(val))}
        />
        <InputApp
          title={t('formAdd.info')}
          placeholder={t('formAdd.info')}
          multiline={true}
          value={data.note}
          onChangeText={val => dispatch(setNoteNew(val))}
        />
      </View>
      <View style={{paddingHorizontal:15,paddingBottom:40}}>
      <ButtonApp
        title={t('formAdd.add')}
        textColor={getColors('white')}
        onPress={() => submit()}
      />
      </View>
     
    </ScrollView>
  );
};
