import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
        const { _id } = action.payload;
        const existingItem = state.items.find(item => item._id === _id);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            state.items.push({ ...action.payload, quantity: 1 });
        }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item._id !== action.payload._id);
    },
    clearCart: state => {
      state.items = [];
    },
  },
});

export const { addToCart, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
