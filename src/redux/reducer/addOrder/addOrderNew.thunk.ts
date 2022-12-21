import {AppThunk} from '../../AppThunk';
import { setAddOrders } from './addOrder.slice';
import { AddOrder } from './addOrder.types';

export const addOrderNewThunk =
  (addNewOrders: AddOrder.AddOrderNewStateI): AppThunk =>
  dispatch => {
    dispatch(setAddOrders(addNewOrders));
  };
