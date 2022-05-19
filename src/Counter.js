import React, { useState } from "react";

function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);

  function handleCounterIncrement() {
    setCounter((c) => c + 1);
  }

  function handleCounterDecrement() {
    setCounter((c) => c - 1);
  }

  function handleCounterReset() {
    setCounter(initialValue);
  }
  return {
    counter: counter,
    incrementCounter: handleCounterIncrement,
    decrementCounter: handleCounterDecrement,
    resetCounter: handleCounterReset,
  };
}

function Counter({ initialValue = 0 }) {
  const { counter, incrementCounter, decrementCounter, resetCounter } =
    useCounter(initialValue);

  return (
    <div>
      <h2>Counter : {counter} </h2>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>DECREMENT</button>
      <button onClick={resetCounter}>RESET</button>
    </div>
  );
}

export default Counter;
