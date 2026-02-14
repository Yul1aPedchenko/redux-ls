//? BASE REDUX
// import { createStore } from "redux";
// import { rootReducer } from "./reducer";

// export const store = createStore(rootReducer);

//? REDUC TOOLKIT
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";

export const store = configureStore({
  reducer: rootReducer,
});
