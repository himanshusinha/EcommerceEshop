import {createAsyncThunk} from '@reduxjs/toolkit';
import {ASYNC_ROUTES} from '../constants/redux.constant';
import {
  addAdminCategoriesService,
  addProductServices,
  changePasswordService,
  deleteAdminCategoriesByIdService,
  deleteAdminProductByIdService,
  forgetPasswordService,
  getAdminProductService,
  getCategoriesService,
  getProductDetailsByIdService,
  getProfileService,
  logOutService,
  loginService,
  resetPasswordService,
  signUpService,
  updateAdminProductByIdSerice,
  updateProductPicByIdService,
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
  ASYNC_ROUTES.LOGOUT,
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
export const getAdminProductAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.GET_ADMIN_PRODUCTS,
  async (payload, {rejectWithValue}) => {
    try {
      const response = await getAdminProductService(payload);
      console.log(response, '..........response from get products');
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
//updateProfilePicThunk
export const updateProfilePicByIdAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.UPDATE_PROFILE_PIC,
  async (payload, {rejectWithValue}) => {
    try {
      const response = await updateProductPicByIdService(payload);
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

//changePassword
export const changePasswordThunk = createAsyncThunk(
  ASYNC_ROUTES.CHANGE_PASSWORD,
  async (payload, {rejectWithValue}) => {
    try {
      const response = await changePasswordService(payload);
      console.log(response, '.........update profile');

      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

//resetPasswordThunk
export const resetPasswordThunk = createAsyncThunk(
  ASYNC_ROUTES.RESET_PASSWORD,
  async (payload, {rejectWithValue}) => {
    try {
      const response = await resetPasswordService(payload);
      console.log(response, '......response from change password');
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

//addProductsThunk
export const addProductsThunk = createAsyncThunk(
  'products/addProducts',
  async (formData, {rejectWithValue}) => {
    try {
      const response = await addProductServices(formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// getProductDetailsByIdThunk
export const getProductDetailsByIdThunk = createAsyncThunk(
  ASYNC_ROUTES.GET_PRODUCTS_DETAILS_BY_ID,
  async (id, {rejectWithValue}) => {
    try {
      const response = await getProductDetailsByIdService(id);
      console.log(
        response,
        '................response from get productDetaiils asyncthunk',
      );
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

//addAdminCategoriesThunk
export const addAdminCategoriesThunk = createAsyncThunk(
  ASYNC_ROUTES.ADD_ADMIN_CATEGORIES,
  async (payload, {rejectWithValue}) => {
    try {
      const response = await addAdminCategoriesService({category: payload});
      return response;
    } catch (err) {
      console.error('Error in addAdminCategoriesThunk:', err);
      if (err.response) {
        console.error('Response data:', err.response.data);
      }
      return rejectWithValue(err.response?.data);
    }
  },
);
//deleteAdminCategoriesByIdThunk
export const deleteAdminCategoriesByIdThunk = createAsyncThunk(
  ASYNC_ROUTES.DELETE_ADMIN_CATEGORIES_BY_ID,
  async ({id}, {rejectWithValue}) => {
    try {
      const response = await deleteAdminCategoriesByIdService({id});
      console.log(response, '.......response from delete admin service');

      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

//updateAdminProductByIdAsyncThunk
export const updateAdminProductByIdAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.UPDATE_ADMIN_PRODUCT_BY_ID,
  async (
    {id, name, description, price, stock, category},
    {rejectWithValue},
  ) => {
    try {
      const response = await updateAdminProductByIdSerice({
        id,
        name,
        description,
        price,
        stock,
        category,
      });
      console.log(response, '.......response from update admin service');

      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
//updateProductPicAsyncThunk
export const updateProductPicByIdAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.UPDATE_PRODUCT_PIC_BY_ID,
  async (id, {rejectWithValue}) => {
    try {
      const response = await updateProductPicByIdService(id);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
//deleteAdminProductByIdThunk
export const deleteAdminProductByIdThunk = createAsyncThunk(
  ASYNC_ROUTES.DELETE_ADMIN_CATEGORIES_BY_ID,
  async ({id}, {rejectWithValue}) => {
    try {
      const response = await deleteAdminProductByIdService({id});
      console.log(response, '.......response from delete admin service');

      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
