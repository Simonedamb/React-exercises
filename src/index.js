// import ReactDOM from "react-dom";
import "./index.css";
// import { App } from "./App";
import { store } from "./Store";
import {
  incrementCounter,
  decrementCounter,
  resetCounter,
} from "./CounterReducer";

// const root = document.querySelector("#root");

// ReactDOM.render(<App />, root);

store.dispatch(incrementCounter(6));
store.dispatch(decrementCounter(1));
store.dispatch(decrementCounter(6));
store.dispatch(resetCounter());
