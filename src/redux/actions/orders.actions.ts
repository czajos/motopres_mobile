import { serverAddress } from '../../config';
import { instance } from '../../instance';
import { data } from '../../local/data';
import {AppThunk} from '../AppThunk';
import {setIsLoggedThunk, setTokenThunk} from '../reducer/auth/auth.thunk';
import { ordersThunk } from '../reducer/orders/orders.thunk';

export namespace OrdersActions {
    export const getOrders= (): AppThunk<Promise<any>> =>
    async dispatch=>{
        try{
            const res = await instance.get('/todo/get');
            console.log('lista zleceń ',res.data)
            //   const res=data
              dispatch(ordersThunk(res.data))
        }catch(e){
            console.log(e.response)
        }
    }
}