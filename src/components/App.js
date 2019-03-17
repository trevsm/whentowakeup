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
        <header className="logo">
          <img src="../images/goodnight.svg" />
        </header>
        <section className="middle">
          <Clock date={date} />
          <p className="instruction">
            If you go to sleep now, wake up at any of these times...
          </p>
          <Timetable date={date} />
          <div className="arrows">
            <p>... Or these times for the best sleep</p>
            <img src="../images/arrows.svg" />
          </div>
        </section>
        <Contact />
      </>
    );
  }
}

export default App;
