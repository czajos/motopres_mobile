import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  Platform,
  StatusBar,
} from 'react-native';
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
  setDepositReg,
  setFvReg,
  setIndexx,
  setInternalId,
  setMonths,
  setNote,
  setPart,
  setYears,
} from '../../redux/reducer/addOrder/addOrder.slice';
import {SendOrdersActions} from '../../redux/actions/sendOrders.actions';
import CheckBox from '@react-native-community/checkbox';
import {DEVICE_WIDTH} from '../../config';
import { setLoading } from '../../redux/reducer/loader/loader.slice';

export const AddRegeneratedScreen = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const [show, setShow] = useState<boolean>(false);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [day, setDay] = useState<number>();
  const [month, setMonth] = useState<number>();
  const [year, setYear] = useState<number>();
  const data = useSelector((state: any) => state.addOrders.data);
  const dispatch = useDispatch();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);

    let newDate = new Date(currentDate);

    let days = newDate.getDate();
    let months = newDate.getMonth() + 1;
    let years = newDate.getFullYear();
    dispatch(setDays(days));
    dispatch(setMonths(months));
    dispatch(setYears(years));
  };

  const submit = () => {
    dispatch(SendOrdersActions.sendOrders(data)).then(() => {
      dispatch(resetDataInFormReg());
      dispatch(setLoading(true))
    }).finally(()=>navigation.navigate('HomeScreen'))
  };

  console.log(data);
  return (
    <ScrollView>
      <StatusBar
        backgroundColor={getColors('primary')}
        barStyle="light-content"
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          // marginTop: 15,
          backgroundColor: getColors('primary'),
          height: 60,
          width: DEVICE_WIDTH,
        }}>
        <TouchableOpacity
          style={{position: 'absolute', left: 15}}
          onPress={() => {
            navigation.navigate('ChoiceFormScreen');
            dispatch(resetDataInFormReg());
          }}>
          <BackArrowSvg />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Montserrat-Bold',
            color: getColors('white'),
          }}>
          {t('formAdd.header')}
        </Text>
      </View>
      <View style={{marginTop: 40, marginBottom: 50, paddingHorizontal: 15}}>
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
            display={Platform.OS==='ios'? 'inline':'default'}
            onChange={onChange}
          />
        )}
        {/* <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
          <Text
            style={{
              fontSize: 16,
              color: getColors('black'),
              fontWeight: 'bold',
              paddingRight: 10,
            }}>
            {t('formAdd.morning')}
          </Text>
          <CheckBox
            disabled={false}
            value={data.time_morning}
            onValueChange={val => dispatch(setTimeMorning(val))}
          />
           <Text
            style={{
              fontSize: 16,
              color: getColors('black'),
              fontWeight: 'bold',
              paddingRight: 10,
              marginLeft:30
            }}>
            {t('formAdd.evening')}
          </Text>
          <CheckBox
            disabled={false}
            value={data.time_morning}
            onValueChange={val => dispatch(setTimeMorning(!val))}
          />
        </View> */}
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
            onValueChange={val => dispatch(setDepositReg(val))}
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
            onValueChange={val => dispatch(setFvReg(val))}
          />
        </View>
        <InputApp
          title={t('formAdd.id')}
          placeholder={t('formAdd.id')}
          value={data.internal_id}
          onChangeText={val => dispatch(setInternalId(val))}
        />
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
