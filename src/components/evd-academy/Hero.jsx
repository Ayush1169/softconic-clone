import React from "react";
import ParticlesBackground from "../ParticlesBackground"; // ✅ Corrected path if it's in src/components

const Hero = () => {
  return (
    <div className="hero position-relative overflow-hidden">
      <ParticlesBackground /> {/* ✅ Background Animation */}

      <div className="container position-relative z-1">
        <div className="row justify-content-center mb-50">
          <div className="col-lg-10">
            <div className='section-title-hero text-center text-white'>
              <h1>
                EVD (EdTech Vision for Digitalization) Custom Design and
                Development Software Company
              </h1>
              <p>
                In the dynamic landscape of education, the synergy between
                technology and education has birthed transformative solutions.
                EVD, standing for EdTech Vision for Digitalization, emerges as
                a beacon of innovation through its Custom Design and
                Development Platform, curated by a visionary software company
                name as EVD Technology
              </p>

              {/* <div className="button-hero-one">
                <button className="button-hero">View More</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
