import React, {useEffect, useMemo, useState} from 'react';
import {
  Dimensions,
  TouchableOpacity,
  Text,
  Modal,
  StatusBar,
  View,
  ActivityIndicator,
} from 'react-native';
import {DEVICE_WIDTH} from '../../config';
import {getColors} from '../../theme/colors';
import {BoxOrder} from '../../components/BoxOrder';
import {SwipeListView} from 'react-native-swipe-list-view';
import {HiddenItem} from '../../components/HiddenItem';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {OrdersActions} from '../../redux/actions/orders.actions';
import {deleteOrdersFromState} from '../../redux/reducer/orders/orders.slice';
import {SelectButton} from '../../components/SelectButton';
import {RefreshControl} from 'react-native-gesture-handler';
import {HomeButton} from '../../components/HomeButton';
import AddSvg from '../../assets/svg/AddSvg';
import {ModalAdd} from '../../components/ModalAdd';
import {
  NavigationContainer,
  useFocusEffect,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native';
import {setLoading} from '../../redux/reducer/loader/loader.slice';
import {t} from 'i18next';
import {useTranslation} from 'react-i18next';
import { toast } from '../../utils/toast';

export const HomeScreen = () => {
  const [condition, setCondition] = useState<string>('Wszystkie');
  const dataSelector = useSelector(state => state.orders.data);
  const [refresh, setRefresh] = useState(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isEditor = useSelector((state: any) => state.auth.isEditor);
  const loader = useSelector(state => state.loader);
  const token = useSelector((state: any) => state.auth.token);
  const {t} = useTranslation();

  // const [repeater,setRepeater]=useState(0)

  useEffect(() => {
    console.log('action useeffect');
    
    dispatch(OrdersActions.getOrders()).then(() => {
      dispatch(setLoading(false));
    });
    const interval = setInterval(() => {
      dispatch(OrdersActions.getOrders()).then(() => {
        dispatch(setLoading(false));
      });
    }, 20000);
    return () => clearInterval(interval);
  }, [loader, token]);
 
  const selectText = [
    {
      id: 0,
      condition: 'Wszystkie',
    },
    {
      id: 1,
      condition: 'Regenerowane',
    },
    {
      id: 2,
      condition: 'Nowe / używane',
    },
  ];
  const deleteOrder = id => {
    dispatch(OrdersActions.deleteOrder(id)).then(() => {
      dispatch(deleteOrdersFromState(id));
      dispatch(setLoading(true));
      toast(t('home.infoDelete'))
    });
  };

  const filter = condition => {
    setCondition(condition);
  };
  const filteredContracts = useMemo(() => {
    return dataSelector?.filter(e => e.condition === condition);
  }, [condition,deleteOrder]);

  const EmptyList = () => {
    return (
      <View
        style={{
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'Montserrat-Medium',
            color: getColors('black'),
            fontSize: 14,
            marginBottom: 20,
          }}>
          {/* {t('home.noOrders')} */}
          {filteredContracts?.length === 0 && condition === 'Regenerowane'
            ? t('home.noOrders') + '-'+ condition
            : filteredContracts?.length === 0 && condition === 'Nowe / używane'
            ? t('home.noOrders') +'-'+  condition
            : t('home.noOrders')}
        </Text>
        <TouchableOpacity
          onPress={() => dispatch(OrdersActions.getOrders())}
          style={{
            backgroundColor: getColors('lightGray'),
            paddingHorizontal: 30,
            paddingVertical: 10,
            borderRadius: 5,
          }}>
          <Text
            style={{
              fontFamily: 'Montserrat-Medium',
              color: getColors('black'),
              fontSize: 14,
            }}>
            {t('home.refresh')}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
const [backLeft,setBackLeft]=useState(100)
  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: getColors('white'),
        height: '100%',
      }}>
      <StatusBar
        backgroundColor={getColors('primary')}
        barStyle="light-content"
      />
      <SwipeListView
        contentContainerStyle={{flexGrow: 1}}
        data={condition === 'Wszystkie' ? dataSelector : filteredContracts}
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={() =>
              dispatch(OrdersActions.getOrders())
            }></RefreshControl>
        }
        rightOpenValue={-100}
        leftOpenValue={backLeft}
        ListEmptyComponent={<EmptyList />}
        renderHiddenItem={({item}) => (
          <HiddenItem
            editor={isEditor}
            onPressEdit={() =>
             navigation.navigate('EditOrderScreen', {
                id: item.id,
                condition: item.condition,
              })
              
            }
            onPressDelete={() => {
              deleteOrder(item.id);
            }}
          />
        )}
        renderItem={({item}: {item: any}) => {
          return (
            <BoxOrder
              internal_id={item.internal_id}
              condition={item.condition}
              collect_date={item.collect_date}
              part={item.part}
              band_number={item.band_number}
              indexx={item.indexx}
              company={item.company}
              note={item.note}
              regenerated={item.condition}
              deposit={item.deposit}
              fv={item.fv}
              price={item.price}
            />
          );
        }}
      />
      <SelectButton editor={isEditor}>
        {selectText.map(item => {
          return (
            <TouchableOpacity
              style={{paddingVertical: 5}}
              key={item.id}
              onPress={() => filter(item.condition)}>
              <Text
                style={{
                  color:
                    item.condition === condition
                      ? getColors('primary')
                      : getColors('gray'),
                  fontWeight: item.condition === condition ? 'bold' : 'normal',
                  fontSize: item.condition === condition ? 14 : 14,
                }}>
                {item.condition}
              </Text>
            </TouchableOpacity>
          );
        })}
      </SelectButton>
      {isEditor === true ? (
        <HomeButton
          icon={<AddSvg />}
          onPress={() => navigation.navigate('ChoiceFormScreen')}
        />
      ) : null}
    </View>
  );
};
