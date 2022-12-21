import React, {useEffect, useState} from 'react';
import {View} from 'native-base';
import {
  Dimensions,
  TouchableOpacity,
  Text,
  Modal,
  StatusBar,
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

export const HomeScreen = () => {
  const [condition, setCondition] = useState<string>('Wszystkie');
  const dataSelector = useSelector(state => state.orders.data);
  const [refresh, setRefresh] = useState(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isEditor = useSelector((state: any) => state.auth.isEditor);
  const loader = useSelector(state => state.loader);
  // const [repeater,setRepeater]=useState(0)

  useEffect(() => {
    dispatch(OrdersActions.getOrders()).then(() => {
      dispatch(setLoading(false));
    });
   const interval=setInterval(()=>{
    dispatch(OrdersActions.getOrders()).then(() => {
      dispatch(setLoading(false));
    });
   },20000)
     return()=>clearInterval(interval)
    
  }, [loader]);

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
    });
  };

  const filter = condition => {
    setCondition(condition);
  };
  const filteredContracts = React.useMemo(() => {
    return dataSelector.filter(e => e.condition === condition);
  }, [condition]);

  return (
    <View flex={1} alignItems={'center'} backgroundColor={getColors('white')}>
      <StatusBar
        backgroundColor={getColors('primary')}
        barStyle="light-content"
      />
      <SwipeListView
        data={condition === 'Wszystkie' ? dataSelector : filteredContracts}
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={() =>
              dispatch(OrdersActions.getOrders())
            }></RefreshControl>
        }
        rightOpenValue={-100}
        leftOpenValue={100}
        renderHiddenItem={({item}) => (
          <HiddenItem
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
      <SelectButton bottom={60} editor={isEditor}>
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
                      : getColors('lightGray'),
                  fontWeight: item.condition === condition ? 'bold' : 'normal',
                  fontSize: item.condition === condition ? 14 : 14,
                }}>
                {item.condition}
              </Text>
            </TouchableOpacity>
          );
        })}
      </SelectButton>
      <HomeButton
        icon={<AddSvg />}
        onPress={() => navigation.navigate('ChoiceFormScreen')}
      />
      <ModalAdd
        showModal={openModal}
        hideModal={() => setOpenModal(!openModal)}
      />
    </View>
  );
};
