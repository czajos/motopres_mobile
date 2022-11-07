import React, {useEffect} from 'react';
import {View} from 'native-base';
import {Dimensions} from 'react-native';
import {DEVICE_WIDTH} from '../../config';
import {getColors} from '../../theme/colors';
import {BoxOrder} from '../../components/BoxOrder';
import {SwipeListView} from 'react-native-swipe-list-view';
import {HiddenItem} from '../../components/HiddenItem';
import {useDispatch, useSelector} from 'react-redux';
import {OrdersActions} from '../../redux/actions/orders.actions';
import {deleteOrdersFromState} from '../../redux/reducer/orders/orders.slice';

export const HomeScreen = () => {
  const data = useSelector(state => state.orders.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(OrdersActions.getOrders());
  }, []);

  return (
    <View flex={1} alignItems={'center'} backgroundColor={getColors('white')}>
      <SwipeListView
        data={data}
        rightOpenValue={-100}
        renderHiddenItem={({item}) => (
          <HiddenItem
            onPressDelete={() => dispatch(deleteOrdersFromState(item.id))}
          />
        )}
        renderItem={({item}: {item: any}) => {
          return (
            <BoxOrder
              condition={item.condition}
              collect_date={item.collect_date}
              part={item.part}
              band_number={item.band_number}
              indexx={item.indexx}
              company={item.company}
              note={item.note}
            />
          );
        }}
      />
    </View>
  );
};
