import React, { Component } from "react";
import Contact from "./Contact";
import Clock from "./Clock";
import Timetable from "./Timetable";
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
    window.setInterval(this.tick, 50);
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
      <>
        <header>
          <Clock date={date} />
        </header>
        <section className="middle">
          <img src="../images/sleepcycle.png" />
          <Timetable date={date} />
        </section>
        <Contact />
      </>
    );
  }
}

export default App;
