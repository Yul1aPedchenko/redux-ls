import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProductsAsync } from "./redux/products/productsThunk";
import { fetchCartAsync } from "./redux/cart/cartThunk";

import { ProductsList } from "./components/ProductsList/ProductsList";
import { Cart } from "./components/Cart/Cart";

import s from './L38.module.scss';

export const L38 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductsAsync());
    dispatch(fetchCartAsync());
  }, [dispatch]);
  return (
    <>
      <div className={s.wrap}>
        <ProductsList />
        <Cart />
      </div>
    </>
  );
};
