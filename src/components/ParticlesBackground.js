// src/components/ParticlesBackground.js

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#0f0f0f" },
        particles: {
          number: { value: 60 },
          size: { value: 3 },
          color: { value: "#ffffff" },
          move: { enable: true, speed: 1.5 },
          links: {
            enable: true,
            distance: 120,
            color: "#ffffff",
            opacity: 0.3,
            width: 1
          }
        },
        detectRetina: true
      }}
    />
  );
};

export default ParticlesBackground;
