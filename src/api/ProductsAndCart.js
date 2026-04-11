import axios from "axios";

const BASE_URL = import.meta.env.VITE_PRODUCTS_AND_CART;

export const productsAndCartApi = axios.create({
  baseURL: BASE_URL,
});
