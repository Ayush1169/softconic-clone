import Breadcrumb from "../../components/common/Breadcrumb";
import Layout from "../../components/layout/Layout";
import React from "react";
import { caseStudies } from "../../data/content"; // Make sure this imports the array

import { useRouter } from "next/router";

const CaseStudyDetailsPage = () => {
  const router = useRouter();
  const { slug } = router.query; // Get the slug from the URL

  // Find the case study based on the slug
  const caseStudy = caseStudies.find((study) => study.slug === slug);

  if (!caseStudy) {
    return <p>Loading...</p>; // You can also show a not found message here
  }

  return (
    <Layout>
      <Breadcrumb
        pageList="Case Study Details"
        title={caseStudy.title}
        pageName="CASE STUDY DETAILS"
      />
      <div className="case-study-details sec-mar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="case-study-title">
                <h2>{caseStudy.mainTitle}</h2>
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
                      alt=""
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
                      alt=""
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
                      <div className="col-xl-3 col-sm-6" key={index}>
                        <div className="single-process magnetic-item">
                          <div className="icon">
                            <img src={step.icon} alt="" />
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
                            alt=""
                          />
                        </div>
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
