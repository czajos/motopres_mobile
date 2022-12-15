import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
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
  setAddOrders,
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

export const AddRegeneratedScreen = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const [show, setShow] = useState<boolean>(false);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [day, setDay] = useState<number>();
  const [month, setMonth] = useState<number>();
  const [year, setYear] = useState<number>();
  const data = useSelector((state:any) => state.addOrders.data);
  const dispatch = useDispatch();

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

  const submit = () => {
    dispatch(SendOrdersActions.sendOrders(data)).then(()=>{
      dispatch(resetDataInFormReg())

    })
  };

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
            navigation.navigate('ChoiceFormScreen');
            dispatch(setAddOrders(''));
          }}>
          <BackArrowSvg />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Montserrat-Bold',
            color: getColors('black'),
          }}>
          {t('formAdd.header')}
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
      <ButtonApp
        title={t('formAdd.add')}
        textColor={getColors('white')}
        onPress={() => submit()}
      />
    </ScrollView>
  );
};
