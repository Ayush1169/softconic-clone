// 📁 src/components/ParticlesBackground.js

import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main); // ✅ Load the full tsParticles package
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: { value: 50 },
          size: { value: 3 },
          color: { value: "#ffffff" },
          move: { enable: true, speed: 1.5 },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
