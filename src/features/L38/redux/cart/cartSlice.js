import { createSlice } from "@reduxjs/toolkit";
import { fetchCartAsync, addToCartAsync, changeQuantityAsync, removeFromCartAsync } from "./cartThunk";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartAsync.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        const item = action.payload;
        const index = state.items.findIndex((i) => i.id === item.id);

        if (index !== -1) {
          state.items[index] = item;
        } else {
          state.items.push(item);
        }
      })
      .addCase(changeQuantityAsync.fulfilled, (state, action) => {
        if (action.payload.delete) {
          state.items = state.items.filter((i) => i.id !== action.payload.id);
        } else {
          const index = state.items.findIndex((i) => i.id === action.payload.id);
          state.items[index] = action.payload;
        }
      })
      .addCase(removeFromCartAsync.fulfilled, (state, action) => {
        state.items = state.items.filter((i) => i.id !== action.payload);
      });
  },
});

export const cartReducer = cartSlice.reducer;
