import React, { Component } from "react";
import { Breakpoint, BreakpointProvider } from "react-socks";
import Contact from "./Contact";
import Clock from "./Clock";
import Timetable from "./Timetable";
import Modal from "./Modal";
import Earth from "./Earth";
import "../styles/App.scss";

class App extends Component {
  constructor(props) {
    super(props);

    //initialize new Date as current date
    let date = new Date();
    this.state = {
      date: date,
      custom: date,
    };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    window.setInterval(this.tick, 100);
    let help = document.getElementsByClassName("fa-info-circle")[0];
    let pop = document.getElementById("info");
    help.addEventListener("click", () => {
      pop.click();
    });
  }

  tick() {
    const { date } = this.state;
    const newDate = new Date();
    this.setState({
      date: newDate,
    });
  }

  updateCustom(customDate) {
    const { custom } = this.state;
    this.setState({
      custom: customDate,
    });
  }

  render() {
    let { date, custom } = this.state;
    let count = 0;

    return (
      <BreakpointProvider>
        <div id="help">
          <a className="fa fa-info-circle"></a>
        </div>
        <section className="middle">
          <Modal />
          {/* <CustomTime customDate={this.updateCustom.bind(this)} /> */}
          <Clock date={date == custom ? date : custom} />
          <div
            style={{
              position: "absolute",
              textAlign: "center",
              width: "80vw",
              maxWidth: "335px",
            }}
          >
            <label htmlFor="time">
              <input
                type="time"
                id="CustomTime"
                label="Custom-Time"
                style={{
                  opacity: "0",
                  height: "70px",
                  width: "145px",
                  transform: "translateY(-100px)",
                  fontSize: "25px",
                }}
                onInput={() => {
                  let input = document.getElementById("CustomTime");
                  if (input.value) {
                    this.updateCustom(HHMMtoDate(input.value));
                  }
                }}
              />
            </label>
          </div>
          <Earth />
          <Timetable date={date == custom ? date : custom} />
          <Contact />
        </section>
        <a href="https://tastyspore.com/">
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              right: "0",
              padding: "10px 20px",
              backgroundColor: "#383634",
              color: "#b7b7b7",
              borderRadius: "20px",
              margin: "10px auto",
              fontSize: "15px",
              width: "fit-content",
              fontFamily: "system-ui",
            }}
          >
            Interested in mushrooms? 🍄
            <br />
            Learn more @ tastyspore.com
          </div>
        </a>
      </BreakpointProvider>
    );
  }
}

export default App;
