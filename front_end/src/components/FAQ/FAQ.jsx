import React from "react";

function FAQ() {
  return (
    <>
      {/* <!-- ======= F.A.Q Section ======= --> */}
      <section id="faq" className="faq section-bg">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>F.A.Q</h2>
            <p>Frequently Asked Questions</p>
          </div>

          <div className="faq-list">
            <ul>
              <li data-aos="fade-up">
                <i className="bx bx-help-circle icon-help"></i>{" "}
                <a
                  data-bs-toggle="collapse"
                  className="collapse"
                  data-bs-target="#faq-list-1"
                >
                  Non consectetur a erat nam at lectus urna duis?{" "}
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </a>
                <div
                  id="faq-list-1"
                  className="collapse show"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                    volutpat lacus laoreet non curabitur gravida. Venenatis
                    lectus magna fringilla urna porttitor rhoncus dolor purus
                    non.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="100">
                <i className="bx bx-help-circle icon-help"></i>{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-2"
                  className="collapsed"
                >
                  Feugiat scelerisque varius morbi enim nunc?{" "}
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </a>
                <div
                  id="faq-list-2"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    Dolor sit amet consectetur adipiscing elit pellentesque
                    habitant morbi. Id interdum velit laoreet id donec ultrices.
                    Fringilla phasellus faucibus scelerisque eleifend donec
                    pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                    ultrices eros in cursus turpis massa tincidunt dui.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="200">
                <i className="bx bx-help-circle icon-help"></i>{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-3"
                  className="collapsed"
                >
                  Dolor sit amet consectetur adipiscing elit?{" "}
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </a>
                <div
                  id="faq-list-3"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                    sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                    nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                    pellentesque eu tincidunt. Lectus urna duis convallis
                    convallis tellus. Urna molestie at elementum eu facilisis
                    sed odio morbi quis
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="300">
                <i className="bx bx-help-circle icon-help"></i>{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-4"
                  className="collapsed"
                >
                  Tempus quam pellentesque nec nam aliquam sem et tortor
                  consequat? <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </a>
                <div
                  id="faq-list-4"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    Molestie a iaculis at erat pellentesque adipiscing commodo.
                    Dignissim suspendisse in est ante in. Nunc vel risus commodo
                    viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                    bibendum est. Purus gravida quis blandit turpis cursus in.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="400">
                <i className="bx bx-help-circle icon-help"></i>{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-5"
                  className="collapsed"
                >
                  Tortor vitae purus faucibus ornare. Varius vel pharetra vel
                  turpis nunc eget lorem dolor?{" "}
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </a>
                <div
                  id="faq-list-5"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    Laoreet sit amet cursus sit amet dictum sit amet justo.
                    Mauris vitae ultricies leo integer malesuada nunc vel.
                    Tincidunt eget nullam non nisi est sit amet. Turpis nunc
                    eget lorem dolor sed. Ut venenatis tellus in metus vulputate
                    eu scelerisque.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- End F.A.Q Section --> */}
    </>
  );
}

export default FAQ;
