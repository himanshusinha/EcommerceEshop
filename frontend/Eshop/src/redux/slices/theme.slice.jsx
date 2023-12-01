import {createSlice} from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: 'light', // Initial theme is 'light'
  reducers: {
    changeTheme: (state, action) => {
      return action.payload; // 'light' or 'dark'
    },
  },
});

export const {changeTheme} = themeSlice.actions;
export default themeSlice.reducer;
