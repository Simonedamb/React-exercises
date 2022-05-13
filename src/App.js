import React from "react";
import ClickCounter from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { InteractiveWelcome } from "./InteractiveWelcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        <ClickCounter />
        <InteractiveWelcome />
        <ClickTracker />
      </div>
    );
  }
}
