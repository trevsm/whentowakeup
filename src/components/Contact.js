import React, { Component } from "react";
import "../styles/Contact.scss";
class Contact extends Component {
  render() {
    return (
      <footer className="bottom">
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
        <a
          href="https://stackoverflow.com/users/8026620/subtora"
          className="fa fa-stack-overflow"
          target="_blank"
        ></a>
        <a
          href="https://www.youtube.com/channel/UCbkqwGP9qHvKWp3iCEfLkXA"
          className="fa fa-youtube"
          target="_blank"
        ></a>
        <a
          href="https://www.instagram.com/trev_sm/"
          className="fa fa-instagram"
          target="_blank"
        ></a>
      </footer>
    );
  }
}
export default Contact;
