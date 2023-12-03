import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const {id} = action.payload;
      const existingItem = state.cart.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cart.push({...action.payload, quantity: 1});
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload);
      if (item.quantity === 1) {
        state.cart = state.cart.filter(item => item.id !== action.payload);
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(item => item.id !== action.payload);
      state.cart = removeItem;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {addToCart, incrementQuantity, decrementQuantity, removeItem} =
  cartSlice.actions;
