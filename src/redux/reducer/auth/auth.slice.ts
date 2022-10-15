import {
    AuthSliceGuestMode,
    AuthSliceI,
    AuthSliceIsLoggedT,
    AuthSliceTokenT,
  } from './auth.types';
  import {createSlice, PayloadAction} from '@reduxjs/toolkit';
  
  const initialState: AuthSliceI = {
    token: null,
    isLogged: false,
  };
  
  export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setToken: (state, action: PayloadAction<AuthSliceTokenT>) => {
        state.token = action.payload;
      },
      setIsLogged: (state, action: PayloadAction<AuthSliceIsLoggedT>) => {
        state.isLogged = action.payload;
      },
    },
  });
  
  export const {setToken, setIsLogged} = authSlice.actions;
  export default authSlice.reducer;
  