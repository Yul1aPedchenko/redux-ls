import { combineReducers } from "redux";
import { booksReducer } from "./books/booksReducer";

export const l37Reducer = combineReducers({
    books: booksReducer,
})