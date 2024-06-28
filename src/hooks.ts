import { TypedUseSelectorHook, useSelector } from "react-redux";
import { StoreState } from "./store";

export const useSelectors: TypedUseSelectorHook<StoreState> = useSelector;
