import React from "react";
import { useHistory } from "react-router-dom";
import "./navBar.css";
function Navbar() {
  // const [colorChange, setColorchange] = useState(false);
  // const changeNavbarColor = () => {
  //   if (window.scrollY >= 80) {
  //     setColorchange(true);
  //   } else {
  //     setColorchange(false);
  //   }
  // };
  // window.addEventListener("scroll", changeNavbarColor);

  const history = useHistory();

  return (
    <>
      <header
        id="header"
        className={"fixed-top d-flex align-items-center header-transparent"}
        style={{ background: "#0D13A1" }}
      >
        <div className="container d-flex align-items-center justify-content-between">
          <div
            className="logo"
            onClick={() => history.push("/")}
            style={{ cursor: "pointer" }}
          >
            <h1>
              <link href>
                <span>मेरा लक्ष्य</span>
              </link>
            </h1>
            {/* <!-- Uncomment below if you prefer to use an image logo --> */}
            {/* <!-- <a href="index.html"><img src="./assets/img/logo.png" alt="" className="img-fluid"></a>--> */}
          </div>

          <nav id="navbar" className="navbar">
            <ul>
              <li onClick={() => history.push("/")}>
                <link className="nav-link scrollto active" href="#hero">
                  Home
                </link>
              </li>
              <li onClick={() => history.push("/#about")}>
                <link className="nav-link scrollto" href="#about">
                  About
                </link>
              </li>
              <li onClick={() => history.push("/#features")}>
                <link className="nav-link scrollto" href="#features">
                  Features
                </link>
              </li>
              <li onClick={() => history.push("/#gallery")}>
                <link className="nav-link scrollto" href="#gallery">
                  Gallery
                </link>
              </li>
              <li onClick={() => history.push("/#team")}>
                <link className="nav-link scrollto" href="#team">
                  Team
                </link>
              </li>
              <li onClick={() => history.push("/#contact")}>
                <link className="nav-link scrollto" href="#contact">
                  Contact
                </link>
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
