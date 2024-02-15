import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload)
    },
    deleteItems: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    }
  }
})

export const {addItems, deleteItems} = cartSlice.actions;

export default cartSlice.reducer;