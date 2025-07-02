import Link from "next/link";
import React from "react";
import HomePage from "../../data/content";

function Choose6() {
  return (
    <div
      className="home6-choose-section sec-mar"
      style={{
        backgroundImage: "url('/assets/img/Ellipse.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="choose-top">
            <div
              className="row"
              style={{
                backgroundImage: "url('/assets/img/Ellipse.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div
                className="col-lg-6 wow animate__animated animate__fadeInLeft"
                data-wow-delay="0.2s"
              >
                <div className="choose-title">
                  <span>{HomePage.whyChooseUs.title}</span>
                  <h2>{HomePage.whyChooseUs.subTitle}</h2>
                </div>
              </div>
              <div
                className="col-lg-6 wow animate__animated animate__zoomIn"
                data-wow-delay="0.4s"
              >
                <div className="choose-right-img magnetic-item">
                  <img
                    className="img-fluid"
                    src="assets/img/homePage/whychooseus.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="choose-btm">
            <div className="row g-lg-4 gy-5">
              <div
                className="col-lg-7 wow animate__animated animate__fadeInUp"
                data-wow-delay="0.6s"
              >
                <div className="choose-left-content">
                  <div className="vectors">
                    <img
                      className="choose-vec-top-r"
                      src="assets/img/home-6/choose-vec-top-r.svg"
                      alt=""
                    />
                    <img
                      className="choose-vec-btm-l"
                      src="assets/img/home-6/choose-vec-btm-l.svg"
                      alt=""
                    />
                  </div>
                  <div className="icon">
                    <img src="assets/img/EVDT-LOGO.png" alt="" />
                  </div>
                  <h4>
                    Leading Creative IT Agency and Solutions Provider <br />
                    <span>Since 2015.</span>
                  </h4>
                  <p>{HomePage.whyChooseUs.description}</p>
                  <div className="sl">
                    <h2>#1</h2>
                  </div>
                  <div className="about-btn">
                    <Link legacyBehavior href="/about">
                      <a>
                        <svg
                          width={7}
                          height={7}
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                        </svg>
                        About More
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="choose-feature">
                  <ul>
                    {HomePage.stats.map((item, index) => (
                      <li key={index}>
                        <div
                          className={`single-feature wow animate__animated animate__fadeInUp`}
                          data-wow-delay={`${0.8 + index * 0.2}s`}
                          data-wow-duration="1.2s"
                        >
                          <div className="progress">
                            <h3>
                              <span className="counter">{item.percentage}</span>%
                            </h3>
                          </div>
                          <div className="content">
                            <h4>{item.label}</h4>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choose6;
