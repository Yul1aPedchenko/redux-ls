import { createSlice } from "@reduxjs/toolkit";
import { fetchAuthors } from "./authorsOperations";


const authorsSlice = createSlice({
  name: "authors",
  initialState: { entities: [], isLoading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthors.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAuthors.fulfilled, (state, action) => {
        state.isLoading = false;
        state.entities = action.payload;
      })
      .addCase(fetchAuthors.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const authorsReducer = authorsSlice.reducer;
