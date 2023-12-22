import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  success: false,
  error: null,
  message: '',
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    createOrderRequest: state => {
      state.loading = true;
      state.success = false;
      state.error = null;
      state.message = '';
    },
    createOrderSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.message = action.payload.message;
    },
    createOrderFail: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload.message;
      state.message = '';
    },
  },
});

export const {createOrderRequest, createOrderSuccess, createOrderFail} =
  orderSlice.actions;
export default orderSlice.reducer;
