import React from "react";
import "./navigation.css";
import { Link, useHistory } from "react-router-dom";
const Navigation = () => {
  const history = useHistory();
  return (
    <div className="navigation_main_container">
      <div className="navigation-logo" onClick={() => history.push("/")}>
        मेरा लक्ष्य
      </div>
      <div className="navigation-links">
        <Link
          className="navigation-links-options"
          onClick={() => history.push("/")}
        >
          Home
        </Link>
        <Link className="navigation-links-options">About</Link>
        <Link className="navigation-links-options">Features</Link>
        <Link className="navigation-links-options">Gallery</Link>
        <Link className="navigation-links-options">Team</Link>
        <Link className="navigation-links-options">Contact</Link>
        <Link className="navigation-links-options" to="/chat">
          Chat
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
