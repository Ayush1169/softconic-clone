import { useRouter } from 'next/router';
import Breadcrumb from "../../components/common/Breadcrumb";
import Layout from "../../components/layout/Layout";
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { servicesData, howWeWork } from "../../data/content";

function ServiceDetailsPage() {
  const router = useRouter();
  const { service } = router.query;

  const [serviceContent, setServiceContent] = useState(null);

  useEffect(() => {
    if (service) {
      setServiceContent(servicesData[service] || null);
    }
  }, [service]);

  if (!serviceContent) {
    return (
      <Layout>
        <Breadcrumb pageList="Service Details" title="Service Not Found" pageName="SERVICE DETAILS" />
        <div className="service-details">
          <div className="container">
          
          </div>
        </div>
      </Layout>
    );
  }

  const { title, description, comparisonSections } = servicesData["technologies"];

  return (
    <Layout>
      <Breadcrumb pageList={serviceContent.title} title={serviceContent.title} pageName={serviceContent.title} />
      <div className="service-details sec-mar">
        <div className="about-services">
          <div className="container">
            <div className="row gy-5">
              <div
                className="col-lg-6 d-flex align-items-center wow animate fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="about-content">
                  <div className="section-title-5">
                    <h2>{serviceContent.title}</h2>
                  </div>
                  <p>{serviceContent.description}</p>
                  <ul className="about-featue">
                    {/* Add feature list items here if needed */}
                  </ul>
                </div>
              </div>
              <div
                className="col-lg-6 wow animate fadeInRight"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="service-img magnetic-item">
                  <img
                    className="img-fluid"
                    src="/assets/img/inner-pages/about-service-img.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="how-we-work-section sec-mar">
          <div className="container">
            <div
              className="row mb-60 wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>How we work</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="work-item">
            <div className="container-fluid">
              <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 gy-5 justify-content-center">
                {howWeWork.map((item, index) => (
                  <div
                    key={index}
                    className="col magnetic-item wow animate fadeInUp"
                    data-wow-delay={`${(index + 2) * 100}ms`}
                    data-wow-duration="1500ms"
                  >
                    <div className="single-work">
                      <div className="work-icon">
                        <img src={item.icon} alt="" />
                      </div>
                      <div className="work-content">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="service-faq-area sec-mar">
          <div className="container">
            <div className="row gy-5">
              {serviceContent.faqSections.map((faqSection, sectionIndex) => (
                <div className="service-faq-area sec-mar" key={sectionIndex}>
                  <div className="container">
                    <div className="row gy-5">
                      <div className="col-lg-12">
                        <h2>{faqSection.title}</h2>
                      </div>
                      {faqSection.layout ? (
                        <>
                          <div
                            className="col-lg-6 d-flex align-items-center wow animate fadeInLeft"
                            data-wow-delay="200ms"
                            data-wow-duration="1500ms"
                          >
                            <div className="faq-content-area">
                              <div className="accordion" id={`accordionExample${sectionIndex}`}>
                                {faqSection.questions.map((item, index) => (
                                  <div className="accordion-item" key={index}>
                                    <h6 className="accordion-header" id={`heading${sectionIndex}-${index}`}>
                                      <button
                                        className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#collapse${sectionIndex}-${index}`}
                                        aria-expanded={index === 0 ? 'true' : 'false'}
                                        aria-controls={`collapse${sectionIndex}-${index}`}
                                      >
                                        {item.question}
                                      </button>
                                    </h6>
                                    <div
                                      id={`collapse${sectionIndex}-${index}`}
                                      className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                      aria-labelledby={`heading${sectionIndex}-${index}`}
                                      data-bs-parent={`#accordionExample${sectionIndex}`}
                                    >
                                      <div className="accordion-body">
                                        {item.answer}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-6 wow animate fadeInRight"
                            data-wow-delay="300ms"
                            data-wow-duration="1500ms"
                          >
                            <div className="faq-img magnetic-item">
                              <img
                                className="img-fluid"
                                src={faqSection.image}
                                alt=""
                              />
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div
                            className="col-lg-6 wow animate fadeInLeft"
                            data-wow-delay="200ms"
                            data-wow-duration="1500ms"
                          >
                            <div className="faq-img magnetic-item">
                              <img
                                className="img-fluid"
                                src={faqSection.image}
                                alt=""
                              />
                            </div>
                          </div>
                          <div
                            className="col-lg-6 d-flex align-items-center wow animate fadeInRight"
                            data-wow-delay="300ms"
                            data-wow-duration="1500ms"
                          >
                            <div className="faq-content-area">
                              <div className="accordion" id={`accordionExample${sectionIndex}`}>
                                {faqSection.questions.map((item, index) => (
                                  <div className="accordion-item" key={index}>
                                    <h6 className="accordion-header" id={`heading${sectionIndex}-${index}`}>
                                      <button
                                        className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#collapse${sectionIndex}-${index}`}
                                        aria-expanded={index === 0 ? 'true' : 'false'}
                                        aria-controls={`collapse${sectionIndex}-${index}`}
                                      >
                                        {item.question}
                                      </button>
                                    </h6>
                                    <div
                                      id={`collapse${sectionIndex}-${index}`}
                                      className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                      aria-labelledby={`heading${sectionIndex}-${index}`}
                                      data-bs-parent={`#accordionExample${sectionIndex}`}
                                    >
                                      <div className="accordion-body">
                                        {item.answer}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
      
      <div className="technologies">
        <h1>{title}</h1>
        <p>{description}</p>

        <div className="container">
        {comparisonSections.map((section, index) => (
          <div key={index} className={`section ${section.layout ? 'layout-true' : 'layout-false'}`}>
            <h2>{section.title}</h2>
            <ul>
              {section.questions.map((q, idx) => (
                <li key={idx}>
                  <strong>{q.question}</strong>
                  <p>{q.answer}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
        </div>
      </div>

      <div className="home4-contact-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-wrapper text-center magnetic-item">
                <h2 className="title">Work With Us</h2>
                <h2 className="content">Let's Talk</h2>
                <div className="contact-btn">
                  <Link legacyBehavior href="/contact">
                    <a className="magnetic-item">
                      Contact With Us.
                      <svg
                        width={32}
                        height={32}
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ServiceDetailsPage;