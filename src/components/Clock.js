import React from "react";
import "../styles/Clock.scss";
const Clock = props => {
  return (
    <div className="display-time box-shadow">
      <div
        className="clock-hand"
        style={{
          transform:
            "translate(60px, -25px) rotate(" +
            props.date.getSeconds() * 6 +
            "deg)"
        }}
      >
        <div className="dark" />
        <div className="transparent" />
      </div>
      <h2>{convertTime(props.date)}</h2>
      <div className="seconds box-shadow-inset">
        {("0" + props.date.getSeconds()).slice(-2)}
      </div>
    </div>
  );
};
export default Clock;
