import {serverAddress} from '../../config';
import {instance} from '../../instance';
import {genericAsyncStorageOperator} from '../../utils/GenericAsyncStorage.service';
import {AppThunk} from '../AppThunk';
import {setIsEditorThunk, setTokenThunk} from '../reducer/auth/auth.thunk';
import { setVersionApk } from '../reducer/versionApk/versionApk.slice';
import {InitialActions} from './initial.actions';

export namespace AuthActions {
  export const loginAction =
    (username: string, password: string): AppThunk<Promise<any>> =>
    async dispatch => {
      try {
        const res = await instance.post('/auth/login', {
          username: username,
          password: password,
        });
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
      } catch (e) {
        console.log(e);
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
    (version:string): AppThunk<Promise<any>> =>
    async dispatch => {
      try {
        const res = await instance.post('/upload/check', {
         version:version
        });
     
        dispatch(setVersionApk(res.data.update));
      } catch (e) {
        console.log(e);
      }
    };
}
