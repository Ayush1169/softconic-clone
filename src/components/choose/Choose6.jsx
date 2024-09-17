import Link from "next/link";
import React from "react";
import HomePage from "../../data/content";

function Choose6() {
  return (
    <div className="home6-choose-section sec-mar">
      <div className="container">
        <div className="row">
          <div className="choose-top">
            <div className="row">
              <div
                className="col-lg-6 wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="choose-title">
                  <span>{HomePage.whyChooseUs.title}</span>
                  <h2>{HomePage.whyChooseUs.subTitle}</h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="choose-right-img magnetic-item">
                  <img
                    className="img-fluid"
                    src="assets/img/home-6/choose-img-1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="choose-btm">
            <div className="row  g-lg-4 gy-5">
              <div className="col-lg-7">
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
                  <p>
                    {HomePage.whyChooseUs.description}
                  </p>
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
                    <li>
                      <div className="single-feature">
                        <div className="progress">
                          <h3>
                            <span className="counter">{HomePage.stats[0].percentage}</span>%
                          </h3>
                        </div>
                        <div className="content">
                          <h4>{HomePage.stats[0].label}</h4>
                          <p>
                          {HomePage.stats[0].description}
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-feature">
                        <div className="progress">
                          <h3>
                            <span className="counter">{HomePage.stats[1].percentage}</span>%
                          </h3>
                        </div>
                        <div className="content">
                          <h4>{HomePage.stats[1].label}</h4>
                          <p>
                          {HomePage.stats[1].description}
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-feature">
                        <div className="progress">
                          <h3>
                            <span className="counter">{HomePage.stats[2].percentage}</span>%
                          </h3>
                        </div>
                        <div className="content">
                          <h4>{HomePage.stats[2].label}</h4>
                          <p>
                          {HomePage.stats[2].description}
                          </p>
                        </div>
                      </div>
                    </li>
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
