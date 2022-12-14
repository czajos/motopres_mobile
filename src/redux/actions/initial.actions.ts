import AsyncStorage from '@react-native-async-storage/async-storage';
import {genericAsyncStorageOperator} from '../../utils/GenericAsyncStorage.service';
import {AppThunk} from '../AppThunk';
import {setIsEditorThunk, setTokenThunk} from '../reducer/auth/auth.thunk';
import {AuthSliceTokenT, AuthSliceIsEditorT} from '../reducer/auth/auth.types';

export namespace InitialActions {
  export const initApp = (): AppThunk<Promise<boolean>> => async dispatch => {
    try {
      const token: AuthSliceTokenT =
        await genericAsyncStorageOperator.getItem<AuthSliceTokenT>('token');
      const isEditor: AuthSliceIsEditorT =
        await genericAsyncStorageOperator.getItem<AuthSliceTokenT>('isEditor');
      const seen = await AsyncStorage.getItem('FirstTime');
      if (token) {
        dispatch(setTokenThunk(token));
        dispatch(setIsEditorThunk(isEditor));

        console.log('token: ', token);
        console.log('isEditor: ', isEditor);

      }
      return true;
    } catch (e: any) {
      console.error('error from init func: ', e);
      return false;
    }
  };
}
