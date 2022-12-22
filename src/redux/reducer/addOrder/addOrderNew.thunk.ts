import {AppThunk} from '../../AppThunk';
import { AddOrder } from './addOrder.types';
import { setAddOrdersNew } from './addOrderNew.slice';

export const addOrderNewThunk =
  (addNewOrders: AddOrder.AddOrderNewStateI): AppThunk =>
  dispatch => {
    dispatch(setAddOrdersNew(addNewOrders));
  };
