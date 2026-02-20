//? BASE REDUX
import { hw29Reducer } from "./hw29/reducer";
import { hw31Reducer } from "./hw31/reducer";

import { l29Reducer } from "./l29/reducer";

// import { combineReducers } from "redux";

// export const rootReducer = combineReducers({
//   hw29: hw29Reducer,

//   l29: l29Reducer,
// });

//? REDUX TOOLKIT
import { combineReducers } from "@reduxjs/toolkit";
import { todoListReducer } from "./l31/reducer";

export const rootReducer = combineReducers({
  hw29: hw29Reducer,
  hw31: hw31Reducer,

  l29: l29Reducer,
  l31: todoListReducer,
});
