import { createAsyncThunk } from "@reduxjs/toolkit";
import { productsAndCartApi } from "../../../../api/ProductsAndCart";

export const fetchProductsAsync = createAsyncThunk("l38/products/fetch", async () => {
  const r = await productsAndCartApi.get("/products");
  return r.data;
});
