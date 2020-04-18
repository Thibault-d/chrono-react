import React, { Component } from "react";

class Chrono extends Component {
  state = {
    seconds: 0,
    status: "",
  };

  start = () => {
    setInterval(() => {

      this.setState({
        seconds: this.state.seconds +1
      })
    }, 1000);
  };

  render() {
    return (
      <div>
        <div>Number of seconds elapsed: {this.state.seconds}</div>
        <button onClick={this.start}>Start</button>
      </div>
    );
  }
}

export default Chrono;
