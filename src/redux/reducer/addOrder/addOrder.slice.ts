import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {OrdersI} from '../../../types/ordersTypes';
import {AddOrder} from './addOrder.types';

const initialState: AddOrder.AddOrderStateI = {
  data: {
    part: '',
    band_number: '',
    indexx: 0,
    company: '',
    note: '',
    day: '',
    month: '',
    year: '',
  },
};

const orderSlice = createSlice({
  name: 'addOrders',
  initialState,
  reducers: {
    setAddOrders: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    setPart: (state, action: PayloadAction<AddOrder.Part>) => {
      state.data.part = action.payload;
    },
    setBandNumber: (state, action: PayloadAction<AddOrder.BandNumber>) => {
      state.data.band_number = action.payload;
    },
    setIndexx: (state, action: PayloadAction<AddOrder.Indexx>) => {
      state.data.indexx = action.payload;
    },
    setCompany: (state, action: PayloadAction<AddOrder.Company>) => {
      state.data.company = action.payload;
    },
    setNote: (state, action: PayloadAction<AddOrder.Note>) => {
      state.data.note = action.payload;
    },
    setDays: (state, action: PayloadAction<AddOrder.Day>) => {
      state.data.day = action.payload;
    },
    setMonths: (state, action: PayloadAction<AddOrder.Month>) => {
      state.data.month = action.payload;
    },
    setYears: (state, action: PayloadAction<AddOrder.Year>) => {
      state.data.year = action.payload;
    },
    resetDataInFormReg: () => initialState,
  },
});

export const {
  setAddOrders,
  setPart,
  setBandNumber,
  setCompany,
  setDays,
  setIndexx,
  setMonths,
  setNote,
  setYears,
  resetDataInFormReg
} = orderSlice.actions;
export default orderSlice.reducer;
