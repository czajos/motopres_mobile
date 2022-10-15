import {AuthSliceIsLoggedT, AuthSliceTokenT} from './auth.types';
import {setIsLogged, setToken} from './auth.slice';
import {AppThunk} from '../../AppThunk';

export const setIsLoggedThunk =
  (isLogged: AuthSliceIsLoggedT): AppThunk =>
  dispatch => {
    dispatch(setIsLogged(isLogged));
  };

export const setTokenThunk =
  (token: AuthSliceTokenT): AppThunk =>
  dispatch => {
    dispatch(setToken(token));
  };
