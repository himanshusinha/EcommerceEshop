import {createSlice} from '@reduxjs/toolkit';
import {THUNK_STATUS} from '../constants/redux.constant';
import {getCategoriesThunk} from '../asyncThunk/authAsyncThunk';

const initialState = {
  user: null,
  authStatus: null,
  isLoading: false,
  isError: false,
};
const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCategoriesThunk.pending, (state, action) => {
      state.authStatus = THUNK_STATUS.LOADING;
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getCategoriesThunk.fulfilled, (state, action) => {
      state.authStatus = THUNK_STATUS.SUCCESS;
      state.user = action?.payload?.data;
      state.accessToken = action.payload?.data?.tokens?.access_token;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(getCategoriesThunk.rejected, (state, action) => {
      state.authStatus = THUNK_STATUS.SUCCESS;
      state.user = action?.payload?.data;
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const {addToken} = categorySlice.actions;
export const categoryState = state => state.categoryStatus;
export default categorySlice.reducer;
