import React, { Component } from "react";
import "../styles/Timetable.scss";
class Timetable extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { date } = this.props;
    const grid = [[1, 2, 3], [4, 5, 6]];
    return (
      <table className="wake-times">
        <tbody>
          {grid.map(row => (
            <tr key={row}>
              {row.map(cell => (
                <td key={cell}>
                  <div className={cell > 4 ? "table-data best" : "table-data"}>
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
