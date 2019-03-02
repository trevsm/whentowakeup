import React, { Component } from "react";
import "../styles/App.scss";
import "../styles/Main.scss";
import "../../node_modules/d3";

class App extends Component {
  componentDidMount() {
    this.draw();
  }
  draw() {
    var displayTime = document.getElementsByClassName("display-time");
    const rad = 57.2957795;
    var values = [{ value: 33 }];
    var time = [{ hh: 0, mm: 0 }];
    var total = 0;
    var dragging = true;

    values[0].absoluteValue = total;
    total += values[0].value;

    var height = 500,
      width = 500,
      margin = { top: 20, left: 20, bottom: 20, right: 20 };
    var radius = 300 / 2;

    var parent = d3
      .select(".ring-input")
      .append("svg")
      .attr({
        height: height,
        width: width
      })
      .append("g")
      .attr("transform", "translate(" + 100 + "," + 100 + ")");

    parent.append("line").attr("id", "test-line");

    var angularScale = d3.scale
      .linear()
      .range([0, 360])
      .domain([0, total]);

    var ring = parent
      .append("g")
      .attr("id", "rim")
      .attr("transform", "translate(" + radius + "," + radius + ")");
    ring.append("circle").attr({
      r: radius,
      class: "ring"
    });

    var handles = parent
      .append("g")
      .attr("id", "handles")
      .attr("transform", "translate(" + radius + "," + radius + ")");
    var drag = d3.behavior
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

    //position the handles based on the input values
    function drawHandles() {
      var join = handles.selectAll("circle").data(values);
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

    drawHandles();

    function dragmove(d, i) {
      if (dragging) {
        console.log("dragmove");
        dragging = false;
      }

      d3.select(this).classed("active", true);
      var coordinates = d3.mouse(parent.node());
      var x = coordinates[0] - radius;
      var y = coordinates[1] - radius;
      var newAngle = Math.atan2(y, x) * rad;
      if (newAngle < 0) {
        newAngle = 360 + newAngle;
      }
      d.absoluteValue = angularScale.invert(newAngle);
      //REDRAW HANDLES
      time[0].hh = Math.floor(values[0].absoluteValue / (32 / 24));
      time[0].mm = Math.floor(
        ((values[0].absoluteValue / (32 / 24) - time[0].hh) * 100) / (100 / 60)
      );
      displayTime[0].innerHTML =
        ("0" + time[0].hh).slice(-2) + ":" + ("0" + time[0].mm).slice(-2);
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
        </div>
      </>
    );
  }
}

export default App;
