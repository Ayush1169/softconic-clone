import Home3Team from "../components/Team/Home3Team";
import Banner3 from "../components/bannner/Banner3";
import Home3Blog from "../components/blog/Home3Blog";
import Choose6 from "../components/choose/Choose6";
import Home3Contact from "../components/contact/Home3Contact";
import Feature4 from "../components/features/Feature4";
import Footer3 from "../components/footer/Footer3";
import Header3 from "../components/header/Header3";
import Partner3 from "../components/partner/Partner3";
import Service5 from "../components/services/Service5";
import SuccessStory3 from "../components/successStorys/SuccessStory3";
import Testimonial3 from "../components/testimonial/Testimonial3";
import useBodyClass from "../hooks/useBodyClass";
import Head from "next/head";

export default function Home() {
  useBodyClass("home-dark2");

  return (
    <>
      <Head>
        <title>
          EVD Technology
        </title>
        <meta name="keywords" content="EVD Technology, EVD Technology In Chhattisgarh, EVD Technology In Korba, EVD Technology In Raipur, Software Company, Software Company In Chhattisgarh, Software Company In Korba, Software Company In Raipur, SEO Services, SEO Services In Chhattisgarh, SEO Services In Korba, SEO Services In Raipur, Web Developer, Web Developer In Chhattisgarh, Web Developer In Korba, Web Developer In Raipur, Web Designer, Web Designer In Chhattisgarh, Web Designer In Korba, Web Designer In Raipur, Digital Marketing Agency, Digital Marketing Company, Digital Media Marketing Company, Digital Media Marketing Agency, Website Development Company, Website Development, Web Development, Web Development Company, Mobile App Marketing Agency, Mobile App Development, Mobile App Development Company, Mobile App Development Agency, Android App Development Company, Android App Development Agency, SEO Company, SEO Company Near Me, Software Company Near Me, IT Companies Near Me, Software Development Company, Top IT Companies In Chhattisgarh, Top IT Companies In Korba, Top IT Companies In Raipur, IT Companies In Chhattisgarh, IT Companies In Korba, IT Companies In Raipur, AI/ML, SaaS Development, Staff Augmentation, AI/ML In Chhattisgarh, SaaS Development In Chhattisgarh, Staff Augmentation In Chhattisgarh, AI/ML In Korba, SaaS Development In Korba, Staff Augmentation In Korba, AI/ML In Raipur, SaaS Development In Raipur, Staff Augmentation In Raipur, AI/ML In India, SaaS Development In India, Staff Augmentation In India"></meta>
        <meta name="description" content="EVD Technology delivers innovative software and web development services. From creating custom software solutions to developing high-performance websites, we provide end-to-end digital solutions tailored to your business needs."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/img/fevicon.png" />
      </Head>

      <div className="p-96">
      <Header3 />
      <Banner3 />
      </div>
      <Partner3 />
      {/* <Solution3 /> */}
      <Service5 />
      <Feature4 />
      <Choose6 />
      <Testimonial3 />
      <SuccessStory3 />
      <Home3Blog />
      {/* <PricingPlan3 /> */}
      <Home3Contact />
      <Home3Team />
      {/* <Solution3 /> */}
      <Footer3 />
    </>
  );
}
