import React, { Component } from "react";
import "../styles/Contact.scss";
class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const areas = [0, 1, 2];
    const linkSize = 30;
    const contactPos = [0, 65, 100];
    const links = [
      "https://stackoverflow.com/users/8026620/subtora?tab=profile",
      "https://github.com/subtora",
      "https://www.linkedin.com/in/trevor-smith-27621613b/"
    ];
    return (
      <footer className="contact">
        <img src="../images/contact.png" useMap="#linkmap" />
        <map name="linkmap">
          {areas.map(item => (
            <area
              shape="square"
              coords={`${contactPos[item]},0,${linkSize},${linkSize}`}
              href={links[item]}
              target="_blank"
              key={item}
            />
          ))}
        </map>
      </footer>
    );
  }
}
export default Contact;
