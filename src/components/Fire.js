import React, { Component } from "react";
import "../styles/App.scss";
import "../styles/Fire.scss";

class Fire extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <svg
        className="flameSVG"
        viewBox="0 0 800 600"
        xmlns="https://www.w3.org/2000/svg"
      >
        <defs>
          <rect
            className="flame"
            x="400"
            y="310"
            width="5"
            height="5"
            rx="0.5"
            ry="0.5"
            fill="#FFDD02"
          />
          <circle className="spark" cx="400" cy="300" r="0.05" fill="#FFDD02" />

          <filter id="shadow" x="-100%" y="-100%" width="250%" height="250%">
            <feOffset in="SourceAlpha" dx="4" dy="4" result="offsetOut" />
            <feGaussianBlur stdDeviation="3" in="offsetOut" result="drop" />
            <feOffset dx="0" dy="0" result="offsetblur" />
            <feFlood id="glowAlpha" floodColor="#0F1217" floodOpacity="0.42" />
            <feComposite in2="offsetblur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g className="whole">
          <g className="flameContainer" />
          <g className="sparksContainer" />
          <g className="logs" opacity="1">
            <path
              d="M446.68,299.63l-91.46,29.22a3,3,0,0,1-3.68-2.12L349.2,318a3,3,0,0,1,2.12-3.68l91.46-29.22a3,3,0,0,1,3.68,2.12L448.8,296A3,3,0,0,1,446.68,299.63Z"
              fill="#612e25"
            />
            <path
              filter="url(#shadow)"
              d="M349.2,296l2.34-8.69a3,3,0,0,1,3.68-2.12l91.46,29.22A3,3,0,0,1,448.8,318l-2.34,8.69a3,3,0,0,1-3.68,2.12l-91.46-29.22A3,3,0,0,1,349.2,296Z"
              fill="#70392f"
            />
          </g>
        </g>

        <rect
          className="hit"
          width="200"
          height="260"
          x="300"
          y="230"
          fill="transparent"
        >
          <title>Poke the fire!</title>
        </rect>
      </svg>
    );
  }
}

export default Fire;
