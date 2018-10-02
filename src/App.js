import React, { Component } from "react";
import Timer from "./components/Timer";
import StartButton from "./components/StartButton";
import "./App.css";

class App extends Component {
  state = {
    timer: 0,
    isStart: false,
    isStoped: false
  };

  timerStart = time => {
    this.setState({
      timer: time
    });
  };

  render() {
    return (
      <div className="App">
        <Timer timer={this.state.timer} />
        <StartButton timerStart={this.timerStart} />
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
