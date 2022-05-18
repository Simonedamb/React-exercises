import React, { useEffect, useState } from "react";

function Counter({ initialValue = 0 }) {
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
    console.log(`counter is ${counter}`);
  });

  function onCounterChange() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h2>Counter : {counter} </h2>
      <button onClick={onCounterChange}>Increment</button>
    </div>
  );
}

export default Counter;
