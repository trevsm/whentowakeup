import React from "react";
import Popup from "reactjs-popup";
import "../styles/Modal.scss";

// font-family: 'Indie Flower', cursive;
// font-family: 'Special Elite', cursive;
// font-family: 'Lobster', cursive;

export default () => (
  <Popup
    trigger={<button id="info" className="button transparent"></button>}
    modal
  >
    {close => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="content">
          The average human takes
          <span style={{ color: "#fab070" }}> 15 minutes </span>
          to fall asleep. <br />
          If you go to sleep
          <span style={{ color: "#8fca7c" }}> right now</span>,<br /> you should
          wake up at <span style={{ color: "#8fd7f3" }}> one </span> of the
          <span style={{ color: "#f27f8c" }}> six </span>
          following times to feel
          <span style={{ color: "#aa86bd" }}> well rested </span>
          for the day. <br />
        </div>
      </div>
    )}
  </Popup>
);
