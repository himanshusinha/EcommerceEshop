import {combineReducers} from '@reduxjs/toolkit';
import authSlices from './auth.slices';
import themeSlice from './theme.slice';

export default combineReducers({
  auth: authSlices,
  theme: themeSlice,
});
