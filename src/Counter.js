import React from "react";

class Counter extends React.Component {
  state = {
    count: this.props.initialCount,
  };

  constructor(props) {
    super(props);

    setInterval(() => {
      this.setState({
        count: this.state.count + this.props.incrementCount,
      });
    }, this.props.intervallCount);
  }

  render() {
    return <h1>{this.state.count}</h1>;
  }
}

Counter.defaultProps = {
  initialCount: 0,
  incrementCount: 1,
  intervallCount: 1000,
};
export default Counter;
