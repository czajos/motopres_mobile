import React, {useEffect, useState} from 'react';
import {StatusBar, View} from 'native-base';
import {Dimensions, TouchableOpacity, Text} from 'react-native';
import {DEVICE_WIDTH} from '../../config';
import {getColors} from '../../theme/colors';
import {BoxOrder} from '../../components/BoxOrder';
import {SwipeListView} from 'react-native-swipe-list-view';
import {HiddenItem} from '../../components/HiddenItem';
import {useDispatch, useSelector} from 'react-redux';
import {OrdersActions} from '../../redux/actions/orders.actions';
import {deleteOrdersFromState} from '../../redux/reducer/orders/orders.slice';
import {SelectButton} from '../../components/SelectButton';
import {RefreshControl} from 'react-native-gesture-handler';
import {setLoading} from '../../redux/reducer/loader/loader.slice';
import {toast} from '../../utils/toast';
import {useTranslation} from 'react-i18next';

export const DoneScreen = () => {
  const data = useSelector(state => state.ordersDone.data);
  const [condition, setCondition] = useState<string>('Wszystkie');
  const dispatch = useDispatch();
  const loader = useSelector(state => state.loader);
  const [refresh, setRefresh] = useState(false);
  const {t} = useTranslation();

  useEffect(() => {
    dispatch(OrdersActions.getOrdersDone());
    const interval = setInterval(() => {
      dispatch(OrdersActions.getOrdersDone()).then(() => {
        dispatch(setLoading(false));
      });
    }, 20000);
    return () => clearInterval(interval);
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

  const filter = condition => {
    setCondition(condition);
  };

  const backHomeOrder = id => {
    dispatch(OrdersActions.backToHomeList(id)).then(
      () => dispatch(setLoading(true)),
      toast(t('home.backOrders')),
    );
  };
  // const filteredContracts = React.useMemo(() => {
  //   return data?.filter(e => e.condition === condition);
  // }, [condition,backHomeOrder]);
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
          {data?.filter(e => e.condition === condition).length === 0 &&
          condition === 'Regenerowane'
            ? t('home.noDoneOrders') + '-' + condition
            : data?.filter(e => e.condition === condition).length === 0 &&
              condition === 'Nowe / używane'
            ? t('home.noDoneOrders') + '-' + condition
            : t('home.noDoneOrders')}
        </Text>
        <TouchableOpacity
          onPress={() => dispatch(OrdersActions.getOrdersDone())}
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

  return (
    <View flex={1} alignItems={'center'} backgroundColor={getColors('white')}>
      <StatusBar
        backgroundColor={getColors('primary')}
        barStyle="light-content"
      />
      {condition !== 'Wszystkie' ? (
        <Text
          style={{
            fontFamily: 'Montserrat-Bold',
            color: getColors('black'),
            fontSize: 18,
            paddingVertical: 5,
          }}>
          {condition}
        </Text>
      ) : null}
      <SwipeListView
        contentContainerStyle={{flexGrow: 1, paddingHorizontal: 5}}
        data={
          condition === 'Wszystkie'
            ? data
            : data?.filter(e => e.condition === condition)
        }
        ListEmptyComponent={<EmptyList />}
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={() =>
              dispatch(OrdersActions.getOrdersDone())
            }></RefreshControl>
        }
        rightOpenValue={-100}
        renderHiddenItem={({item}) => (
          <HiddenItem undoOrders onPressDelete={() => backHomeOrder(item.id)} />
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
      <SelectButton bottom={10}>
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
    </View>
  );
};
