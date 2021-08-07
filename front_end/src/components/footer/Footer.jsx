import React from "react";
import { useHistory } from "react-router-dom";

export default function Footer() {
  const history = useHistory();
  return (
    <>
      {/* <!-- ======= Footer ======= --> */}
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="footer-info">
                  <h3
                    onClick={() => history.push("/")}
                    style={{ cursor: "pointer" }}
                  >
                    मेरा लक्ष्य
                  </h3>
                  <p className="pb-3">
                    <em>
                      Mera Laksh is a platform which provides educational
                      guidence for students to achive their goals.
                    </em>
                  </p>
                </div>
              </div>

              <div
                style={{ width: "auto", margin: "0 50px" }}
                className="col-lg-2 col-md-6 footer-links"
              >
                <h4>Follow Us For More Updates</h4>
                <div
                  style={{ marginLeft: "40px" }}
                  className="social-links mt-3"
                >
                  <a href="#" className="twitter">
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a href="#" className="facebook">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="#" className="instagram">
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a href="#" className="linkedin">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Our Community</h4>
                <p>To join our community please subscribe us with your email</p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Mera Laksh</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>
      {/* <!-- End Footer --> */}
    </>
  );
}
