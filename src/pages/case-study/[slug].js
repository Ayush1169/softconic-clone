import Breadcrumb from "../../components/common/Breadcrumb";
import Layout from "../../components/layout/Layout";
import React from "react";
import { caseStudies } from "../../data/content";
import { useRouter } from "next/router";
import { FaCheckCircle } from 'react-icons/fa';
import Head from "next/head";

const CaseStudyDetailsPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const caseStudy = caseStudies.find((study) => study.slug === slug);

  if (!caseStudy) {
    return <p>Loading...</p>;
  }

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
          pageList="Case Study Details"
          title={caseStudy.mainTitle}
          pageName="CASE STUDY DETAILS"
          image1={caseStudy.breadCrumbs1}
          image2={caseStudy.breadCrumbs2}
        />
        <div className="case-study-details sec-mar">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="case-study-title">
                  <h1 style={{ textAlign: 'center' }}>{caseStudy.mainTitle}</h1>
                </div>
                <div className="case-big-img magnetic-item" style={{ display: 'flex', justifyContent: 'center' }}>
                  <img
                    className="img-fluid"
                    src={caseStudy.mainImage}
                    alt={caseStudy.title}
                    style={{ height: '300px', width: '100%', imageRendering: 'auto', }}

                  />
                </div>
                <div className="case-content mb-60">
                  <p style={{ textAlign: 'center' }}>{caseStudy.description}</p>
                </div>

                {/* Challenges Section */}


                <div className="row mb-120">
                  <div className="col-lg-12">
                    <div className="case-content">
                      <h2>Project Challenges</h2>
                      <div className="grid-container" data-count={caseStudy.projectChallenges.length}>
                        {caseStudy.projectChallenges.map((challenge, index) => {
                          const text = challenge || ""; 
                          const imageUrl = challenge?.image || "";

                          const [heading, ...description] = text.includes(":") ? text.split(":") : [text, ""];

                          return (
                            <div key={index} className="grid-item">
                              {imageUrl && <img src={imageUrl} alt={`Challenge ${index}`} className="challenge-image" />} 
                              <FaCheckCircle size={40} color="green" className="icon" />
                              <h3>{heading.trim()}</h3>
                              <p>{description.join(":").trim()}</p>
                             
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>





                <div className="row g-lg-4 gy-5 mb-120">
                  <div className="col-lg-6 d-flex align-items-center">
                    <div className="case-content">
                      <h2 style={{ color: "#06D889" }}>Overview</h2>
                      {caseStudy.overview.split(/(?=\d+\))/).map((point, index) => (
                        <p key={index}>{point.trim()}</p>
                      ))}
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
                      <h2 style={{ color: "#06D889" }}>Solution</h2>
                      {caseStudy.solution.split(/(?=\d+\))/).map((point, index) => (
                        <p key={index}>{point.trim()}</p>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="row mb-120">
                  <div className="col-lg-12">
                    <div className="case-content mb-60">
                      <h2 style={{ color: "#06D889" }}>Process</h2>
                      <p>{caseStudy.processDescription}</p>
                    </div>
                    <div className="grid-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                      {caseStudy.processSteps.map((step, index) => (
                        <div className="single-process magnetic-item" key={index}>
                          <div
                            className="icon"
                            style={{
                              width: '60px',
                              height: '60px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginBottom: '10px',
                              fontSize: '2rem'
                            }}
                          >
                            {step.icon}
                          </div>
                          <span>{step.stepNumber}</span>
                          <h3>{step.title}</h3>
                          <p>{step.description}</p>
                        </div>

                      ))}
                    </div>


                  </div>
                </div>
                <div className="row mb-120">
                  <div className="col-lg-12">
                    <div className="case-content">
                      <h2 style={{ color: "#06D889" }}>Outcomes</h2>
                      <p>{caseStudy.outcomes}</p>
                    </div>
                  </div>
                </div>
                <div className="row mb-120">
                  <div className="col-lg-12">
                    <div className="case-content">
                      <h2 style={{ color: "#06D889" }}>Conclusion</h2>
                      <p>{caseStudy.conclusion}</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
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
                <div className="Testimonials">
                  <div className="col-lg-12">
                    <div className="case-content">
                      <h2 style={{ color: "#06D889" }}>Testimonials</h2>
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
      </Layout></>
  );
};

export default CaseStudyDetailsPage;