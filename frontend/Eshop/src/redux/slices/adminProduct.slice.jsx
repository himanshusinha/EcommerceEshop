import {createSlice} from '@reduxjs/toolkit';
import {THUNK_STATUS} from '../constants/redux.constant';
import {
  getAdminProductAsyncThunk,
  getProductAsyncThunk,
} from '../asyncThunk/authAsyncThunk';

const initialState = {
  products: [],
  adminStatus: null,
  isLoading: false,
  isError: false,
};
const adminProductSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAdminProductAsyncThunk.pending, (state, action) => {
      state.adminStatus = THUNK_STATUS.LOADING;
      state.isLoading = true;
      state.isError = false;
    });

    builder.addCase(getAdminProductAsyncThunk.fulfilled, (state, action) => {
      console.log(state, '......state');
      state.adminStatus = THUNK_STATUS.SUCCESS;
      state.products = action?.payload?.data;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(getAdminProductAsyncThunk.rejected, (state, action) => {
      state.adminStatus = THUNK_STATUS.FAILED;
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const adminState = state => state.adminStatus;
export default adminProductSlice.reducer;
