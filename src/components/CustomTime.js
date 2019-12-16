import React, { Component } from "react";
import Popup from "reactjs-popup";
import "../styles/Modal.scss";

let runBtn, resetBtn, customIn, close;

class CustomTime extends Component {
  constructor(props) {
    super(props);
  }
  update(input) {
    if (input.value) {
      this.props.customDate(HHMMtoDate(input.value));
    }
  }
  componentDidMount() {
    runBtn = document.getElementById("runBtn");
    resetBtn = document.getElementById("resetBtn");
  }
  render() {
    return (
      <Popup
        trigger={
          <button className="button transparent" id="CustomTime"></button>
        }
        modal
      >
        {close => (
          <div className="modal">
            <a className="close" onClick={close}>
              &times;
            </a>
            <div className="content">
              <input type="time" id="customIn" />
              <button
                id="runBtn"
                onClick={() => {
                  customIn = document.getElementById("customIn");
                  close = document.getElementsByClassName("close")[0];
                  close.click();
                  this.update(customIn);
                }}
              >
                run
              </button>
              <button id="resetBtn">reset</button>
            </div>
          </div>
        )}
      </Popup>
    );
  }
}
export default CustomTime;
