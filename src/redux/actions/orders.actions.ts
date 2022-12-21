import { serverAddress } from '../../config';
import { instance } from '../../instance';
import { data } from '../../local/data';
import {AppThunk} from '../AppThunk';
import { addOrderThunk } from '../reducer/addOrder/addOrder.thunk';
import { addOrderNewThunk } from '../reducer/addOrder/addOrderNew.thunk';
import { ordersThunk } from '../reducer/orders/orders.thunk';
import { ordersDoneThunk } from '../reducer/ordersDone/ordersDone.thunk';

export namespace OrdersActions {
    export const getOrders= (): AppThunk<Promise<any>> =>
    async dispatch=>{
        try{
            const res = await instance.get('/todo/get');
            // console.log('lista zleceń ',res.data)
            //   const res=data
              dispatch(ordersThunk(res.data))
        }catch(e){
            console.log(e.response)
        }
    }

    export const getOrdersDone= (): AppThunk<Promise<any>> =>
    async dispatch=>{
        try{
            const res = await instance.get('/todo/getDone');
              dispatch(ordersDoneThunk(res.data))
        }catch(e){
            console.log(e.response)
        }
    }

    export const getOneOrder= (id:number,condition:string): AppThunk<Promise<any>> =>
    async dispatch=>{
        try{
            const res = await instance.get(`/todo/getOne/${id}`);
            if(condition==='Regenerowane'){
                dispatch(addOrderThunk(res.data))
            }else{
                dispatch(addOrderNewThunk(res.data))
            }
            
        }catch(e){
            console.log(e.response)
        }
    }

    export const deleteOrder= (id:number): AppThunk<Promise<any>> =>
    async dispatch=>{
        try{
            const res = await instance.put(`/todo/updateDone/${id}`);
        }catch(e){
            console.log(e.response)
        }
    }

    export const editOrder= (id:number,data:any): AppThunk<Promise<any>> =>
    async dispatch=>{
        try{
            const res = await instance.put(`/todo/update/${id}`,{
                data
            });
            console.log('edit res',res.data)
        }catch(e){
            console.log(e.response)
        }
    }

    export const backToHomeList= (id:number,data:any): AppThunk<Promise<any>> =>
    async dispatch=>{
        try{
            const res = await instance.put(`/todo/updateNotDone/${id}`);
            console.log('back to home res',res.data)
        }catch(e){
            console.log(e.response)
        }
    }
}