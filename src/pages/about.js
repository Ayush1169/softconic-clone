import Home3Team from "../components/Team/Home3Team";
import About3 from "../components/about/About3";
import Home3Blog from "../components/blog/Home3Blog";
import Choose6 from "../components/choose/Choose6";
import Breadcrumb from "../components/common/Breadcrumb";
import Home3Contact from "../components/contact/Home3Contact";
import Feature4 from "../components/features/Feature4";
import Layout from "../components/layout/Layout";
import Partnar4 from "../components/partner/Partnar4";
import Testimonial3 from "../components/testimonial/Testimonial3";
import Head from "next/head";

function AboutPage() {
  return (
   <>
    <Head>
        <title>
          EVD Technology
        </title>
        <link rel="icon" href="/assets/img/fevicon.png" />
      </Head>
    <Layout>
      <Breadcrumb
        pageList="About"
        title="About us"
        pageName="ABOUT"
      />
       <Feature4 />
       <Choose6 />
      <About3 />
      
     
      <Partnar4 />
      <Testimonial3 />
      <Home3Contact />
      <Home3Team />
      
      {/* <Home3Blog /> */}
    </Layout>
    </>
  );
}

export default AboutPage;
