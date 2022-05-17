import React from "react";

export class TodoList extends React.Component {
  state = {
    arr: ["Hello", "Goodbye", "Good Moorning", "World"],
    stringEmpty: "",
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
    this.setState({
      arr: [],
    });
  };

  handleRemoveItem = () => {
    this.setState(() => {
      return {
        stringEmpty: this.state.arr.splice(-1),
      };
    });
  };

  render() {
    return (
      <div>
        {this.props.render(
          this.state.arr,
          this.handleTodoList,
          this.handleResetButtonList,
          this.handleRemoveItem
        )}
      </div>
    );
  }
}
