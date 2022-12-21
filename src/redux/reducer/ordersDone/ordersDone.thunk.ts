import { OrdersDoneI, OrdersI } from '../../../types/ordersTypes';
import {AppThunk} from '../../AppThunk';
import { setOrdersDone } from './ordersDone.slice';

export const ordersDoneThunk =
  (orders: OrdersDoneI[]): AppThunk =>
  dispatch => {
    dispatch(setOrdersDone(orders));
  };
