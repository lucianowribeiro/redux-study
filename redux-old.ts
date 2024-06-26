import { Action, createStore } from "redux";

const initialState = {
  counter: {
    value: 0,
  },
};

const reducer = (state = initialState, action : Action) => {
  switch (action.type) {
    case "counter/increment":
      return {
        ...state,
        counter: {
          ...state.counter,
          value: state.counter.value + 1,
        },
      };
    case "counter/decrement":
      return {
        ...state,
        counter: {
          ...state.counter,
          value: state.counter.value - 1,
        },
      };
    default:
      return state;
  }
};

export const store = createStore(reducer, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
