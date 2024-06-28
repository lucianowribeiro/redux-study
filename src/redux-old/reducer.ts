/* import { Action, createStore } from "redux";

const initialState = {
  counter: {
    value: 0,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "counter/increment":
      return {
        ...state,
        counter: {
          ...state.counter,
          value: state.counter.value + 1,
        },
      };
    case "counter/incrementAmmount":
      return {
        ...state,
        counter: {
          ...state.counter,
          value: state.counter.value + action.payload,
        },
      };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
 */
