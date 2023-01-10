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
    currentUser:null
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
      setCurrentUser: (state, action: PayloadAction<AuthSliceIsEditorT>) => {
        state.isEditor = action.payload;
      },
    },
  });
  
  export const {setToken, setIsEditor,setCurrentUser} = authSlice.actions;
  export default authSlice.reducer;
  