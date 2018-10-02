import React from "react";

class StartButton extends React.Component {
  startTimer = e => {
    console.log("beep!");
  };

  stopTimer = e => {
    console.log("boop!");
  };

  render() {
    return (
      <div>
        <button onClick={this.startTimer}>Start</button>
        <button onClick={this.stopTimer}>Stop</button>
      </div>
    );
  }
}

export default StartButton;
