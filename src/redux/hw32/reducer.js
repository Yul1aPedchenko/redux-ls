import { combineReducers } from "redux";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";

export const hw32Reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
