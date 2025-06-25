import { useRouter } from 'next/router';
import Breadcrumb from "../../components/common/Breadcrumb";
import Layout from "../../components/layout/Layout";
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { servicesData, howWeWork } from "../../data/service";
import Home3Contact from '../../components/contact/Home3Contact';

function ServiceDetailsPage() {
  const router = useRouter();
  const { service } = router.query;
  const [serviceContent, setServiceContent] = useState(null);

  useEffect(() => {
    if (service && servicesData[service]) {
      setServiceContent(servicesData[service]);
    }
  }, [service]);

  if (!serviceContent) {
    return (
      <Layout>
        <Breadcrumb pageList="Service Details" title="Service Not Found" pageName="SERVICE DETAILS" />
        <div className="service-details">
          <div className="container">
            <p>The requested service could not be found.</p>
          </div>
        </div>
      </Layout>
    );
  }

  const { title, description, technologies, hero1, hero2, image, video } = serviceContent;

  return (
    <Layout>
      <Breadcrumb pageList={title} title={title} pageName={title} 
         image1={hero1} 
         image2={hero2}
      />
      <div className="service-details sec-mar" style={{marginBottom:"-115x"}}>
        {title && description && <AboutServices title={title} description={description} image={image} video={video} />}
        {howWeWork && howWeWork.length > 0 && <HowWeWorkSection />}
       
        {technologies && technologies.comparisonSections && <TechnologiesSection technologies={technologies} />}
        {technologies && technologies.dataSets && <UserGuidesSection dataSets={technologies.dataSets} />}
        {technologies && technologies.conclusion && <ConclusionSection conclusion={technologies.conclusion} />}
        {serviceContent.faqSections && serviceContent.faqSections.length > 0 && (
          <ServiceFAQArea faqSections={serviceContent.faqSections} />
        )}
        <Home3Contact />
      </div> 
    </Layout>
  );
}
function AboutServices({ title, description, image }) {
  const isVideo = image.endsWith(".mp4");

  return (
    <div className="about-services"
      style={{
        backgroundImage: "url('/assets/img/Ellipse.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}>
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-6 d-flex align-items-center wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="about-content">
              <div className="section-title-5">
                <h2>{title}</h2>
              </div>
              <p>{description}</p>
            </div>
          </div>
          <div className="col-lg-6 wow animate fadeInRight" data-wow-delay="300ms" data-wow-duration="1500ms">
            <div className="service-img magnetic-item">
              {isVideo ? (
                <video
                  src={image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="img-fluid"
                  style={{ width: "100%", borderRadius: "10px" }}
                />
              ) : (
                <img
                  className="img-fluid"
                  src={image}
                  alt=""
                  style={{ width: "100%" }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function HowWeWorkSection() {
  return (
    <div className="how-we-work-section sec-mar"
      style={{
        backgroundImage: "url('/assets/img/Ellipse.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}>
      <div className="container">
        <div className="row mb-60 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
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
              <div key={index} className="col magnetic-item wow animate fadeInUp" data-wow-delay={`${(index + 2) * 100}ms`} data-wow-duration="1500ms">
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
  );
}

function ServiceFAQArea({ faqSections }) {
  if (!faqSections || faqSections.length === 0) return null;

  return (
    <div className="service-faq-area sec-mar"
      style={{
        backgroundImage: "url('/assets/img/Ellipse.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}>
      <div className="container">
        {faqSections.map((faqSection, sectionIndex) => (
          <div key={sectionIndex} className="row gy-5 faq-section">
            <div className="col-lg-12">
              <h2 className="faq-title" style={{ color: 'var(--theme-color)' }}>{faqSection.title}</h2>
            </div>
            <FAQContent questions={faqSection.questions} sectionIndex={sectionIndex} layout={faqSection.layout} image={faqSection.image} />
          </div>
        ))}
      </div>
    </div>
  );
}

function FAQContent({ questions, sectionIndex, layout, image }) {
  if (!questions || questions.length === 0) return null;


  const formatAnswer = (answer) => {
    return answer.split(/(\d+\.\s+)/).reduce((acc, part, index) => {
      if (/\d+\.\s+/.test(part)) {
        acc.push(
          <span key={index} style={{ color: 'red' }}>
            {part}
          </span>
        );
      } else {
        acc.push(
          <span key={index}>{part}</span>,
          <br key={`break-${index}`} />
        );
      }
      return acc;
    }, []);
  };
  
  
  

  const FAQItems = (
    <div className="faq-content-area">
      <div className="accordion" id={`accordionExample${sectionIndex}`}>
        {questions.map((item, index) => (
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
                {formatAnswer(item.answer)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ImageSection = image && (
    <div className={`col-lg-6 wow animate ${layout ? 'fadeInRight' : 'fadeInLeft'}`} data-wow-delay="300ms" data-wow-duration="1500ms">
      <div className="faq-img magnetic-item">
        <img className="img-fluid" src={image} alt="" />
      </div>
    </div>
  );

  return (
    <>
      {layout ? (
        <>
          <div className="col-lg-6 d-flex align-items-center wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
            {FAQItems}
          </div>
          {ImageSection}
        </>
      ) : (
        <>
          {ImageSection}
          <div className="col-lg-6 d-flex align-items-center wow animate fadeInRight" data-wow-delay="300ms" data-wow-duration="1500ms">
            {FAQItems}
          </div>
        </>
      )}
    </>
  );
}


function TechnologiesSection({ technologies }) {
  if (!technologies || !technologies.comparisonSections || !technologies.title || !technologies.description) {
    return null;
  }

  const { title, description, comparisonSections } = technologies;

  const formatContent = (content) => {
    const lines = content.split('\n');
    
    return lines.map((line, index) => {
      const match = line.match(/^(\d+\.)\s*(.*)/);
      if (match) {
        return (
          <React.Fragment key={index}>
            <span style={{ 
              fontWeight: 'bold', 
              color: 'var(--theme-color)',
              display: 'inline-block',
              marginRight: '5px'
            }}>
              {match[1]}
            </span>
            {match[2]}
            <br />
          </React.Fragment>
        );
      }
      return (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      );
    });
  };

  return (
    <div className="technologies">
      <div className="container">
        <h1>{title}</h1>
        <p className="description">{description}</p>

        <div className="comparison-sections">
          {comparisonSections.map((section, index) => (
            <div key={index} className="comparison-section">
              <img
                src={section.image}
                alt={section.title}
                className="section-image"
              />
              <h2>{section.title}</h2>
              <div className="comparison-content">
                {section.questions.map((q, idx) => (
                  <div key={idx} className="comparison-item">
                    <strong>{q.question}</strong>
                    <p>{formatContent(q.answer)}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function UserGuidesSection({ dataSets }) {
  if (!dataSets || dataSets.length === 0) return null;

  const formatStep = (step) => {
    const match = step.match(/^(\d+\.)\s*(.*)/);
    if (match) {
      return (
        <>
          <span className="step-number">{match[1]}</span>
          {match[2]}
        </>
      );
    }
    return step;
  };

  return (
    <div className="user-guides-section">
      <div className="container">
        {dataSets.map((guideSet, setIndex) => (
          <div key={setIndex} className="user-guide-set">
            <h2>{guideSet.title}</h2>
            <p>{guideSet.description}</p>

            {/* Top 3 cards */}
            <div className="row justify-content-center mb-4">
              {guideSet.guides.slice(0, 3).map((guide, index) => {
                if (guide.layout === "side-by-side") {
                  return (
                    <div
                      key={index}
                      className="row align-items-center mb-5 guide-side-by-side"
                    >
                      <div className="col-md-6">
                        <img
                          src={guide.image}
                          alt={guide.title}
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-md-6">
                        <h3>{guide.title}</h3>
                        <ul className="list-unstyled guide-custom-font">
                          {guide.steps.map((step, i) => (
                            <li key={i}>{formatStep(step)}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={index}
                      className="col-md-4 d-flex justify-content-center"
                    >
                      <div className="user-guide text-center p-3">
                        <img
                          src={guide.image}
                          alt={guide.title}
                          className="section-image img-fluid mb-3"
                        />
                        <h3>{guide.title}</h3>
                        <ul className="list-unstyled guide-custom-font">
                          {guide.steps.map((step, i) => (
                            <li key={i}>{formatStep(step)}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                }
              })}
            </div>

            {/* Bottom 2 cards */}
            <div className="row justify-content-center">
              {guideSet.guides.slice(3, 5).map((guide, index) => {
                if (guide.layout === "side-by-side") {
                  return (
                    <div
                      key={index}
                      className="row align-items-center mb-5 guide-side-by-side"
                    >
                      <div className="col-md-6">
                        <img
                          src={guide.image}
                          alt={guide.title}
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-md-6">
                        <h3>{guide.title}</h3>
                        <ul className="list-unstyled guide-custom-font">
                          {guide.steps.map((step, i) => (
                            <li key={i}>{formatStep(step)}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={index}
                      className="col-md-5 d-flex justify-content-center"
                    >
                      <div className="user-guide text-center p-3">
                        <img
                          src={guide.image}
                          alt={guide.title}
                          className="section-image img-fluid mb-3"
                        />
                        <h3>{guide.title}</h3>
                        <ul className="list-unstyled guide-custom-font">
                          {guide.steps.map((step, i) => (
                            <li key={i}>{formatStep(step)}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


function ConclusionSection({ conclusion }) {
  if (!conclusion) return null;

  return (
    <div className="conclusion-section">
      <div className="container">
        <h2>{conclusion.title}</h2>
        <p>{conclusion.content}</p>
      </div>
    </div>
  );
}

export default ServiceDetailsPage;
