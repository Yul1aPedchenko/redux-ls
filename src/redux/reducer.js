//? BASE REDUX
import { hw29Reducer } from "./hw29/reducer";
import { hw31Reducer } from "./hw31/reducer";
import { hw32Reducer } from "./hw32/reducer";

import { l29Reducer } from "./l29/reducer";

//? REDUX TOOLKIT
import { combineReducers } from "@reduxjs/toolkit";
import { todoListReducer } from "./l31/reducer";

export const rootReducer = combineReducers({
  hw29: hw29Reducer,
  hw31: hw31Reducer,
  hw32: hw32Reducer,

  l29: l29Reducer,
  l31: todoListReducer,
});
