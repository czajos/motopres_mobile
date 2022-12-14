import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { OrdersI } from '../../../types/ordersTypes';

interface OrdersStateI {
  data: OrdersI[]
}

const initialState: OrdersStateI = {
  data:[]
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders: (state, action: PayloadAction<OrdersI[]>) => {
        state.data=action.payload;
      },
      deleteOrdersFromState: (
        state: any,
        action: PayloadAction<number>,
      ) => {
        state.data = state.data.filter(
          (i: OrdersI) => i.id !== action.payload,
        );
      },
  },
});

export const {setOrders,deleteOrdersFromState} = orderSlice.actions;
export default orderSlice.reducer;
