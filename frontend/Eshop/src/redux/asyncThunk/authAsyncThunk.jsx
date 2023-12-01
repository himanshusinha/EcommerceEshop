import {createAsyncThunk} from '@reduxjs/toolkit';
import {ASYNC_ROUTES} from '../constants/redux.constant';
import {loginService} from '../services/auth.services';

export const loginAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.LOGIN,
  async (payload, {rejectWithValues}) => {
    console.log(payload, '...payload from login');

    try {
      const response = await loginService(payload);
      return response;
    } catch (error) {
      return rejectWithValues;
    }
  },
);
