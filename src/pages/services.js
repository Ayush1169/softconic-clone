import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/layout/Layout";
import Link from "next/link";
import React from "react";
import { 
  RiComputerLine, 
  RiSmartphoneLine, 
  RiCodeSSlashLine, 
  RiBarChartBoxLine, 
  RiPaletteLine, 
  RiDatabase2Line, 
  RiCloudLine, 
  RiTeamLine, 
  RiRobot2Line 
} from "react-icons/ri";

function Service4Page() {
  const solutions = [
    {
      title: "Web Development",
      description: "Building high-performance, responsive websites and web applications to deliver seamless user experiences.",
      link: "/service/web-development",
      delay: "200ms",
      icon: RiComputerLine,
      image: "assets/img/home-6/home6-solution-bg2.png"
    },
    {
      title: "Mobile App Development",
      description: "Developing feature-rich mobile apps for iOS and Android platforms, tailored to your business needs.",
      link: "/service/mobile-app-development",
      delay: "300ms",
      icon: RiSmartphoneLine,
      image: "assets/img/home-6/home6-solution-bg2.png"
    },
    {
      title: "Software Development",
      description: "Creating custom software solutions designed to optimize business operations and improve efficiency.",
      link: "/service/software-development",
      delay: "400ms",
      icon: RiCodeSSlashLine,
      image: "assets/img/home-6/home6-solution-bg2.png"
    },
    {
      title: "Digital Marketing",
      description: "Leveraging digital marketing strategies to drive brand awareness, traffic, and conversions across digital channels.",
      link: "/service/digital-marketing",
      delay: "500ms",
      icon: RiBarChartBoxLine,
      image: "assets/img/home-6/home6-solution-bg2.png"
    },
    {
      title: "UI/UX Designing",
      description: "Designing intuitive and engaging user interfaces to enhance user experience and interaction with digital products.",
      link: "/service/ui-ux-designing",
      delay: "700ms",
      icon: RiPaletteLine,
      image: "assets/img/home-6/home6-solution-bg2.png"
    },
    {
      title: "ERP/CRM",
      description: "Providing customized ERP and CRM solutions to streamline processes and improve customer relationship management.",
      link: "/service/erp-crm",
      delay: "800ms",
      icon: RiDatabase2Line,
      image: "assets/img/home-6/home6-solution-bg2.png"
    },
    {
      title: "SaaS Development",
      description: "Developing scalable SaaS platforms with robust features to meet the evolving needs of modern businesses.",
      link: "/service/saas-development",
      delay: "900ms",
      icon: RiCloudLine,
      image: "assets/img/home-6/home6-solution-bg2.png"
    },
    {
      title: "Staff Augmentation",
      description: "Supplying top-tier talent to enhance your team's capabilities and meet project goals efficiently.",
      link: "/service/staff-augmentation",
      delay: "1000ms",
      icon: RiTeamLine,
      image: "assets/img/home-6/home6-solution-bg2.png"
    },
    {
      title: "AI/ML",
      description: "Harnessing the power of AI and machine learning to drive innovation and improve decision-making processes.",
      link: "/service/ai-ml",
      delay: "600ms",
      icon: RiRobot2Line,
      image: "assets/img/home-6/home6-solution-bg2.png"
    },
  ];

  return (
    <Layout>
      <Breadcrumb
        pageList="Services"
        title="Our Providing Services"
        pageName="SERVICES"
      />
      <div className="home6-solution-section"
       style={{ 
        backgroundImage: "url('/assets/img/Ellipse.png')",
        backgroundSize: "cover", 
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}>
        <div className="container">
          <div className="row g-4" 
          
          >
            {solutions.map((solution, index) => (
              <div className="col-lg-4 col-md-6 col-sm-10" key={index}
              style={{ 
                height: "450px"
               }}>
                <div className="single-solution" style={{animationDelay: solution.delay}}>
                  <div className="background-img">
                    <img src={solution.image} alt={solution.title} />
                  </div>
                  <div className="sl">
                    <h2>{String(index + 1).padStart(2, '0')}</h2>
                  </div>
                  <div className="solution-content">
                    <h3>
                      <Link legacyBehavior href={solution.link}>
                        <a>{solution.title}</a>
                      </Link>
                    </h3>
                    <p>{solution.description}</p>
                  </div>
                  <div className="solution-btn-icon">
                    <div className="learn-btn">
                      <Link legacyBehavior href={solution.link}>
                        <a className="primary-btn9">
                          <span>Learn More</span>
                          <svg
                            width={16}
                            height={14}
                            viewBox="0 0 16 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8 0.5L15 7.5M15 7.5L8 13.5M15 7.5L1.30274e-07 7.5" />
                          </svg>
                        </a>
                      </Link>
                    </div>
                    <div className="icon">
                      {React.createElement(solution.icon, { size: 40 })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Service4Page;




