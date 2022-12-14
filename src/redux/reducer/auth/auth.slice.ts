import {
    AuthSliceGuestMode,
    AuthSliceI,
    AuthSliceIsEditorT,
    AuthSliceTokenT,
  } from './auth.types';
  import {createSlice, PayloadAction} from '@reduxjs/toolkit';
  
  const initialState: AuthSliceI = {
    token: null,
    isEditor: false,
  };
  
  export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setToken: (state, action: PayloadAction<AuthSliceTokenT>) => {
        state.token = action.payload;
      },
      setIsEditor: (state, action: PayloadAction<AuthSliceIsEditorT>) => {
        state.isEditor = action.payload;
      },
    },
  });
  
  export const {setToken, setIsEditor} = authSlice.actions;
  export default authSlice.reducer;
  