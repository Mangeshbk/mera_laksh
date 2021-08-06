import React from "react";

function Team() {
  return (
    <>
      {/* <!-- ======= Team Section ======= --> */}
      <section id="team" className="team">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Team</h2>
            <p>Our Great Team</p>
          </div>

          <div className="row" data-aos="fade-left">
            <div className="col-lg-3 col-md-6">
              <div className="member" data-aos="zoom-in" data-aos-delay="100">
                <div className="pic">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/img/team/team-1.jpg"}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
              <div className="member" data-aos="zoom-in" data-aos-delay="200">
                <div className="pic">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/img/team/team-2.jpg"}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>Sarah Jhonson</h4>
                  <span>Product Manager</span>
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="member" data-aos="zoom-in" data-aos-delay="300">
                <div className="pic">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/img/team/team-3.jpg"}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="member" data-aos="zoom-in" data-aos-delay="400">
                <div className="pic">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/img/team/team-4.jpg"}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Team Section --> */}
    </>
  );
}

export default Team;
