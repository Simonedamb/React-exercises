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
          <TodoList />
          <Login />
          <ClickTracker />
        </Container>
      </>
    );
  }
}
