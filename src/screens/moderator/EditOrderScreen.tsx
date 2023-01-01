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
import {
  resetDataInFormNew,
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
import {OrdersActions} from '../../redux/actions/orders.actions';
import {setLoading} from '../../redux/reducer/loader/loader.slice';
import {DEVICE_WIDTH} from '../../config';

export const EditOrderScreen = ({route}) => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const [show, setShow] = useState<boolean>(false);
  const [date, setDate] = useState(new Date());
  const data = useSelector((state: any) => state.addOrders.data);
  const dataNew = useSelector((state: any) => state.addOrderNew.data);
  const dispatch = useDispatch();
  const id = route.params.id;
  const condition = route.params.condition;

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);

    let newDate = new Date(currentDate);

    let days = newDate.getDate();
    let months = newDate.getMonth() + 1;
    let years = newDate.getFullYear();
    dispatch(condition === 'Regenerowane' ? setDays(days) : setDaysNew(days));
    dispatch(
      condition === 'Regenerowane' ? setMonths(months) : setMonthsNew(months),
    );
    dispatch(
      condition === 'Regenerowane' ? setYears(years) : setYearsNew(years),
    );
  };

  const sendEdit = () => {
    dispatch(
      OrdersActions.editOrder(
        id,
        condition === 'Regenerowane' ? data : dataNew,
      ),
    ).then(() => {
      dispatch(setLoading(true));
      dispatch(resetDataInFormReg());
      dispatch(resetDataInFormNew());
      navigation.goBack();
    });
  };

  useEffect(() => {
    dispatch(OrdersActions.getOneOrder(id, condition));
  }, [id,route]);

  return (
    <ScrollView>
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
            navigation.goBack();
            dispatch(resetDataInFormReg());
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
          {t('home.edit')}
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
              <Text style={{color: getColors('black')}}>
                {condition === 'Regenerowane'
                  ? data.day + '/'
                  : dataNew.day + '/'}
              </Text>
              <Text style={{color: getColors('black')}}>
                {condition === 'Regenerowane'
                  ? data.month + '/'
                  : dataNew.month + '/'}
              </Text>
              <Text style={{color: getColors('black')}}>
                {condition === 'Regenerowane' ? data.year : dataNew.year}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            display={Platform.OS==='ios'? 'inline':'default'}
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
            value={
              condition === 'Regenerowane' ? data.deposit : dataNew.deposit
            }
            onValueChange={val =>
              dispatch(
                condition === 'Regenerowane'
                  ? setDepositReg(val)
                  : setDepositNew(val),
              )
            }
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
            value={condition === 'Regenerowane' ? data.fv : dataNew.fv}
            onValueChange={val =>
              dispatch(
                condition === 'Regenerowane' ? setFvReg(val) : setFvNew(val),
              )
            }
          />
        </View>
        <InputApp
          title={t('formAdd.id')}
          placeholder={t('formAdd.id')}
          value={
            condition === 'Regenerowane'
              ? data.internal_id
              : dataNew.internal_id
          }
          onChangeText={val =>
            dispatch(
              condition === 'Regenerowane'
                ? setInternalId(val)
                : setInternalIdNew(val),
            )
          }
        />
        <InputApp
          title={t('formAdd.commodity')}
          placeholder={t('formAdd.commodity')}
          value={condition === 'Regenerowane' ? data.part : dataNew.part}
          onChangeText={val =>
            dispatch(
              condition === 'Regenerowane' ? setPart(val) : setPartNew(val),
            )
          }
        />
        {condition === 'Regenerowane' ? (
          <InputApp
            title={t('formAdd.band')}
            placeholder={t('formAdd.band')}
            value={data.band_number}
            onChangeText={val => dispatch(setBandNumber(val))}
          />
        ) : (
          <InputApp
            title={t('formAdd.price')}
            placeholder={t('formAdd.price')}
            keyboardType={'numeric'}
            value={dataNew.price}
            onChangeText={val => dispatch(setPriceNew(val))}
          />
        )}
        <InputApp
          title={t('formAdd.index')}
          placeholder={t('formAdd.index')}
          keyboardType={'numeric'}
          value={condition === 'Regenerowane' ? data.indexx : dataNew.indexx}
          onChangeText={val =>
            dispatch(
              condition === 'Regenerowane' ? setIndexx(val) : setIndexxNew(val),
            )
          }
        />
        <InputApp
          title={t('formAdd.contractor')}
          placeholder={t('formAdd.contractor')}
          value={condition === 'Regenerowane' ? data.company : dataNew.company}
          onChangeText={val =>
            dispatch(
              condition === 'Regenerowane'
                ? setCompany(val)
                : setCompanyNew(val),
            )
          }
        />
        <InputApp
          title={t('formAdd.info')}
          placeholder={t('formAdd.info')}
          multiline={true}
          value={condition === 'Regenerowane' ? data.note : dataNew.note}
          onChangeText={val =>
            dispatch(
              condition === 'Regenerowane' ? setNote(val) : setNoteNew(val),
            )
          }
        />
      </View>

      <View style={{paddingHorizontal: 15, paddingBottom: 40}}>
        <ButtonApp
          title={t('home.edit')}
          textColor={getColors('white')}
          onPress={() => sendEdit()}
        />
      </View>
    </ScrollView>
  );
};
