import { combineReducers } from "redux";
import { booksReducer } from "./books/booksReducer";
import { authorsReducer } from "./authors/authorsReducer";

export const l37Reducer = combineReducers({
  books: booksReducer,
  authors: authorsReducer,
});
