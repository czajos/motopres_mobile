import {serverAddress} from '../../config';
import {instance} from '../../instance';
import {genericAsyncStorageOperator} from '../../utils/GenericAsyncStorage.service';
import { toast } from '../../utils/toast';
import {AppThunk} from '../AppThunk';
import {setIsEditorThunk, setTokenThunk} from '../reducer/auth/auth.thunk';
import { setVersionApk } from '../reducer/versionApk/versionApk.slice';
import {InitialActions} from './initial.actions';
import firebase from '@react-native-firebase/app'
import messaging from '@react-native-firebase/messaging';



export namespace AuthActions {
  export const loginAction =
    (username: string, password: string): AppThunk<Promise<any>> =>
    async dispatch => {
      try {
        const res = await instance.post('/auth/login', {
          username: username,
          password: password,
        });

        
        const getToken = async () => {
          console.log('GETTOKEN')
          const firebaseToken = await messaging().getToken()
          console.log('fireabsetoken',firebaseToken)
       const res2=   instance.post(`/notifi/fcm`, {
              token: firebaseToken
            })
            console.log('res2',res2)
        }
        if(res){
          getToken()
        }
        console.log(res.data)
        await genericAsyncStorageOperator.saveItem<string>(
          'token',
          res.data.token,
        );
        await genericAsyncStorageOperator.saveItem<string>(
            'isEditor',
            res.data.isEditor,
          );
        await dispatch(InitialActions.initApp());
        dispatch(setIsEditorThunk(res.data.isEditor));
        return true
      } catch (e) {
        toast('Błędne dane logowania')
        console.log('error',e.response);
        return false
      }
    };

  export const logoutAction = (): AppThunk<Promise<void>> => async dispatch => {
    try {
      await genericAsyncStorageOperator.saveItem<string>('token', '');
      await genericAsyncStorageOperator.saveItem<string>('isEditor', '');
      await dispatch(setTokenThunk(null));
    } catch (e) {
      console.log(e);
    }
  };
  export const versionAction =
    (version:string,platform:any): AppThunk<Promise<any>> =>
    async dispatch => {
      try {
        const res = await instance.post('/upload/check', {
         version:version,
         os:platform
        });
     
        dispatch(setVersionApk(res.data.update));
      } catch (e) {
        console.log(e);
      }
    };
}
