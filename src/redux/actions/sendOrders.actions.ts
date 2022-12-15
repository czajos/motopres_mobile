import {serverAddress} from '../../config';
import {instance} from '../../instance';
import {data} from '../../local/data';
import {AppThunk} from '../AppThunk';
import {ordersThunk} from '../reducer/orders/orders.thunk';

export namespace SendOrdersActions {
  export const sendOrders =
    (data: any): AppThunk<Promise<any>> =>
    async dispatch => {
      try {
        console.log(data);
        await instance.post('/todo/addReg', {
          data,
        });
      } catch (e) {
        console.log(e.response.data);
      }
    };

    export const sendOrdersNew =
    (data: any): AppThunk<Promise<any>> =>
    async dispatch => {
      try {
        console.log(data);
        await instance.post('/todo/addNew', {
          data,
        });
      } catch (e) {
        console.log(e.response.data);
      }
    };
}
