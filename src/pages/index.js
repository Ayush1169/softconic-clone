// 📁 pages/index.js

import Head from "next/head";
import useBodyClass from "../hooks/useBodyClass";

import Header from "../components/header/Header";
import Banner3 from "../components/bannner/Banner3";
import Hero from "../components/evd-academy/Hero"; // ✅ Hero import
import Partner3 from "../components/partner/Partner3";
import Service5 from "../components/services/Service5";
import Feature4 from "../components/features/Feature4";
import Technology from "../components/partner/Technology";
import Choose6 from "../components/choose/Choose6";
import Testimonial3 from "../components/testimonial/Testimonial3";
import SuccessStory3 from "../components/successStorys/SuccessStory3";
import Home3Blog from "../components/blog/Home3Blog";
import Home3Contact from "../components/contact/Home3Contact";
import Home3Team from "../components/Team/Home3Team";
import Footer3 from "../components/footer/Footer3";

export default function Home() {
  useBodyClass("home-dark2");

  return (
    <>
      <Head>
        <title>Home | EVD Technology</title>
        <meta
          name="description"
          content="EVD Technology delivers innovative software and web development services. From creating custom software solutions to developing high-performance websites, we provide end-to-end digital solutions tailored to your business needs."
        />
        <meta
          name="keywords"
          content="EVD Technology, Web Development, Software Company, SEO Services, Mobile App, AI, SaaS, Digital Marketing"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/img/fevicon.jpg" />
      </Head>

      <div className="p-96">
        <Header />
        {/* <Header3 /> */}
        <Banner3 />
      </div>

      {/* ✅ Hero Section with Particle Background */}
      <Hero />

      <Partner3 />
      <Service5 />
      <Feature4 />
      <Technology />
      <Choose6 />
      <Testimonial3 />
      <SuccessStory3 />
      <Home3Blog />
      <Home3Contact />
      <Home3Team showAll={false} />
      <Footer3 />
    </>
);
}
