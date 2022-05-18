import React from "react";
import Welcome from "./Welcome";

export class InteractiveWelcome extends React.Component {
  state = {
    name: "simone",
  };

  render() {
    return (
      <div>
        <Welcome name="HELLO" />
        <input name="name" value={this.state.name}></input>
      </div>
    );
  }
}
