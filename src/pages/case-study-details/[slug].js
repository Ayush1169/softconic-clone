import Breadcrumb from "../../components/common/Breadcrumb";
import Layout from "../../components/layout/Layout";
import React from "react";
import { caseStudies } from "../../data/content";
import { useRouter } from "next/router";

const CaseStudyDetailsPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const caseStudy = caseStudies.find((study) => study.slug === slug);

  if (!caseStudy) {
    return <p>Loading...</p>;
  }

  return (
    <Layout>
      <Breadcrumb
        pageList="Case Study Details"
        title={caseStudy.mainTitle}
        pageName="CASE STUDY DETAILS"
      />
      <div className="case-study-details sec-mar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="case-study-title">
                <h1>{caseStudy.mainTitle}</h1>
              </div>
              <div className="case-big-img magnetic-item">
                <img
                  className="img-fluid"
                  src={caseStudy.mainImage}
                  alt={caseStudy.title}
                />
              </div>
              <div className="case-content mb-60">
                <p>{caseStudy.description}</p>
              </div>

              {/* Project Challenges Section */}
              <div className="row mb-120">
                <div className="col-lg-12">
                  <div className="case-content">
                    <h2>Project Challenges</h2>
                    <ul>
                      {caseStudy.projectChallenges.map((challenge, index) => (
                        <li key={index} style={{ color: '#fefefe' }}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>


              <div className="row g-lg-4 gy-5 mb-120">
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="case-content">
                    <h2>Overview</h2>
                    <p>{caseStudy.overview}</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="case-img magnetic-item">
                    <img
                      className="img-fluid"
                      src={caseStudy.overviewImage}
                      alt="Overview Image"
                    />
                  </div>
                </div>
              </div>
              <div className="row g-lg-4 gy-5 mb-120">
                <div className="col-lg-6">
                  <div className="case-img magnetic-item">
                    <img
                      className="img-fluid"
                      src={caseStudy.solutionImage}
                      alt="Solution Image"
                    />
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="case-content">
                    <h2>Solution</h2>
                    <p>{caseStudy.solution}</p>
                  </div>
                </div>
              </div>
              <div className="row mb-120">
                <div className="col-lg-12">
                  <div className="case-content mb-60">
                    <h2>Process</h2>
                    <p>{caseStudy.processDescription}</p>
                  </div>
                  <div className="row g-4 justify-content-center">
                    {caseStudy.processSteps.map((step, index) => (
                      <div className="col-lg-4 col-md-6" key={index}>
                        <div className="single-process magnetic-item">
                          <div className="icon">
                            <img src={step.icon} alt={`${step.title} Icon`} />
                          </div>
                          <span>{step.stepNumber}</span>
                          <h3>{step.title}</h3>
                          <p>{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
              <div className="row mb-120">
                <div className="col-lg-12">
                  <div className="case-content">
                    <h2>Outcomes</h2>
                    <p>{caseStudy.outcomes}</p>
                  </div>
                </div>
              </div>
              <div className="row mb-120">
                <div className="col-lg-12">
                  <div className="case-content">
                    <h2>Conclusion</h2>
                    <p>{caseStudy.conclusion}</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="case-content mb-60">
                    <h2>Additional Images</h2>
                  </div>
                  <div className="row g-4 justify-content-center">
                    {caseStudy.additionalImages.map((image, index) => (
                      <div className="col-md-6" key={index}>
                        <div className="case-img magnetic-item">
                          <img
                            className="img-fluid"
                            src={image}
                            alt={`Additional Image ${index + 1}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="row mb-120">
                <div className="col-lg-12">
                  <div className="case-content">
                    <h2>Testimonials</h2>
                    {caseStudy.testimonials.map((testimonial, index) => (
                      <div key={index} className="mb-4">
                        <blockquote>
                          <p>"{testimonial.quote}"</p>
                        </blockquote>
                        <p className="text-right">- {testimonial.author}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CaseStudyDetailsPage;