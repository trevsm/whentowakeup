import React, { Component } from "react";
import Contact from "./Contact";
import Clock from "./Clock";
import Timetable from "./Timetable";
import Modal from "./Modal";
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
        <Clock date={date} />
        <section className="middle">
          <div className="image">
            <img src="../images/earth.svg" />
          </div>
          <Timetable date={date} />
        </section>
        <Contact />
        <Modal />
      </>
    );
  }
}

export default App;
