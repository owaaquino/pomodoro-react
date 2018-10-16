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

  countDown = value => {
    console.log(value);
  };

  startTimer = e => {
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

  resetTimer = e => {
    console.log("boop!");
  };

  render() {
    return (
      <div className="App">
        <Timer timer={this.state.timer} />
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
