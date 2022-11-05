import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./reducer";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    app: Reducer,
    cart: cartReducer,
  },
});
