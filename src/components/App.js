import React, { Component } from "react";
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
      custom: date
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
      date: newDate
    });
  }

  updateCustom(customDate) {
    const { custom } = this.state;
    this.setState({
      custom: customDate
    });
  }

  render() {
    let { date, custom } = this.state;
    let count = 0;

    return (
      <>
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
              maxWidth: "335px"
            }}
          >
            <input
              type="time"
              id="CustomTime"
              style={{
                opacity: "0",
                height: "70px",
                width: "145px",
                transform: "translateY(-100px)"
              }}
              onInput={() => {
                let input = document.getElementById("CustomTime");
                this.updateCustom(HHMMtoDate(input.value));
              }}
            />
          </div>
          <Earth />
          <Timetable date={date == custom ? date : custom} />
          <Contact />
        </section>
      </>
    );
  }
}

export default App;
