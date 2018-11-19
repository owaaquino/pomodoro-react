import React, { Component } from "react";
import Timer from "./components/Timer";
import StartButton from "./components/StartButton";
import "./App.css";

class App extends Component {
  state = {
    timer: 0,
    isRunning: false,
    prevTime: 0
  };

  componentDidMount() {
    this.intervalId = setInterval(() => this.tick(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  tick = () => {
    if (this.state.isRunning) {
      const now = Date.now();
      this.setState(prevState => ({
        prevTime: now,
        timer: prevState.timer + (now - this.state.prevTime)
      }));
    }
  };

  startTimer = () => {
    this.setState(prevState => ({
      isRunning: !prevState.isRunning
    }));
    if (!this.state.isRunning) {
      console.log("startting...");
      this.setState({ prevTime: Date.now() });
    } else {
      console.log("stopping...");
    }
  };

  resetTimer = () => {
    this.setState({
      timer: 0
    });
  };

  render() {
    const seconds = Math.floor(this.state.timer / 1000);
    const minutes = Math.floor(this.state.timer / 1000);
    return (
      <div className="App">
        <Timer seconds={seconds} minutes={minutes} />
        <StartButton
          timer={this.state.timer}
          isRunning={this.state.isRunning}
          startTimer={this.startTimer}
          resetTimer={this.resetTimer}
        />
      </div>
    );
  }
}

// TODOS
// Timer display 25:00 start and finish to 0:00 - component
// Button on render is Start button only
// on click of start button display STOP button
// if 25 min was finished or STOP Button was clicked display the ff. button
// Short Break. button 5 min
// Long break button 15min
// RESET BUTTON
// notify user if timer is 0:00

// NOT IMPORTANT FEATURES
// count number of finished time.
// count number of unfinshed time

export default App;
