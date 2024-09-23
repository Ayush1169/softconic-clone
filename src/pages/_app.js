import { useEffect, useState } from "react";
import useMagneticHover from "../hooks/useMagneticHover";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../../public/assets/css/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/boxicons.min.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "../../public/assets/css/preloader.css";
import "../../public/assets/css/animate.min.css";
import "../../public/assets/css/style2.css";
import Preloader from "../components/common/Preloader";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
    }, 500);
  }, []);
  useMagneticHover();
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
      {loading ? (
        <>
          <Component {...pageProps} />
          <ToastContainer />
          <Script id="wow" src="/js/wow.min.js"></Script>
          <Script
            id="initWow"
            strategy="lazyOnload"
          >{`new WOW().init();`}</Script>
        </>
      ) : (
        <Preloader />
      )}
    </>
  );
}
