import {combineReducers} from '@reduxjs/toolkit';
import authSlices from './auth.slices';
import themeSlice from './theme.slice';
import adminProductSlice from './adminProduct.slice';
import categorySlice from './categories.slices';
import {cartReducer} from './cart.slice';
import signUpSlice from './signUp.slice';
import orderSlice from './order.slice';
export default combineReducers({
  auth: authSlices,
  theme: themeSlice,
  category: categorySlice,
  signUp: signUpSlice,
  adminProduct: adminProductSlice,
  cart: cartReducer,
  order: orderSlice,
});
