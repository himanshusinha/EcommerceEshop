import {createSlice} from '@reduxjs/toolkit';
import {THUNK_STATUS} from '../constants/redux.constant';
import {logOutAsyncThunk, loginAsyncThunk} from '../asyncThunk/authAsyncThunk';

const initialState = {
  user: [],
  accessToken: null,
  authStatus: null,
  isLoading: false,
  isAuthenticated: false,
  isError: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loginAsyncThunk.pending, (state, action) => {
      state.authStatus = THUNK_STATUS.LOADING;
      state.isLoading = true;
      state.isAuthenticated = false;
      state.isError = false;
    });

    builder.addCase(loginAsyncThunk.fulfilled, (state, action) => {
      state.authStatus = THUNK_STATUS.SUCCESS;
      state.user = action?.payload?.data;
      state.accessToken = action.payload?.data?.tokens?.access_token;
      state.isLoading = false;
      state.isAuthenticated = true;
      state.isError = false;
    });

    builder.addCase(loginAsyncThunk.rejected, (state, action) => {
      state.authStatus = THUNK_STATUS.FAILED;
      state.isLoading = false;
      state.isError = true;
      state.isAuthenticated = false;
    });
  },
});

export const {addToken} = authSlice.actions;
export const authState = state => state.authStatus;
export default authSlice.reducer;
