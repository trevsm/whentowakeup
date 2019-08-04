import React, { Component } from "react";
import "../styles/Clock.scss";
class Clock extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { date } = this.props;
    return (
      <div className="display-time">
        <h2>{convertTime(date)}</h2>
      </div>
    );
  }
}
export default Clock;
