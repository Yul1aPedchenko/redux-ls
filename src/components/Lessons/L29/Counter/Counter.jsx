import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/actions";
import { decrement } from "../redux/actions";

export const Counter = () => {
  const count = useSelector((store) => store.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment);
  };
  const handleDecrement = () => {
    dispatch(decrement);
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};
