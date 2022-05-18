import React, { useState } from "react";
import ClickCounter from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { TodoList } from "./TodoList";
import { UcontrolledLogin } from "./UncontrolledLogin";
import Counter from "./Counter";
import { Language } from "./Language";
import Sum from "./Sum";

export function App() {
  const [showCounter, setShowCounter] = useState(true);

  function handleToggleCounter() {
    setShowCounter((s) => !s);
  }

  return (
    <>
      <Language />
      <ClickCounter />
      <InteractiveWelcome />
      <UcontrolledLogin />
      <Sum />
      <TodoList
        render={(arr, addTodo, reset, removeTodo) => {
          return (
            <div>
              <form onSubmit={addTodo}>
                <input name="list" type="text" />
                <button type="submit">Submit</button>
                <button onClick={reset}>reset</button>
              </form>
              <ul>
                {arr.map((item, index) => {
                  return (
                    <div>
                      <li>{item}</li>
                      <button onClick={() => removeTodo(index)}>X</button>
                    </div>
                  );
                })}
              </ul>
            </div>
          );
        }}
      />
      <button onClick={handleToggleCounter}>Toggle Counter</button>
      {showCounter && <Counter />}
      <Login />
      <ClickTracker />
    </>
  );
}
