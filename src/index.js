// import ReactDOM from "react-dom";
import "./index.css";
// import { App } from "./App";
import { store } from "./state/Store";
import { todoReduce } from "./state/todoReduce";
import { counterState } from "./state/CounterState";
import { nanoid } from "nanoid";

// const root = document.querySelector("#root");

// ReactDOM.render(<App />, root);

store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch(counterState.actions.increment(5));
// store.dispatch(counterState.actions.decrement(3));
store.dispatch(
  todoReduce.actions.add({
    id: nanoid(),
    title: "Andare in palestra",
    completed: true,
  })
);
store.dispatch(
  todoReduce.actions.remove({
    id: nanoid(),
    title: "Studiare",
    completed: false,
  })
);
store.dispatch(counterState.actions.decrement(6));
store.dispatch(
  todoReduce.actions.edit({ id: nanoid(), data: { completed: true } })
);
store.dispatch(counterState.actions.reset());
