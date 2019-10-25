import React from "react";
import Popup from "reactjs-popup";
import "../styles/Modal.scss";

export default () => (
  <Popup trigger={<button className="button transparent"></button>} modal>
    {close => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="content">
          The average human takes 15 minutes to fall asleep. <br />
          If you go to sleep <u>right now</u>, you should wake up at one of the
          following times to feel well rested for the day.
        </div>
      </div>
    )}
  </Popup>
);
