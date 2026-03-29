import { hw29Reducer } from "../features/Hw29/redux/reducer";
import { hw31Reducer } from "../features/Hw31/redux/reducer";
import { hw32Reducer } from "../features/Hw32/redux/reducer";
import { hw34Reducer } from "../features/Hw34/redux/reducer";

import { l29Reducer } from "../features/L29/redux/reducer";
import { l31Reducer } from "../features/L31/redux/reducer";
import { l34Reducer } from "../features/L34/redux/reducer";
import { l36Reducer } from "../features/L36/redux/reducer";

import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  hw29: hw29Reducer,
  hw31: hw31Reducer,
  hw32: hw32Reducer,
  hw34: hw34Reducer,

  l29: l29Reducer,
  l31: l31Reducer,
  l34: l34Reducer,
  l36: l36Reducer,
});
