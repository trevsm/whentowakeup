import React, { Component } from "react";
import "d3-interpolate";
import "../styles/App.scss";
import "../styles/Main.scss";

class App extends Component {
  componentDidMount() {
    this.draw();
  }
  draw() {
    let d = new Date();
    let displayTime = document.getElementsByClassName("display-time");
    let table = document.getElementsByTagName("table");
    const rad = 57.2957795;
    let values = [
      { value: 24 },
      { value: 24 },
      { value: 24 },
      { value: 24 },
      { value: 24 },
      { value: 24 }
    ];
    let time = [{ hh: 0, mm: 0, ampm: "" }];
    let total = 0;
    let dragging = true;
    let height = 500;
    let width = 500;
    let margin = { top: 20, left: 20, bottom: 20, right: 20 };
    let radius = 300 / 2;
    let parent = d3
      .select(".ring-input")
      .append("svg")
      .attr({
        height: height,
        width: width
      })
      .append("g")
      .attr("transform", "translate(" + 100 + "," + 100 + ")");
    function updateTime(values) {
      time.hh = Math.floor(values);
      time.mm = Math.floor((values - time.hh) * 60);
      if (time.hh >= 12) {
        time.ampm = "PM";
      } else if (time.hh < 12) {
        time.ampm = "AM";
      }
      if (time.hh % 12 == 0) {
        time.hh = 12;
      } else {
        time.hh = time.hh % 12;
      }
      displayTime[0].innerHTML =
        time.hh + ":" + ("0" + time.mm).slice(-2) + " " + time.ampm;
      return;
    }
    function drawHandles() {
      let join = handles.selectAll("circle").data(values);
      join
        .enter()
        .append("circle")
        .attr({
          r: 10,
          class: "handle"
        })
        .on("mouseover", function() {
          d3.select(this).classed("active", true);
        })
        .on("mouseout", function() {
          d3.select(this).classed("active", false);
        })
        .call(drag);

      join.attr({
        transform: function(d) {
          return (
            "rotate(" +
            angularScale(d.absoluteValue) +
            ") translate(" +
            radius +
            ",0)"
          );
        }
      });
    }
    function updateGrid() {
      for (var i = 0; i < 6; i++) {
        let j = Math.floor(i / 3);
        table[0].rows[j].cells[i % 3].innerHTML = ((i + 1) * 90) / 60;
      }
    }
    updateGrid();
    for (var i = 0; i < values.length; i++) {
      values[i].absoluteValue = d.getHours() + (d.getMinutes() + i * 90) / 60;
    }

    total += values[0].value;
    parent.append("line").attr("id", "test-line");

    let angularScale = d3.scale
      .linear()
      .range([0, 360])
      .domain([0, total]);
    let ring = parent
      .append("g")
      .attr("id", "rim")
      .attr("transform", "translate(" + radius + "," + radius + ")");
    ring.append("circle").attr({
      r: radius,
      class: "ring"
    });

    let handles = parent
      .append("g")
      .attr("id", "handles")
      .attr("transform", "translate(" + radius + "," + radius + ")");
    let drag = d3.behavior
      .drag()
      .origin(function(d) {
        return d;
      })
      .on("drag", dragmove)
      .on("dragend", function() {
        console.log("dragend");
        dragging = true;
        d3.select(this).classed("active", false);
      });

    updateTime(values[0].absoluteValue);
    drawHandles();

    function dragmove(d, i) {
      if (dragging) {
        console.log("dragmove");
        console.log(this);
        dragging = false;
      }

      d3.select(this).classed("active", true);
      let coordinates = d3.mouse(parent.node());
      let x = coordinates[0] - radius;
      let y = coordinates[1] - radius;
      let newAngle = Math.atan2(y, x) * rad;
      if (newAngle < 0) {
        newAngle = 360 + newAngle;
      }
      d.absoluteValue = angularScale.invert(newAngle);
      updateTime(values[0].absoluteValue);
      drawHandles();
    }
  }
  render() {
    return (
      <>
        <div className="top">
          <img src="../images/goodnight.svg" />
        </div>
        <div className="middle">
          <img src="../images/24-hour-clock.svg" className="clock" />
          <div className="ring-input" />
          <div className="display-time">00:00</div>
          <table>
            <tbody>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default App;
