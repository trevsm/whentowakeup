import React, { Component } from "react";
import "../styles/Timetable.scss";
class Timetable extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { date } = this.props;
    const grid = [1, 2, 3, 4, 5, 6];
    return (
      <div className="wake-times">
        {grid.map(id => (
          <div key={id}>
            <div key={id} className={`table-data data-${id} `}>
              {DatetoHHMM(addMinutes(date, 90 * id + 15))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Timetable;
