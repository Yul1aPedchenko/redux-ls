import { combineReducers } from "redux";
import { productsReducer } from "./products/productsSlice";
import { cartReducer } from "./cart/cartSlice";

export const l38Reducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});
