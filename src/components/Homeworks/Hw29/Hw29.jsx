import { Provider } from "react-redux";
import { store } from "./redux/store";

import { Content } from "./Content";

export const Hw29 = () => {
  return (
    <Provider store={store}>
      <Content />
    </Provider>
  );
};
