import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ✅ Removed animate.min.css and wow.min.js
import "../../public/assets/css/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/boxicons.min.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "../../public/assets/css/preloader.css";
import "../../public/assets/css/style2.css";

import SplashLoader from "../components/SplashLoader";
import Preloader from "../components/common/Preloader";
import Chatbot from "../components/chatbot";
import ParticlesBackground from "../components/ParticlesBackground";
import WhatsAppButton from "../components/WhatsAppButton";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    const timer = setTimeout(() => {
      setLoading(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
      {loading ? (
        <>
          <Component {...pageProps} />
          <ToastContainer />
          <Chatbot />
          <WhatsAppButton />
        </>
      ) : (
        <Preloader />
      )}
    </>
);
}
