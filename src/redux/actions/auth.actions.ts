import { serverAddress } from '../../config';
import { instance } from '../../instance';
import {AppThunk} from '../AppThunk';
import {setIsLoggedThunk, setTokenThunk} from '../reducer/auth/auth.thunk';

export namespace AuthActions {
    export const loginAction=(username:string,password:any):AppThunk<Promise<any>>=>
    async dispatch=>{
        try{
            const res=instance.post('/auth/login',{
                username:username,
                password:password
            })
         console.log(res)
          dispatch(setTokenThunk(res.data))

        }catch(e){}
    }
}
