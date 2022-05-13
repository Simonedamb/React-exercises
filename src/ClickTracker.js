import React from "react";

export class ClickTracker extends React.Component {
  state = {
    initialClickButton: null,
  };

  handleClickButton = (event) => {
    this.setState({
      initialClickButton: event.target.name,
    });
  };

  render() {
    return (
      <div>
        <h1>this is {this.state.initialClickButton}</h1>
        <button name="firstButton" onClick={this.handleClickButton}>
          Button First
        </button>
        <button name="secondButton" onClick={this.handleClickButton}>
          Button Second
        </button>
        <button name="thirdButton" onClick={this.handleClickButton}>
          Button Third
        </button>
      </div>
    );
  }
}
