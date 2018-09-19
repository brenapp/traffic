import React, { Component } from "react";
import "./App.css";
import Traffic from "./components/Traffic";
import CarCounter from "./components/CarCounter";
import Timer from "./components/Timer";
import log, { saveToClipboard } from "./Log";

class App extends Component {
  state = {
    resetTraffic: null,
    resetTimer: null,
    resetCars: null
  };

  render() {
    return (
      <div className="App">
        <button
          class="action-button reset"
          onClick={() => (
            this.state.resetCars(),
            this.state.resetTimer(),
            this.state.resetTraffic()
          )}
        >
          Reset
        </button>
        <button
          class="action-button copy-to-clipboard"
          onClick={saveToClipboard}
        >
          Save
        </button>
        <Traffic
          reset={resetTraffic =>
            this.setState({
              resetTraffic
            })
          }
          resetCars={this.state.resetCars}
          resetTimer={this.state.resetTimer}
          log={log}
        />
        <Timer reset={resetTimer => this.setState({ resetTimer })} />
        <CarCounter reset={resetCars => this.setState({ resetCars })} />
      </div>
    );
  }
}

export default App;
