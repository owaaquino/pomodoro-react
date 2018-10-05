import React from "react";

class StartButton extends React.Component {
  state = {
    countdown: 0
  };

  timer = seconds => {
    const now = Date.now();
    const then = now + seconds * 1000;

    setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);
      if (secondsLeft <= 0) {
        clearInterval(this.state.countdown);
      }

      // this.setState((countdown: secondsLeft));
      console.log(secondsLeft);
    }),
      1000;
  };

  startTimer = e => {
    const timerNow = this.timer(10);
    this.props.timerStart(timerNow);
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
