import React from "react";
import ClickCounter from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { UcontrolledLogin } from "./UncontrolledLogin";

export class App extends React.Component {
  render() {
    return (
      <div>
        <ClickCounter />
        <InteractiveWelcome />
        <UcontrolledLogin />
        <Login />
        <ClickTracker />
      </div>
    );
  }
}
