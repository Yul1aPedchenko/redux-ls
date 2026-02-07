import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../../../redux/l29/actions";

export const Counter = () => {
  const count = useSelector((store) => store.l29.count);
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
