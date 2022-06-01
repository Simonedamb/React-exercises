import { useDispatch, useSelector } from "react-redux";
import { counterState } from "./state/counterState";

export function ReduxCounter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  function handleCounterIncrement() {
    dispatch(counterState.actions.increment(1));
  }

  function handleCounterDecrement() {
    dispatch(counterState.actions.decrement(1));
  }

  function handleCounterReset() {
    dispatch(counterState.actions.reset());
  }

  return (
    <div>
      <h3>Current value:{counter}</h3>
      <button onClick={handleCounterIncrement}>Increment</button>
      <button onClick={handleCounterDecrement}>Decrement</button>
      <button onClick={handleCounterReset}>Reset</button>
    </div>
  );
}
