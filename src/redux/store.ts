import {configureStore} from '@reduxjs/toolkit';
import addOrderSlice from './reducer/addOrder/addOrder.slice';
import addOrderNewSlice from './reducer/addOrder/addOrderNew.slice';
import authSlice from './reducer/auth/auth.slice';
import loaderSlice from './reducer/loader/loader.slice';
import ordersSlice from './reducer/orders/orders.slice';
import ordersDoneSlice from './reducer/ordersDone/ordersDone.slice';


const store = configureStore({
  reducer: {
    auth: authSlice,
    orders:ordersSlice,
    addOrders:addOrderSlice,
    addOrderNew:addOrderNewSlice,
    ordersDone:ordersDoneSlice,
    loader:loaderSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
