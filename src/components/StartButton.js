import React from "react";

const StartButton = props => {
  // timerCount = seconds => {
  //   const now = Date.now();
  //   const then = now + seconds * 1000;

  //   setInterval(() => {
  //     const secondsLeft = Math.round((then - Date.now()) / 1000);
  //     if (secondsLeft < 0) {
  //       clearInterval(counter);
  //       return;
  //     }
  //     console.log(secondsLeft);
  //   }),
  //     1000;
  // };

  return (
    <div>
      <button onClick={props.startTimer}>
        {props.isRunning ? "Stop" : "Start"}
      </button>
      <button onClick={props.resetTimer}>Reset</button>
    </div>
  );
};

export default StartButton;
