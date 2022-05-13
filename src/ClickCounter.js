import React from "react";

class ClickCounter extends React.Component {
  state = {
    count: 0,
  };
  handleClickCounter = () => {
    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  };
  render() {
    return (
      <div>
        <h1>count : {this.state.count}</h1>
        <button onClick={this.handleClickCounter}>Button</button>
      </div>
    );
  }
}

export default ClickCounter;
