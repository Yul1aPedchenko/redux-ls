import { hw29Reducer } from "./hw29/reducer";

import { l29Reducer } from "./l29/reducer";

import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  hw29: hw29Reducer,

  l29: l29Reducer,
});
