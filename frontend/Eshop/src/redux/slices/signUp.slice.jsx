import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {THUNK_STATUS} from '../constants/redux.constant';
import {signUpAsyncThunk} from '../asyncThunk/authAsyncThunk';

const initialState = {
  user: null,
  authStatus: null,
  isLoading: false,
  isError: false,
  multipartData: null, // New state property to store multipart data
};
const signUpSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(signUpAsyncThunk.pending, (state, action) => {
      state.authStatus = THUNK_STATUS.LOADING;
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(signUpAsyncThunk.fulfilled, (state, action) => {
      state.authStatus = THUNK_STATUS.SUCCESS;
      state.user = action?.payload?.data;
      state.isLoading = false;
      state.isError = false;
      state.multipartData = action?.payload?.multipartData;
    });
    builder.addCase(signUpAsyncThunk.rejected, (state, action) => {
      state.authStatus = THUNK_STATUS.FAILED;
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const {addToken} = signUpSlice.actions;
export const authState = state => state.authStatus;
export default signUpSlice.reducer;
