import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch } from "react-redux";
import { Fragment } from "react";
import { increment, incrementAmmount } from "./container/Counter/slice";
import { useSelectors } from "./hooks";

/* import selectors from './infra/redux-old/selectors'
import actions from './infra/redux-old/actions' */

function App(/* {count,increment,incrementAmmount}: AppProps */) {
  const count = useSelectors((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleIncrementAmmount = () => {
    dispatch(incrementAmmount(10));
  };
  /*  const handleCountClick = () => {
     increment();
     dispatch({ type: "counter/increment" });
   }; */
  /* const handleCountClickAmmount = () => {
   incrementAmmount({ payload: 10 });
    dispatch({ type: "counter/incrementAmmount", payload: 10 });
  }; */

  return (
    <Fragment>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleIncrement}>count is {count}</button>
        <button onClick={handleIncrementAmmount}>Increment ammount</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </Fragment>
  );
}

export default /* connect(selectors,actions) */ App;
