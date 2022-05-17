import React from "react";
import ClickCounter from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { TodoList } from "./TodoList";
import { UcontrolledLogin } from "./UncontrolledLogin";
import Counter from "./Counter";
import { Container } from "./Container";

export class App extends React.Component {
  render() {
    return (
      <>
        <Container title={"WELCOME REACT"}>
          <ClickCounter />
          <Counter />
          <InteractiveWelcome />
          <UcontrolledLogin />
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
          <Login />
          <ClickTracker />
        </Container>
      </>
    );
  }
}
