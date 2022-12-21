import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {OrdersI} from '../../../types/ordersTypes';
import {AddOrder} from './addOrder.types';

const initialState: AddOrder.AddOrderNewStateI = {
  data: {
    part: '',
    band_number: '',
    indexx: 0,
    company: '',
    note: '',
    price:'',
    day: '',
    month: '',
    year: '',
    fv:false,
    deposit:false
  },
};

const orderNewSlice = createSlice({
  name: 'addOrderNew',
  initialState,
  reducers: {
    setAddOrders: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    setPartNew: (state, action: PayloadAction<AddOrder.Part>) => {
      state.data.part = action.payload;
    },
    setBandNumberNew: (state, action: PayloadAction<AddOrder.BandNumber>) => {
      state.data.band_number = action.payload;
    },
    setIndexxNew: (state, action: PayloadAction<AddOrder.Indexx>) => {
      state.data.indexx = action.payload;
    },
    setCompanyNew: (state, action: PayloadAction<AddOrder.Company>) => {
      state.data.company = action.payload;
    },
    setNoteNew: (state, action: PayloadAction<AddOrder.Note>) => {
      state.data.note = action.payload;
    },
    setPriceNew: (state, action: PayloadAction<AddOrder.Price>) => {
        state.data.price = action.payload;
      },
    setDaysNew: (state, action: PayloadAction<AddOrder.Day>) => {
      state.data.day = action.payload;
    },
    setMonthsNew: (state, action: PayloadAction<AddOrder.Month>) => {
      state.data.month = action.payload;
    },
    setYearsNew: (state, action: PayloadAction<AddOrder.Year>) => {
      state.data.year = action.payload;
    },
    setFvNew: (state, action: PayloadAction<AddOrder.Invoice>) => {
      state.data.fv = action.payload;
    },
    setDepositNew: (state, action: PayloadAction<AddOrder.Deposit>) => {
      state.data.deposit = action.payload;
    },
    resetDataInFormNew: () => initialState,
  },
});

export const {
  setAddOrders,
  setPartNew,
  setBandNumberNew,
  setCompanyNew,
  setDaysNew,
  setIndexxNew,
  setMonthsNew,
  setNoteNew,
  setYearsNew,
  setPriceNew,
  setFvNew,
  setDepositNew,
  resetDataInFormNew
} = orderNewSlice.actions;
export default orderNewSlice.reducer;
