import React, { Component } from "react";
import "../styles/Contact.scss";

class Contact extends Component {
  render() {
    const contactSize = 30;
    const contactPos = [0, 65, 100];
    return (
      <footer className="contact">
        <img src="../images/contact.png" useMap="#linkmap" />
        <map name="linkmap">
          <area
            shape="square"
            coords={contactPos[0] + ", 0 ," + contactSize + "," + contactSize}
            href="https://stackoverflow.com/users/8026620/subtora?tab=profile"
            alt="stackoverflow.com/subtora"
            target="_blank"
          />
          <area
            shape="square"
            coords={contactPos[1] + ", 0 , " + contactSize + "," + contactSize}
            href="https://github.com/subtora"
            alt="github.com/subtora"
            target="_blank"
          />
          <area
            shape="square"
            coords={contactPos[2] + ", 0 ," + contactSize + "," + contactSize}
            href="https://www.linkedin.com/in/trevor-smith-27621613b/"
            alt="linkedin.com/Trevor-Smith"
            target="_blank"
          />
        </map>
      </footer>
    );
  }
}
export default Contact;
