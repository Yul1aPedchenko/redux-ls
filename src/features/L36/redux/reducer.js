import { combineReducers } from "redux";
import { contactsReducer } from "./slices/contactsSlice";
import { filterReducer } from "./slices/filterSlice";

export const l36Reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
