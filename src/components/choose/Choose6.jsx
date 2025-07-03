// 📁 File: src/components/Choose6.js

import Link from "next/link";
import React from "react";
import HomePage from "../../data/content";
import { motion } from "framer-motion"; // ✅ Framer Motion import added

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
          {/* ✅ Replaced WOW animation with Framer Motion */}
          <motion.div
            className="choose-top"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="row">
              <motion.div
                className="col-lg-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="choose-title">
                  <span>{HomePage.whyChooseUs.title}</span>
                  <h2>{HomePage.whyChooseUs.subTitle}</h2>
                </div>
              </motion.div>
              <motion.div
                className="col-lg-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="choose-right-img magnetic-item">
                  <img
                    className="img-fluid"
                    src="/assets/img/homePage/whychooseus.png"
                    alt=""
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div className="choose-btm">
            <div className="row  g-lg-4 gy-5">
              <motion.div
                className="col-lg-7"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="choose-left-content">
                  <div className="vectors">
                    <img
                      className="choose-vec-top-r"
                      src="/assets/img/home-6/choose-vec-top-r.svg"
                      alt=""
                    />
                    <img
                      className="choose-vec-btm-l"
                      src="/assets/img/home-6/choose-vec-btm-l.svg"
                      alt=""
                    />
                  </div>
                  <div className="icon">
                    <img src="/assets/img/EVDT-LOGO.png" alt="" />
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
              </motion.div>

              <motion.div
                className="col-lg-5"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="choose-feature">
                  <ul>
                    {HomePage.stats.map((stat, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 * index }}
                        viewport={{ once: true }}
                      >
                        <div className="single-feature">
                          <div className="progress">
                            <h3>
                              <span className="counter">{stat.percentage}</span>%
                            </h3>
                          </div>
                          <div className="content">
                            <h4>{stat.label}</h4>
                            <p>{stat.description}</p>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choose6;
