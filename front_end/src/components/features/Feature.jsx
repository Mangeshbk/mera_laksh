import React from "react";

function Feature() {
  const features = [
    { feature: "Lorem Ipsum", color: "#ffbb2c" },
    { feature: "Dolor Sitema", color: " #5578ff" },
    { feature: "Magni Dolores", color: "#e80368" },
    { feature: "Nemo Enim", color: "#e361ff" },
    { feature: "Eiusmod Tempor", color: "#47aeff" },
    { feature: "Midela Teren", color: "#ffa76e" },
    { feature: "Pira Neve", color: "#11dbcf" },
    { feature: "Dirada Pack", color: "#4233ff" },
  ];
  return (
    <>
      <section id="features" className="features">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Features</h2>
            <p>Our Features</p>
          </div>

          <div className="row" data-aos="fade-left">
            {/* {features.map((el, ind) => (
              <div className="col-lg-3 col-md-4 ">
                <div
                  className="icon-box"
                  data-aos="zoom-in"
                  data-aos-delay={ind + 1 * 50}
                >
                  <i className="ri-store-line" style={{ color: "#ffbb2c" }}></i>
                  <h3>
                    <a href="">{el.feature}</a>
                  </h3>
                </div>
              </div>
            ))} */}
            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div className="icon-box" data-aos="zoom-in" data-aos-delay="50">
                <i className="ri-store-line" style={{ color: "#ffbb2c" }}></i>
                <h3>
                  <a href="">Lorem Ipsum</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div className="icon-box" data-aos="zoom-in" data-aos-delay="100">
                <i
                  className="ri-bar-chart-box-line"
                  style={{ color: " #5578ff" }}
                ></i>
                <h3>
                  <a href="">Dolor Sitema</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div className="icon-box" data-aos="zoom-in" data-aos-delay="150">
                <i
                  className="ri-calendar-todo-line"
                  style={{ color: "#e80368" }}
                ></i>
                <h3>
                  <a href="">Dolor Sitema</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
              <div className="icon-box" data-aos="zoom-in" data-aos-delay="200">
                <i
                  className="ri-paint-brush-line"
                  style={{ color: "#e361ff" }}
                ></i>
                <h3>
                  <a href="">Magni Dolores</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box" data-aos="zoom-in" data-aos-delay="250">
                <i
                  className="ri-database-2-line"
                  style={{ color: "#47aeff" }}
                ></i>
                <h3>
                  <a href="">Nemo Enim</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box" data-aos="zoom-in" data-aos-delay="300">
                <i
                  className="ri-gradienter-line"
                  style={{ color: "#ffa76e" }}
                ></i>
                <h3>
                  <a href="">Eiusmod Tempor</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box" data-aos="zoom-in" data-aos-delay="350">
                <i
                  className="ri-file-list-3-line"
                  style={{ color: "#11dbcf" }}
                ></i>
                <h3>
                  <a href="">Midela Teren</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box" data-aos="zoom-in" data-aos-delay="400">
                <i
                  className="ri-price-tag-2-line"
                  style={{ color: "#4233ff" }}
                ></i>
                <h3>
                  <a href="">Pira Neve</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Feature;
