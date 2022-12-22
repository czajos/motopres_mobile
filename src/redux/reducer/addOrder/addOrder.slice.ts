import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {OrdersI} from '../../../types/ordersTypes';
import {AddOrder} from './addOrder.types';

const initialState: AddOrder.AddOrderStateI = {
  data: {
    internal_id:'',
    part: '',
    band_number: '',
    indexx: 0,
    company: '',
    note: '',
    day: '',
    month: '',
    year: '',
    time_morning:false,
    fv:false,
    deposit:false
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
    setFvReg: (state, action: PayloadAction<AddOrder.Invoice>) => {
      state.data.fv = action.payload;
    },
    setTimeMorning: (state, action: PayloadAction<AddOrder.TimeMorning>) => {
      state.data.time_morning = action.payload;
    },
    setDepositReg: (state, action: PayloadAction<AddOrder.Deposit>) => {
      state.data.deposit = action.payload;
    },
    setInternalId: (state, action: PayloadAction<AddOrder.Internal_id>) => {
      state.data.internal_id = action.payload;
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
  setFvReg,
  setTimeMorning,
  setInternalId,
  setDepositReg,
  resetDataInFormReg
} = orderSlice.actions;
export default orderSlice.reducer;
