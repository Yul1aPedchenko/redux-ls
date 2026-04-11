import { useSelector } from "react-redux";
import { selectCartItems, selectTotalPrice } from "../redux/cart/selectors";

export const Cart = () => {

    const items = useSelector(selectCartItems);
    const totalPrice = useSelector(selectTotalPrice);
    // console.log(items, totalPrice);
    return(
        <>
            <div>
                <h2>Cart</h2>
                <p>Price: {totalPrice}</p>
            </div>
        </>
    )
}