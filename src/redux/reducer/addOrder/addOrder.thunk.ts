import {AppThunk} from '../../AppThunk';
import { setAddOrders } from './addOrder.slice';
import { AddOrder } from './addOrder.types';

export const addOrderThunk =
  (addOrders: AddOrder.AddOrderStateI): AppThunk =>
  dispatch => {
    dispatch(setAddOrders(addOrders));
  };
