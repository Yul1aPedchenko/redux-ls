import { createSlice } from "@reduxjs/toolkit";
import { fetchProductsAsync } from "./productsThunk";

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        isLoading: false,
    },
    extraReducers: builder => [
        builder
        .addCase(fetchProductsAsync.pending, state => {
            state.isLoading = true;
        })
        .addCase(fetchProductsAsync.fulfilled, (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
        })
    ]
})

export const productsReducer = productsSlice.reducer;