import { OrdersI } from '../../../types/ordersTypes';
import {AppThunk} from '../../AppThunk';
import { setOrders } from './orders.slice';

export const ordersThunk =
  (orders: OrdersI[]): AppThunk =>
  dispatch => {
    dispatch(setOrders(orders));
  };
