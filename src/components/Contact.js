import React, { Component } from "react";
import * as urls from "@trevsm/urls";
import "../styles/Contact.scss";

class Contact extends Component {
  render() {
    return (
      <div className="bottom">
        <div>
          <a
            href={urls.github.url}
            className="fa fa-github"
            target="_blank"
            rel="noreferrer"
          >
            <span
              style={{
                position: "absolute",
                opacity: "0",
                pointerEvents: "none",
              }}
            >
              github
            </span>
          </a>
          <a
            href={urls.github.projects.portfolio.live}
            className="fa fa-home"
            target="_blank"
            rel="noreferrer"
          >
            <span
              style={{
                position: "absolute",
                opacity: "0",
                pointerEvents: "none",
              }}
            >
              home
            </span>
          </a>
          <a
            href={urls.social.linkedin.url}
            className="fa fa-linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <span
              style={{
                position: "absolute",
                opacity: "0",
                pointerEvents: "none",
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
