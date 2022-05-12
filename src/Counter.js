import React from "react";
import CounterDisplay from "./CounterDisplay";

class Counter extends React.Component {
  state = {
    count: this.props.initialCount,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: this.state.count + this.props.incrementCount,
      });
    }, this.props.intervallCount);
  }

  render() {
    return <CounterDisplay count={this.state.count} />;
  }
}

Counter.defaultProps = {
  initialCount: 0,
  incrementCount: 1,
  intervallCount: 1000,
};
export default Counter;
