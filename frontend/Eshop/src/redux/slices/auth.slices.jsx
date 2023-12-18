import {createSlice} from '@reduxjs/toolkit';
import {THUNK_STATUS} from '../constants/redux.constant';
import {loginAsyncThunk} from '../asyncThunk/authAsyncThunk';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  user: [],
  accessToken: null,
  authStatus: null,
  isLoading: false,
  isAuthenticated: false,
  isError: false,
  role: null, // Add the role property to initialState
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    resetAuthState: state => {
      state.user = [];
      state.accessToken = null;
      state.authStatus = null;
      state.isLoading = false;
      state.isAuthenticated = false;
      state.isError = false;
      state.role = null;
    },
  },
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
      AsyncStorage.setItem('accessToken', state.accessToken).catch(error => {
        console.error('Error setting access token in AsyncStorage:', error);
      });
    });

    builder.addCase(loginAsyncThunk.rejected, (state, action) => {
      state.authStatus = THUNK_STATUS.FAILED;
      state.isLoading = false;
      state.isError = true;
      state.isAuthenticated = false;
    });
  },
});

export const {setRole, setAccessToken, resetAuthState} = authSlice.actions;
export const authState = state => state.authStatus;
export default authSlice.reducer;
