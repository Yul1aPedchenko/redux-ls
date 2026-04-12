import { createAsyncThunk } from "@reduxjs/toolkit";
import { productsAndCartApi } from "../../../../api/ProductsAndCart";

export const fetchCartAsync = createAsyncThunk("l38/cart/fetch", async () => {
  const r = await productsAndCartApi.get("/cart");
  return r.data;
});

export const addToCartAsync = createAsyncThunk("l38/cart/add", async (product, { getState }) => {
  const state = getState();
  const existing = state.l38.cart.items.find((item) => item.productId === product.id);
  console.log("existing", existing);

  if (existing) {
    const r = await productsAndCartApi.put(`/cart/${existing.id}`, {
      ...existing,
      quantity: existing.quantity + 1,
    });
    return r.data;
  } else {
    const r = await productsAndCartApi.post("/cart", {
      productId: product.id,
      title: product.title,
      price: product.price,
      imgUrl: product.imgUrl,
      quantity: 1,
    });
    return r.data;
  }
});

export const changeQuantityAsync = createAsyncThunk("l38/cart/changeQuantity", async ({ id, amount }, { getState }) => {
  const item = getState().l38.cart.items.find((i) => i.id === id);
  const newQuantity = item.quantity + amount;

  if (newQuantity <= 0) {
    await productsAndCartApi.delete(`/cart/${id}`);
    return { id, delete: true };
  }

  const r = await productsAndCartApi.put(`/cart/${id}`, {
    ...item,
    quantity: newQuantity,
  });

  return r.data;
});

export const removeFromCartAsync = createAsyncThunk("l38/cart/remove", async (id) => {
  await productsAndCartApi.delete(`/cart/${id}`);
  return id;
});
