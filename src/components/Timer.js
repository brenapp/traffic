import React, { Component } from "react";
export default class Timer extends Component {
  state = {
    started: false,
    startTime: -1,
    display: "0.000"
  };

  click() {
    if (this.state.started) {
      this.setState({ started: false });
    } else {
      this.setState(
        {
          started: true,
          startTime:
            this.state.startTime > 0 ? this.state.startTime : Date.now()
        },
        () => this.tick()
      );
    }
  }

  tick() {
    this.setState({
      display: ((Date.now() - this.state.startTime) / 1000).toFixed(3)
    });
    if (this.state.started) {
      requestAnimationFrame(this.tick.bind(this));
    }
  }

  reset() {
    this.setState({ startTime: Date.now(), display: "0.000" });
    return this.state.started ? Date.now() - this.state.startTime : null;
  }

  componentWillMount() {
    (this.props.reset || (() => {}))(this.reset.bind(this));
  }

  render() {
    return (
      <div class="timer" onClick={() => this.click()}>
        <p class="time">{this.state.display}s</p>
      </div>
    );
  }
}
