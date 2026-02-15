import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { addTask, deleteTask, toggleComplete, setStatusFilter } from "./actions";

const tasksInitialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];
const tasksReducer = createReducer(tasksInitialState, (builder) => {
  builder
    .addCase(addTask, (state, action) => {
      const elId = state.length;
      const newTask = {
        id: elId,
        text: action.payload,
        completed: false,
      };
      state.push(newTask);
    })
    .addCase(deleteTask, (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    })
    .addCase(toggleComplete, (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    });
});

const filtersInitialState = {
  status: "all",
};
const filterReducer = createReducer(filtersInitialState, (builder) => {
  builder.addCase(setStatusFilter, (state, action) => {
    state.status = action.payload;
  });
});

export const todoListReducer = combineReducers({
  tasks: tasksReducer,
  filter: filterReducer,
});
