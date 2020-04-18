import React, { Component } from "react";

class Chrono extends Component {
  state = {
    seconds: null,
    running: false,
    paused: null,
    interval: null,
  };

  timer = () => {
    this.state.interval = setInterval(() => {
      this.setState({
        seconds: this.state.seconds + 1,
        running: true,
      });
    }, 1000);
  }

  start = () => {
    if (this.state.running === true){ // if a Chrono is running already
      alert("Error, please stop/reset current Chrono before starting a new one!")
    } else if(this.state.running === false && this.state.paused > 0){ // if Chrono was paused, take the value before the pause
      this.setState({
        seconds: this.state.paused
      })
      this.timer()
    } else { // if Chrono isn't running and wasn't paused before
      this.timer()
    }

  };

  stop = () => {
    this.setState({
        running: false,
        paused: this.state.seconds,
      }, () => {
        clearInterval(this.state.interval);
      }
    );
  };

  reset = () => {
    this.setState({
      running: false,
      seconds: null,
      paused: null
    })
  }



  render() {
    return (
      <div>
        <div>Number of seconds elapsed: {this.state.seconds}</div>
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Pause</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Chrono;
