import React from "react";

export class TodoList extends React.Component {
  state = {
    arr: ["Hello", "Goodbye", "Good Moorning", "World"],
  };

  handleTodoList = (event) => {
    event.preventDefault();
    const elementInput = event.target.elements.list;
    const newList = elementInput.value;
    elementInput.value = "";

    this.setState((state) => {
      return {
        arr: [...state.arr, newList],
      };
    });
  };

  handleResetButtonList = (event) => {
    event.preventDefault();
    this.setState(() => {
      return {
        arr: [],
      };
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleTodoList}>
          <input name="list"></input>
          <ul>
            {this.state.arr.map((name) => (
              <li>{name}</li>
            ))}
          </ul>
          <button type="submit">Sending</button>
          <button type="submit" onClick={this.handleResetButtonList}>
            Reset
          </button>
        </form>
      </div>
    );
  }
}
