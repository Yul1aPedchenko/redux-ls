import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, addTaskAsync, deleteTaskAsync, toggleTaskAsync } from "../thunks/tasksThunk";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })

      .addCase(fetchTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(addTaskAsync.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

      .addCase(deleteTaskAsync.fulfilled, (state, action) => {
        state.items = state.items.filter((task) => task.id !== action.payload);
      })

      .addCase(toggleTaskAsync.fulfilled, (state, action) => {
        const index = state.items.findIndex((task) => task.id === action.payload.id);

        if (index !== -1) {
          state.items[index] = action.payload;
        }
      });
  },
});

export const tasksReducer = tasksSlice.reducer;
