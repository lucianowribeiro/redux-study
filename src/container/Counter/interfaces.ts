import { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}
export interface CounterActions extends PayloadAction<number> {}
