import React from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "../ParticlesBackground"; // Make sure the path is correct

const Hero = () => {
  return (
    <section
      className="hero-section position-relative overflow-hidden"
      style={{
        backgroundColor: "#0f0f0f",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        zIndex: 0,
      }}
    >
      {/* ✅ Particle background */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      >
        <ParticlesBackground />
      </div>

      {/* ✅ Hero content */}
      <div
        className="container position-relative z-1"
        style={{ zIndex: 1, textAlign: "center" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="display-4 fw-bold"
        >
          Empowering Your Business
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lead mt-3"
        >
          Scalable tech solutions crafted for growth
        </motion.p>

        {/* You can add CTA buttons below */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-4"
        >
          <button className="btn btn-primary">Get Started</button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;