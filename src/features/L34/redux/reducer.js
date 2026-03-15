import { combineReducers } from "@reduxjs/toolkit";

import { tasksReducer } from "./slices/taskSlice";
import { filterReducer } from "./slices/filterSlice";

export const l34Reducer = combineReducers({
  tasks: tasksReducer,
  filter: filterReducer,
});
