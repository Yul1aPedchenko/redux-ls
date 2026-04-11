import { createSlice } from "@reduxjs/toolkit";
import { fetchCartAsync } from "./cartThunk";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    isLoading: false,
  },
  extraReducers: builder => {
    builder.addCase(fetchCartAsync.fulfilled, (state, action) => {
        state.items = action.payload;
    })
  }
});

export const cartReducer = cartSlice.reducer;