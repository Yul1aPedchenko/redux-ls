import { createSlice } from "@reduxjs/toolkit";
import { fetchBooks } from "./booksOperations";


const booksSlice = createSlice({
  name: "books",
  initialState: { entities: [], isLoading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.entities = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const booksReducer = booksSlice.reducer;
