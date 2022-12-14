import React, {useEffect, useState} from 'react';
import {View} from 'native-base';
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
import { RefreshControl } from 'react-native-gesture-handler';

export const DoneScreen = () => {
  const data = useSelector(state => state.orders.data);
  const [condition, setCondition] = useState<string>('Wszystkie');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(OrdersActions.getOrders());
  }, []);

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

  // const filter =(condition)=>{
  //   if(condition !='Wszytkie'){
  //     data.filter(e=>e.condition ===condition)
  //   } else
  // }
  const [refresh,setRefresh]=useState(false)

  return (
    <View flex={1} alignItems={'center'} backgroundColor={getColors('white')}>
      <SwipeListView
        data={data}
        refreshControl={<RefreshControl refreshing={refresh} onRefresh={()=> dispatch(OrdersActions.getOrders())}></RefreshControl>}
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
      <SelectButton bottom={10}>
        {selectText.map(item => {
          return (
            <TouchableOpacity style={{paddingVertical: 5}} key={item.id}>
              <Text
                style={{
                  color:
                    item.condition === condition
                      ? getColors('primary')
                      : getColors('lightGray'),
                  fontWeight: item.condition === condition ? 'bold' : 'normal',
                  fontSize:item.condition === condition ? 14 : 14
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
