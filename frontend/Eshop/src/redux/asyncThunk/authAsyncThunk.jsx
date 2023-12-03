import {createAsyncThunk} from '@reduxjs/toolkit';
import {ASYNC_ROUTES} from '../constants/redux.constant';
import {
  forgetPasswordService,
  getCategoriesService,
  getProductService,
  getProfileService,
  logOutService,
  loginService,
  signUpService,
  updateProfilePicService,
  updateProfileService,
} from '../services/auth_services';

//loginThunk
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
//signUpThunk
export const signUpAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.SIGN_UP,
  async (payload, {rejectWithValue}) => {
    console.log(payload, '...payload from signUp');
    try {
      const response = await signUpService(payload);

      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
//logOutThunk
export const logOutAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.LOGIN,
  async (payload, {rejectWithValues}) => {
    console.log(payload, '...payload from signup');

    try {
      const response = await logOutService(payload);
      return response;
    } catch (error) {
      return rejectWithValues;
    }
  },
);
//getProfileThunk
export const getProfileAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.GET_PROFILE,
  async (payload, {rejectWithValue}) => {
    try {
      const response = await getProfileService(payload);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
//forgotPasswordThunk
export const forgotPasswordThunk = createAsyncThunk(
  ASYNC_ROUTES.FORGOT_PASSWORD,
  async (payload, {rejectWithValue}) => {
    try {
      const response = await forgetPasswordService(payload);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
//getCategoriesThunk
export const getCategoriesThunk = createAsyncThunk(
  ASYNC_ROUTES.GET_CATEGORIES,
  async (payload, {rejectWithValue}) => {
    try {
      const response = await getCategoriesService(payload);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
//getProductThunk
export const getProductAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.GET_PRODUCTS,
  async (payload, {rejectWithValue}) => {
    try {
      const response = await getProductService(payload);
      console.log(response, '..........response from get products');
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
//updateProfilePicThunk
export const updateProfilePicAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.UPDATE_PROFILE_PIC,
  async (payload, {rejectWithValue}) => {
    try {
      const response = await updateProfilePicService(payload);
      console.log(response, '.........update profile pic');
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

//updateProfileThunk
export const updateProfileAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.UPDATE_PROFILE,
  async (payload, {rejectWithValue}) => {
    try {
      const response = await updateProfileService(payload);
      console.log(response, '.........update profile');

      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
