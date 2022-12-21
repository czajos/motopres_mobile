import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { OrdersDoneI, OrdersI } from '../../../types/ordersTypes';

interface OrdersStateI {
  data: OrdersDoneI[]
}

const initialState: OrdersStateI = {
  data:[]
};

const orderDoneSlice = createSlice({
  name: 'ordersDone',
  initialState,
  reducers: {
    setOrdersDone: (state, action: PayloadAction<OrdersDoneI[]>) => {
        state.data=action.payload;
      },
      deleteOrdersDoneFromState: (
        state: any,
        action: PayloadAction<number>,
      ) => {
        state.data = state.data.filter(
          (i: OrdersDoneI) => i.id !== action.payload,
        );
      },
  },
});

export const {setOrdersDone,deleteOrdersDoneFromState} = orderDoneSlice.actions;
export default orderDoneSlice.reducer;
