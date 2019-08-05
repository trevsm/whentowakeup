import React, { Component } from "react";
import "../styles/Timetable.scss";
class Timetable extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { date } = this.props;
    const grid = [[1, 3, 5], [2, 4, 6]];
    return (
      <table className="wake-times">
        <tbody>
          {grid.map(row => (
            <tr key={row}>
              {row.map(cell => (
                <td key={cell}>
                  <div className={`table-data data-${cell} `}>
                    <div className="sup">{`${cell} `}</div>
                    {convertTime(addMinutes(date, 90 * cell + 15))}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
export default Timetable;
