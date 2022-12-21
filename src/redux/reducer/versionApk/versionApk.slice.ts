import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface VersionApkStateI {
 version:string | number;
}

const initialState: VersionApkStateI = {
  version:''
};

const versionApkSlice = createSlice({
  name: 'versionApk',
  initialState,
  reducers: {
    setVersionApk: (state, action: PayloadAction<any>) => {
        state.version=action.payload;
      },
     
  },
});

export const {setVersionApk} = versionApkSlice.actions;
export default versionApkSlice.reducer;
