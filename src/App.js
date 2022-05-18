import React from "react";
import ClickCounter from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { TodoList } from "./TodoList";
import { UcontrolledLogin } from "./UncontrolledLogin";
import Counter from "./Counter";
import { Container } from "./Container";
import { DisplayLanguage } from "./DisplayLanguage";
import CounterDisplay from "./CounterDisplay";
import { Language } from "./Language";
import Sum from "./Sum";

export class App extends React.Component {
  state = {
    language: "en",
  };

  handleLanguageChange = (event) => {
    this.setState({
      language: event.target.value,
    });
  };

  render() {
    return (
      <>
        <select
          value={this.state.language}
          onChange={this.handleLanguageChange}
        >
          <option value="en">ENGLISH</option>
          <option value="it">ITALIANO</option>
        </select>
        <Container title={"WELCOME REACT"}>
          <DisplayLanguage.Provider value={this.state.language}>
            <Language />
            <ClickCounter />
            <Counter />
            <CounterDisplay />
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
            <Login />
            <ClickTracker />
          </DisplayLanguage.Provider>
        </Container>
      </>
    );
  }
}
