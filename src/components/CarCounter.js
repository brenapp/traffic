import React, { Component } from "react";

export default class CarCounter extends Component {
  state = {
    clicks: 0
  };

  next() {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

  reset() {
    this.setState({
      clicks: 0
    });
    return this.state.clicks;
  }

  componentWillMount() {
    (this.props.reset || (() => {}))(this.reset.bind(this));
  }

  render() {
    return (
      <div class="car-counter" onClick={() => this.next()}>
        <h1>{this.state.clicks}</h1>
      </div>
    );
  }
}
