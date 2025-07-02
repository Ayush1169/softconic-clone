import React, { useEffect, useState } from "react";
import styles from "./SplashLoader.module.css";

const SplashLoader = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHide(true), 3000); // 3 sec splash
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.splash} ${hide ? styles.hide : ""}`}>
      <div className={styles.logoWrap}>
        <img src="/assets/img/EVDT-LOGO.png" alt="Logo" className={styles.logo} />
        <h1 className={styles.text}>Empowering Visions</h1>
      </div>
    </div>
  );
};

export default SplashLoader;
