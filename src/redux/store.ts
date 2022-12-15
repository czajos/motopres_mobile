import {configureStore} from '@reduxjs/toolkit';
import addOrderSlice from './reducer/addOrder/addOrder.slice';
import authSlice from './reducer/auth/auth.slice';
import ordersSlice from './reducer/orders/orders.slice';


const store = configureStore({
  reducer: {
    auth: authSlice,
    orders:ordersSlice,
    addOrders:addOrderSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
