import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { OrdersI } from '../../../types/ordersTypes';

interface LoaderStateI {
 loading:boolean
}

const initialState: LoaderStateI = {
  loading:false
};

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<any>) => {
        state.loading=action.payload;
      },
     
  },
});

export const {setLoading} = loaderSlice.actions;
export default loaderSlice.reducer;
