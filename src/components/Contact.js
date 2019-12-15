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
          ></a>
          <a
            href="https://www.linkedin.com/in/trevor-smith-27621613b/"
            className="fa fa-linkedin"
            target="_blank"
          ></a>
          <a className="fa fa-question-circle-o" target="_blank"></a>
        </div>
      </div>
    );
  }
}
export default Contact;
