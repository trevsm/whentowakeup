import React, { Component } from "react";
import "../styles/Clock.scss";
class Clock extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { date } = this.props;
    return (
      <div className="display-time box-shadow">
        <div
          className="clock-hand"
          style={{
            transform: `translate(60px, -25px) rotate(${date.getSeconds() *
              6}deg)`
          }}
        >
          <div className="dark" />
          <div className="transparent" />
        </div>
        <h2>{convertTime(date)}</h2>
        <div className="seconds box-shadow-inset">
          {("0" + date.getSeconds()).slice(-2)}
        </div>
      </div>
    );
  }
}
export default Clock;
