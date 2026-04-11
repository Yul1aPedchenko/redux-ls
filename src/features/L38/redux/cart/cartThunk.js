import { createAsyncThunk } from "@reduxjs/toolkit";
import { productsAndCartApi } from "../../../../api/ProductsAndCart";

export const fetchCartAsync = createAsyncThunk("l38/cart/fetch", async () => {
  const r = await productsAndCartApi.get("/cart");
  return r.data;
});
