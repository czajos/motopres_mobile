import {AuthSliceIsEditorT, AuthSliceTokenT} from './auth.types';
import {setIsEditor, setToken} from './auth.slice';
import {AppThunk} from '../../AppThunk';

export const setIsEditorThunk =
  (isLogged: AuthSliceIsEditorT): AppThunk =>
  dispatch => {
    dispatch(setIsEditor(isLogged));
  };

export const setTokenThunk =
  (token: AuthSliceTokenT): AppThunk =>
  dispatch => {
    dispatch(setToken(token));
  };
