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
      date
    };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    window.setInterval(this.tick, 100);
    let help = document.getElementsByClassName("fa-info-circle")[0];
    let pop = document.getElementsByClassName("button")[0];
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

  render() {
    let { date } = this.state;
    let count = 0;

    return (
      <section className="middle">
        <div id="help">
          <a className="fa fa-info-circle"></a>
        </div>
        <Modal />
        <Clock date={date} />
        <Earth />
        <Timetable date={date} />
        <Contact />
      </section>
    );
  }
}

export default App;
