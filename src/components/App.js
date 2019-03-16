import React, { Component } from "react";
import Fire from "./Fire.js";
import "../styles/App.scss";

function convertTime(date) {
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ampm = "AM";
  if (hh >= 12) {
    ampm = "PM";
  }
  if (hh == 0) {
    hh = 12;
  }
  hh = hh % 12;
  return hh + ":" + ("0" + mm).slice(-2) + " " + ampm;
}
function addMinutes(date, minutes) {
  const newDate = new Date(date);
  newDate.setMinutes(date.getMinutes() + minutes);
  return newDate;
}
class App extends Component {
  constructor(props) {
    super(props);

    //initialize new Date as current date
    let date = new Date();
    this.state = {
      date
    };
    this.tick = this.tick.bind(this);
  }
  componentDidMount() {
    window.setInterval(this.tick, 500);
  }
  tick() {
    const { date } = this.state;
    const newDate = new Date();
    console.log(date.getSeconds());
    this.setState({
      date: newDate
    });
  }
  render() {
    let { date } = this.state;
    let grid = [[1, 2, 3], [4, 5, 6]];
    let count = 0;

    return (
      <>
        <header className="logo">
          <img src="../images/goodnight.svg" />
        </header>
        <section className="middle">
          <div className="display-time box-shadow">{convertTime(date)}</div>
          <p className="instruction">Wake up at one of these times:</p>
          <table className="wake-times">
            <tbody>
              {grid.map(row => (
                <tr key={row}>
                  {row.map(cell => (
                    <td key={cell}>
                      <div
                        className={cell > 4 ? "table-data best" : "table-data"}
                      >
                        {convertTime(addMinutes(date, 90 * cell + 15))}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <footer>
          <Fire className="fireLoader" />
        </footer>
      </>
    );
  }
}

export default App;
