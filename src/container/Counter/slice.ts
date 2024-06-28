import { createSlice } from "@reduxjs/toolkit";
import { CounterActions, CounterState } from "./interfaces";

const initialState: CounterState = {
  value: 0,
};

const slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    incrementAmmount: (state, action: CounterActions) => {
      state.value += action.payload;
    },
  },
});

export const { reducer } = slice;
export const { increment, incrementAmmount } = slice.actions;
