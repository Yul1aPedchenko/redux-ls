import { useSelector, useDispatch } from "react-redux";
import { selectCartItems, selectTotalPrice } from "../../redux/cart/selectors";
import { changeQuantityAsync, removeFromCartAsync } from "../../redux/cart/cartThunk";

import s from "./Cart.module.scss";

export const Cart = () => {
  const items = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);

  const dispatch = useDispatch();

  const buttons = [
    {
      type: "+",
      amount: 1,
    },
    {
      type: "-",
      amount: -1,
    },
  ];
  return (
    <>
      <div className={s.cart}>
        <h2>Cart</h2>

        <ul className={s.cart__list}>
          {items.map((item) => {
            return (
              <li key={item.id} className={s.cart__item}>
                <img src={item.imgUrl} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.price * item.quantity}$</p>

                <p>Quantity: {item.quantity}</p>
                <div className={s.cart__subwrap}>
                  {buttons.map((button) => {
                    return (
                      <button key={button.amount} onClick={() => dispatch(changeQuantityAsync({ id: item.id, amount: button.amount }))}>
                        {button.type}
                      </button>
                    );
                  })}
                  <button onClick={() => dispatch(removeFromCartAsync(item.id))}>Remove</button>
                </div>
              </li>
            );
          })}
        </ul>
        <p>Price: {totalPrice}$</p>
      </div>
    </>
  );
};
