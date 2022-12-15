import React, {useEffect, useState} from 'react';
import {View} from 'native-base';
import {Dimensions, TouchableOpacity, Text, Modal} from 'react-native';
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
import { HomeButton } from '../../components/HomeButton';
import AddSvg from '../../assets/svg/AddSvg';
import { ModalAdd } from '../../components/ModalAdd';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export const HomeScreen = () => {
  const data = useSelector(state => state.orders.data);
  const [condition, setCondition] = useState<string>('Wszystkie');
  const [refresh,setRefresh]=useState(false)
  const [openModal,setOpenModal]=useState<boolean>(false)
  const dispatch = useDispatch();
  const navigation=useNavigation()
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

  useEffect(()=>{
  dispatch(OrdersActions.getOrders())
  },[])

  // const filter =(condition)=>{
  //   if(condition !='Wszytkie'){
  //     data.filter(e=>e.condition ===condition)
  //   } else
  // }

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
              regenerated={item.condition}
            />
          );
        }}
      />
      <SelectButton bottom={60}>
        {selectText.map(item => {
          return (
            <TouchableOpacity style={{paddingVertical: 5}} key={item.id} onPress={()=>setCondition()}>
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
      <HomeButton icon={<AddSvg/>} onPress={()=>navigation.navigate('ChoiceFormScreen')}/>
      <ModalAdd showModal={openModal} hideModal={()=>setOpenModal(!openModal)}/>
    </View>
  );
};
