import React, { Component } from "react";
import "../styles/Contact.scss";
class Contact extends Component {
  render() {
    return (
      <div className="bottom">
        <div>
          <a
            href="https://github.com/Subtora"
            className="fa fa-github"
            target="_blank"
            rel="noreferrer"
          >
            <span
              style={{
                position: "absolute",
                opacity: "0",
                pointerEvents: "none"
              }}
            >
              github
            </span>
          </a>
          <a
            href="https://trevorjs.dev/"
            className="fa fa-home"
            target="_blank"
            rel="noreferrer"
          >
            <span
              style={{
                position: "absolute",
                opacity: "0",
                pointerEvents: "none"
              }}
            >
              home
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/trevor-smith-27621613b/"
            className="fa fa-linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <span
              style={{
                position: "absolute",
                opacity: "0",
                pointerEvents: "none"
              }}
            >
              linkedin
            </span>
          </a>
        </div>
      </div>
    );
  }
}
export default Contact;
