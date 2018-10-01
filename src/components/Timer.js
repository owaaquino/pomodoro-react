import React from "react";

class Timer extends React.Component {
  render() {
    return <h1>{Date.now()}</h1>;
  }
}

export default Timer;
