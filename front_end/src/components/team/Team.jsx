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
              <div className="member" data-aos="zoom-in" data-aos-delay="500">
                <div className="pic">
                  <img
                    width="300px"
                    height="300px"
                    src={
                      process.env.PUBLIC_URL + "/assets/img/team/team-1.jpeg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>Mangesh Landge</h4>
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
              <div className="member" data-aos="zoom-in" data-aos-delay="600">
                <div className="pic">
                  <img
                    width="300px"
                    height="300px"
                    src={process.env.PUBLIC_URL + "/assets/img/team/team-2.png"}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>Afzal Ahmad</h4>
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
              <div className="member" data-aos="zoom-in" data-aos-delay="700">
                <div className="pic">
                  <img
                    width="277px"
                    height="277px"
                    src={
                      process.env.PUBLIC_URL + "/assets/img/team/team-3.jpeg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>Satwik Nayak</h4>
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
                    width="300px"
                    height="300px"
                    src={process.env.PUBLIC_URL + "/assets/img/team/team-4.jpg"}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>Uday Kumar</h4>
                  <span>Vice-President</span>
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
