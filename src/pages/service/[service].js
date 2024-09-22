import { useRouter } from 'next/router';
import Breadcrumb from "../../components/common/Breadcrumb";
import Layout from "../../components/layout/Layout";
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { servicesData, howWeWork } from "../../data/service";

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

  const { title, description, technologies } = serviceContent;

  return (
    <Layout>
      <Breadcrumb pageList={title} title={title} pageName={title} />
      <div className="service-details sec-mar">
        {title && description && <AboutServices title={title} description={description} />}
        {howWeWork && howWeWork.length > 0 && <HowWeWorkSection />}
        {serviceContent.faqSections && serviceContent.faqSections.length > 0 && (
          <ServiceFAQArea faqSections={serviceContent.faqSections} />
        )}
        {technologies && technologies.comparisonSections && <TechnologiesSection technologies={technologies} />}
        {technologies && technologies.dataSets && <UserGuidesSection dataSets={technologies.dataSets} />}
        {technologies && technologies.conclusion && <ConclusionSection conclusion={technologies.conclusion} />}
        <ContactSection />
      </div>
    </Layout>
  );
}

function AboutServices({ title, description }) {
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
              <img className="img-fluid" src="/assets/img/inner-pages/about-service-img.png" alt="" />
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
              <h2 className="faq-title">{faqSection.title}</h2>
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
                {item.answer}
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
  return (
    <div className="technologies">
      <div className="container">
        <h1>{title}</h1>
        <p>{description}</p>

        <div className="comparison-sections">
          {comparisonSections.map((section, index) => (
            <div key={index} className="comparison-section">
              <img
                src={section.image} // Use the specific image for each section
                alt={section.title}
                className="section-image"
              />
              <h2>{section.title}</h2>
              <div className="comparison-content">
                {section.questions.map((q, idx) => (
                  <div key={idx} className="comparison-item">
                    <strong>{q.question}</strong>
                    <p>{q.answer}</p>
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

  return (
    <div className="user-guides-section">
      <div className="container">
        {dataSets.map((guideSet, setIndex) => (
          <div key={setIndex} className="user-guide-set"
            style={{
              backgroundImage: "url('/assets/img/Ellipse.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}>
            <h2>{guideSet.title}</h2>
            <p>{guideSet.description}</p>
            <div className="user-guides-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              {guideSet.guides.map((guide, guideIndex) => (
                <div key={guideIndex} className="user-guide" style={{
                  backgroundColor: '#1e1e1e',
                  borderRadius: '10px',
                  padding: '30px',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                  flex: '0 1 calc(33.333% - 20px)', /* 3 items per row with space */
                  marginBottom: '20px',
                  transition: 'all 0.3s ease'
                }}>
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="section-image"
                  />
                  <h3 style={{ color: 'var(--theme-color)', marginBottom: '20px', fontSize: '1.6rem', borderBottom: '2px solid var(--theme-color)', paddingBottom: '10px' }}>
                    {guide.title}
                  </h3>
                  <ul>
                    {guide.steps.map((step, stepIndex) => (
                      <li key={stepIndex}>{step}</li>
                    ))}
                  </ul>
                </div>
              ))}
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
    <div className="conclusion-section"
    >
      <div className="container">
        <h2>{conclusion.title}</h2>
        <p>{conclusion.content}</p>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="home4-contact-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="contact-wrapper text-center magnetic-item">
              <h2 className="title">Work With Us</h2>
              <h2 className="content">Let's Talk</h2>
              <div className="contact-btn">
                <Link href="/contact" className="magnetic-item">
                  Contact With Us.
                  <svg width={32} height={32} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetailsPage;