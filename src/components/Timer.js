import React from "react";

const Timer = props => {
  return (
    <h1>
      {props.minutes} : {props.seconds}
    </h1>
  );
};

export default Timer;
