import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/layout/Layout";
import Link from "next/link";
import React from "react";
import { caseStudies } from "../data/content"; // Ensure this matches the export in your content file

function CaseStudyPage() {
  return (
    <Layout>
      <Breadcrumb
        pageList="CASE STUDY"
        title="From Challenge To Triumph"
        pageName="Case Study"
      />
      <div className="home6-case-study-section sec-mar"
       style={{ 
        backgroundImage: "url('/assets/img/Ellipse.png')",
        backgroundSize: "cover", 
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}>
        <div className="container">
          <div className="row g-lg-4 gy-5 border-rights">
            {caseStudies && caseStudies.length > 0 ? (
              caseStudies.map((caseStudy) => (
                <div key={caseStudy.id} className="col-lg-6">
                  <div className="case-left">
                    <div className="home6-case-study">
                      <div className="case-img magnetic-item">
                        <img className="img-fluid" src={caseStudy.overviewImage} alt={caseStudy.title} />
                      </div>
                      <div className="case-content pb-50">
                        <span>{caseStudy.category}</span>
                        <h3>
                          <Link legacyBehavior href={`/case-study-details/${caseStudy.slug}`}>
                            <a>{caseStudy.mainTitle}</a>
                          </Link>
                        </h3>
                        <p>{caseStudy.description}</p>
                        <div className="learn-btn">
                          <Link legacyBehavior href={`/case-study-details/${caseStudy.slug}`}>
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
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No case studies available.</p>
            )}
          </div>
          {/* Pagination */}
        </div>
      </div>
    </Layout>
  );
}

export default CaseStudyPage;
