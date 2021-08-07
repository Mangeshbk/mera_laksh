import React from "react";

function Counting() {
  return (
    <>
      {/* <!-- ======= Counts Section ======= --> */}
      <section id="counts" className="counts">
        <div className="container">
          <div className="row" data-aos="fade-up">
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <i className="bi bi-emoji-smile"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="232"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <h3>500+</h3>
                <p>Happy Students</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
              <div className="count-box">
                <i className="bi bi-journal-richtext"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="521"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <h3>1000+</h3>
                <p>Enquiries</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="bi bi-headset"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="1463"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <h3>24 X 7</h3>
                <p>Hours Of Support</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="bi bi-people"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="15"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <h3>650+</h3>
                <p>Community</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Counts Section --> */}
    </>
  );
}

export default Counting;
