import React, { useCallback, useState } from "react";

function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);

  const handleCounterIncrement = useCallback(function handleCounterIncrement() {
    setCounter((c) => c + 1);
  }, []);

  const handleCounterDecrement = useCallback(function handleCounterDecrement() {
    setCounter((c) => c - 1);
  }, []);

  const handleCounterReset = useCallback(
    function handleCounterReset() {
      setCounter(initialValue);
    },
    [initialValue]
  );

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
