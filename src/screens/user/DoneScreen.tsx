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

export const DoneScreen = () => {
  const data = useSelector(state => state.ordersDone.data);
  const [condition, setCondition] = useState<string>('Wszystkie');
  const dispatch = useDispatch();
  const loader = useSelector(state => state.loader);
  const [refresh, setRefresh] = useState(false);
  const filteredContracts = React.useMemo(() => {
    return data.filter(e => e.condition === condition);
  }, [condition]);
  useEffect(() => {
    dispatch(OrdersActions.getOrdersDone());
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

  return (
    <View flex={1} alignItems={'center'} backgroundColor={getColors('white')}>
      <StatusBar
        backgroundColor={getColors('primary')}
        barStyle="light-content"
      />
      <SwipeListView
        data={condition === 'Wszystkie' ? data : filteredContracts}
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={() =>
              dispatch(OrdersActions.getOrdersDone())
            }></RefreshControl>
        }
        rightOpenValue={-100}
        renderHiddenItem={({item}) => (
          <HiddenItem
            undoOrders
            onPressDelete={() =>
              dispatch(OrdersActions.backToHomeList(item.id)).then(() =>
                dispatch(setLoading(true)),
              )
            }
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
