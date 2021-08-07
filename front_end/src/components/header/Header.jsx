import React from "react";
import { useHistory } from "react-router-dom";
import Wave from "react-wavify";
import styles from "./Header.module.css";
function Header() {
  const history = useHistory();
  return (
    <>
      {/* <!-- ======= Hero Section ======= --> */}
      <section id="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
              <div data-aos="zoom-out">
                <h1>
                  Find Your educational dream with <span>मेरा लक्ष्य</span>
                </h1>
                <h2>
                  Mera Laksh is a platform which provides educational guidence
                  for students to achive their goals.
                </h2>
                <div className="text-center text-lg-start">
                  <a
                    href="#about"
                    className="btn-get-started scrollto"
                    onClick={() => history.push("education_path")}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 order-1 order-lg-2 hero-img"
              data-aos="zoom-out"
              data-aos-delay="300"
            >
              <img
                src={process.env.PUBLIC_URL + "/assets/img/hero-img.png"}
                className="img-fluid animated"
                alt=""
              />
            </div>
          </div>
        </div>

        <svg
          className="hero-waves"
          viewBox="0 24 150 28 "
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="wave-path"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="wave1">
            <use x="50" y="3" fill="rgba(255,255,255, .1)" />
          </g>
          <g className="wave2">
            <use x="50" y="0" fill="rgba(255,255,255, .2)" />
          </g>
          <g className="wave3">
            <use x="50" y="9" fill="#fff" />
          </g>
        </svg>
        <Wave
          fill="#B4161B"
          className={styles.wave_comp}
          paused={false}
          options={{
            height: 30,
            amplitude: 50,
            speed: 0.15,
            points: 3,
          }}
        />
      </section>
      {/* <!-- End Hero --> */}
    </>
  );
}

export default Header;
