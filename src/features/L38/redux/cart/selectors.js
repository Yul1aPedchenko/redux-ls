import { createSelector } from "reselect";

const selectCart = (state) => state.l38.cart;

export const selectCartItems = createSelector([selectCart], (cart) => cart.items);

export const selectTotalPrice = createSelector(
  [selectCartItems],
  items => items.reduce((acc, item) => acc + item.price * item.quantity, 0),
);
