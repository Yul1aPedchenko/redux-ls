import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProductsAsync } from "./redux/products/productsThunk";
import { fetchCartAsync } from "./redux/cart/cartThunk";

import { ProductsList } from "./components/ProductsList";
import { Cart } from "./components/Cart";

export const L38 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductsAsync());
    dispatch(fetchCartAsync());
  }, [dispatch]);
  return (
    <>
      <h2>l38</h2>
      <ProductsList />
      <Cart />
    </>
  );
};
