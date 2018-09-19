import React, { Component } from "react";

export default class Traffic extends Component {
  state = {
    clicks: 0
  };
  colors = ["green", "yellow", "red"];

  next() {
    this.setState({
      clicks: this.state.clicks + 1
    });

    this.props.log({
      light: this.colors[this.state.clicks % 3],
      cars: this.props.resetCars(),
      duration: this.props.resetTimer()
    });
  }

  reset() {
    this.setState({
      clicks: 0
    });
  }

  componentWillMount() {
    (this.props.reset || (() => {}))(this.reset.bind(this));
  }

  render() {
    return (
      <div
        class={`traffic-light ${this.colors[this.state.clicks % 3]}`}
        onClick={() => this.next()}
      />
    );
  }
}
