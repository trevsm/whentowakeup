import React, { Component } from "react";
import "../styles/Clock.scss";

let col, displayTime;

class Clock extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    col = document.getElementById("col");
    displayTime = document.getElementsByClassName("display-time")[0];

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
    var time = DatetoHHMM(date).split(":");
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
