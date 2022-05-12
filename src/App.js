import React from "react";
import Welcome from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome age={25} name="Andrea" />
      </div>
    );
  }
}
