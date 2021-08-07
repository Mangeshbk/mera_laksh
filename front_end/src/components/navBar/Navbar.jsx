import React, { useState } from "react";
import   './navBar.css'
function Navbar() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
    if(window.scrollY >= 80){
      setColorchange(true);
    }
    else{
      setColorchange(false);
    }
 };
 window.addEventListener('scroll', changeNavbarColor);

  return (
    <>
      <header
        id="header"

        className={colorChange ? "fixed-top d-flex align-items-center header-chnageBg": "fixed-top d-flex align-items-center header-transparent"}
        // style={{ background: "#0D13A1" }}

      >
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo">
            <h1>
              <a href="index.html">
                <span>मेरा लक्ष्य</span>
              </a>
            </h1>
            {/* <!-- Uncomment below if you prefer to use an image logo --> */}
            {/* <!-- <a href="index.html"><img src="./assets/img/logo.png" alt="" className="img-fluid"></a>--> */}
          </div>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#features">
                  Features
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#gallery">
                  Gallery
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#team">
                  Team
                </a>
              </li>
              {/* <li className="dropdown">
                <a href="#">
                  <span>Drop Down</span> <i className="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Drop Down 1</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Deep Drop Down</span>{" "}
                      <i className="bi bi-chevron-right"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 4</a>
                  </li>
                </ul>
              </li> */}
              <li>
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
