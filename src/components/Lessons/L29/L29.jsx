import { Provider } from "react-redux";
import { store } from "./redux/store";

import { Counter } from "./Counter/Counter";
export const L29 = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};
