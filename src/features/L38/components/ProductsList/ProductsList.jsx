import { useSelector, useDispatch } from "react-redux";
import { addToCartAsync } from "../../redux/cart/cartThunk";

import s from "./ProductsList.module.scss";

export const ProductsList = () => {
  const { items } = useSelector((state) => state.l38.products);

  const dispatch = useDispatch();
  return (
    <>
      <div className={s.products}>
        <h2>Products</h2>
        <div className={s.products__list}>
          {items.map((product) => (
            <div key={product.id} className={s.products__item}>
              <img src={product.imgUrl} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.price} $</p>

              <button onClick={() => dispatch(addToCartAsync(product))}>Add to cart</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
