import React from "react";
import ClickCounter from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { TodoList } from "./TodoList";
import { UcontrolledLogin } from "./UncontrolledLogin";
import Counter from "./Counter";
import { Container } from "./Container";
import { LanguageContext } from "./DisplayLanguage";

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
          <LanguageContext.Provider value={this.state.language}>
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
          </LanguageContext.Provider>
        </Container>
      </>
    );
  }
}
