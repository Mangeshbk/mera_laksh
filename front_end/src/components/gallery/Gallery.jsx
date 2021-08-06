import React from "react";

function Gallery() {
  return (
    <>
      {/* <!-- ======= Gallery Section ======= --> */}
      <section id="gallery" className="gallery">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Gallery</h2>
            <p>Check our Gallery</p>
          </div>

          <div className="row no-gutters" data-aos="fade-left">
            <div className="col-lg-3 col-md-4">
              <div
                className="gallery-item"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <a
                  href="assets/img/gallery/gallery-1.jpg"
                  className="gallery-lightbox"
                >
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/img/gallery/gallery-1.jpg"
                    }
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div
                className="gallery-item"
                data-aos="zoom-in"
                data-aos-delay="150"
              >
                <a
                  href="assets/img/gallery/gallery-2.jpg"
                  className="gallery-lightbox"
                >
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/img/gallery/gallery-2.jpg"
                    }
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div
                className="gallery-item"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <a
                  href="assets/img/gallery/gallery-3.jpg"
                  className="gallery-lightbox"
                >
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/img/gallery/gallery-3.jpg"
                    }
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div
                className="gallery-item"
                data-aos="zoom-in"
                data-aos-delay="250"
              >
                <a
                  href="assets/img/gallery/gallery-4.jpg"
                  className="gallery-lightbox"
                >
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/img/gallery/gallery-4.jpg"
                    }
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div
                className="gallery-item"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <a
                  href="assets/img/gallery/gallery-5.jpg"
                  className="gallery-lightbox"
                >
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/img/gallery/gallery-5.jpg"
                    }
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div
                className="gallery-item"
                data-aos="zoom-in"
                data-aos-delay="350"
              >
                <a
                  href="assets/img/gallery/gallery-6.jpg"
                  className="gallery-lightbox"
                >
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/img/gallery/gallery-6.jpg"
                    }
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div
                className="gallery-item"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <a
                  href="assets/img/gallery/gallery-7.jpg"
                  className="gallery-lightbox"
                >
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/img/gallery/gallery-7.jpg"
                    }
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div
                className="gallery-item"
                data-aos="zoom-in"
                data-aos-delay="450"
              >
                <a
                  href="assets/img/gallery/gallery-8.jpg"
                  className="gallery-lightbox"
                >
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/img/gallery/gallery-8.jpg"
                    }
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Gallery Section --> */}
    </>
  );
}

export default Gallery;
