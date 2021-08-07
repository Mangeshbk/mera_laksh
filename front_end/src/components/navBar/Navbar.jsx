import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./navBar.css";
function Navbar() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const history = useHistory();

  return (
    <>
      <header
        id="header"
        className={
          colorChange
            ? "fixed-top d-flex align-items-center header-chnageBg"
            : "fixed-top d-flex align-items-center header-transparent"
        }
        style={{ background: "#0D13A1" }}
      >
        <div className="container d-flex align-items-center justify-content-between">
          <div
            className="logo"
            onClick={() => history.push("/")}
            style={{ cursor: "pointer" }}
          >
            <h1>
              <a href>
                <span>मेरा लक्ष्य</span>
              </a>
            </h1>
            {/* <!-- Uncomment below if you prefer to use an image logo --> */}
            {/* <!-- <a href="index.html"><img src="./assets/img/logo.png" alt="" className="img-fluid"></a>--> */}
          </div>

          <nav id="navbar" className="navbar">
            <ul>
              <li onClick={() => history.push("/")}>
                <a className="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li onClick={() => history.push("/#about")}>
                <a className="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li onClick={() => history.push("/#features")}>
                <a className="nav-link scrollto" href="#features">
                  Features
                </a>
              </li>
              <li onClick={() => history.push("/#gallery")}>
                <a className="nav-link scrollto" href="#gallery">
                  Gallery
                </a>
              </li>
              <li onClick={() => history.push("/#team")}>
                <a className="nav-link scrollto" href="#team">
                  Team
                </a>
              </li>
              <li onClick={() => history.push("/#contact")}>
                <a className="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          {/* <!-- .navbar --> */}
        </div>
      </header>
      {/* <!-- End Header --> */}
    </>
  );
}

export default Navbar;
