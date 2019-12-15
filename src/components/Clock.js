import React, { Component } from "react";
import "../styles/Clock.scss";
class Clock extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let col = document.getElementById("col");
    setInterval(() => {
      if (col.style.opacity == 1) {
        col.style.opacity = 0.4;
      } else {
        col.style.opacity = 1;
      }
    }, 1000);
  }
  render() {
    const { date } = this.props;
    var time = convertTime(date).split(":");
    return (
      <div className="display-time">
        <h2>
          {time[0]}
          <span id="col">:</span>
          {time[1]}
        </h2>
      </div>
    );
  }
}
export default Clock;
