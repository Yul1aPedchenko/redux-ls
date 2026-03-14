import { combineReducers } from "@reduxjs/toolkit";

import { tasksReducer } from "./slices/taskSlice";

export const l34Reducer = combineReducers({
  tasks: tasksReducer,
  // filter: filterReducer,
});
