//? BASE REDUX
import { hw29Reducer } from "../features/Hw29/redux/reducer";
import { hw31Reducer } from "../features/Hw31/redux/reducer";
import { hw32Reducer } from "../features/Hw32/redux/reducer";
import { hw33Reducer } from "../features/Hw33/redux/reducer";

import { l29Reducer } from "../features/L29/redux/reducer";
import { l31Reducer } from "../features/L31/redux/reducer";

//? REDUX TOOLKIT
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  hw29: hw29Reducer,
  hw31: hw31Reducer,
  hw32: hw32Reducer,
  hw33: hw33Reducer,

  l29: l29Reducer,
  l31: l31Reducer,
});
