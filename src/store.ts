import { configureStore } from "@reduxjs/toolkit";
import { reducer as counterReducer } from "./container/Counter/slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export interface StoreState extends ReturnType<typeof store.getState> {}
