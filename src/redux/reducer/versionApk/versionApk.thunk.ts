import { OrdersI } from '../../../types/ordersTypes';
import {AppThunk} from '../../AppThunk';
import { setVersionApk } from './versionApk.slice';

export const versionApkThunk =
  (version: any): AppThunk =>
  dispatch => {
    dispatch(setVersionApk(version));
  };
