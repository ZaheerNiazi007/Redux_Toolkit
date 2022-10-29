import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import userReducer from "./UserSlice";
export const store = configureStore({
  reducer: { counter: counterReducer, user: userReducer },
});
