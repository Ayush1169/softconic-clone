import Breadcrumb from "../../components/common/Breadcrumb";
import Layout from "../../components/layout/Layout";
import Link from "next/link";
import React from "react";
import data from "../../data/mesonaryData";

function ProjectDetailsPage({ project , prevProject, nextProject }) {
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <Layout>
      <Breadcrumb
        pageList={project.title}
        title={project.title}
        pageName="PROJECTS DETAILS"
      />
      <div className="portfolio-details sec-mar">
        <div className="container">
          <div className="row g-4 mb-80">
            <div className="col-lg-7">
              <div className="portfolio-img magnetic-item">
                <img
                  className="img-fluid"
                  src={project.images[0]}
                  alt={project.title}
                />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="row g-4">
                <div className="col-lg-12">
                  <div className="portfolio-img magnetic-item">
                    <img
                      className="img-fluid"
                      src={project.images[1]}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="portfolio-img magnetic-item">
                    <img
                      className="img-fluid"
                      src={project.images[2]}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row gy-5">
            <div className="col-lg-8">
              <div className="portfolio-content">
                <h3>Projects Overview</h3>
                <p>{project.description}</p>
                <div className="working-process">
                  <h3>Our Process</h3>
                  <div className="row g-4 justify-content-center">
                    {project.process.map((step, index) => (
                      <div className="col-xl-4 col-sm-6" key={index}>
                        <div className="single-process magnetic-item">
                          <div className="icon">
                            <img
                              src={step.icon}
                              alt=""
                            />
                          </div>
                          <span>Step {step.step}</span>
                          <h3>{step.title}</h3>
                          <p>{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="row g-4 mb-55">
                  <div className="col-lg-7 col-sm-6">
                    <div className="portfolio-img magnetic-item">
                      <img
                        className="img-fluid"
                        src={project.images[3]}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-5 col-sm-6">
                    <div className="portfolio-img magnetic-item">
                      <img
                        className="img-fluid"
                        src={project.images[4]}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <h3>Result</h3>
                <p>{project.result}</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="portfolio-info">
                <ul>
                  <li>
                    <span>Client:</span>
                    <h5>{project.client}</h5>
                  </li>
                  <li>
                    <span>Company:</span>
                    <h5>EVD Technology</h5>
                  </li>
                  <li>
                    <span>Location:</span>
                    <h5>{project.location}</h5>
                  </li>
                  <li>
                    <span>Project Type:</span>
                    <h5>{project.projectType}</h5>
                  </li>
                  <li>
                    <span>Duration:</span>
                    <h5>{project.duration}</h5>
                  </li>
                </ul>
              </div>
              <div className="portfolio-details-sm-banner">
                <div className="section-title-5">
                  <h2>
                    Ready to <br />
                    <span>work with us?</span>
                  </h2>
                  <div className="get-btn">
                    <Link legacyBehavior href="/contact">
                      <a className="primary-btn3">Get a quote</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
        <div className="col-lg-12">
          <div className="details-navigation">
            {prevProject && (
              <div className="single-navigation">
                <div className="content">
                  <Link legacyBehavior href={`/project/${prevProject.slug}`}>
                    <a>Previous</a>
                  </Link>
                  <h4>
                    <Link legacyBehavior href={`/project/${prevProject.slug}`}>
                      <a>{prevProject.title}</a>
                    </Link>
                  </h4>
                </div>
                <Link legacyBehavior href={`/project/${prevProject.slug}`}>
                  <a className="img">
                    <img
                      src={prevProject.images[0]}
                      alt={prevProject.title}
                    />
                    <div className="arrow">
                      <svg
                        width={12}
                        height={12}
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                      </svg>
                    </div>
                  </a>
                </Link>
              </div>
            )}
            {nextProject && (
              <div className="single-navigation two">
                <Link legacyBehavior href={`/project-details/${nextProject.slug}`}>
                  <a className="img">
                    <img
                      src={nextProject.images[0]}
                      alt={nextProject.title}
                    />
                    <div className="arrow">
                      <svg
                        width={12}
                        height={12}
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                      </svg>
                    </div>
                  </a>
                </Link>
                <div className="content">
                  <Link legacyBehavior href={`/project/${nextProject.slug}`}>
                    <a>NEXT </a>
                  </Link>
                  <h4>
                    <Link legacyBehavior href={`/project/${nextProject.slug}`}>
                      <a>{nextProject.title}</a>
                    </Link>
                  </h4>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
        </div>
      </div>
    </Layout>
  );
}
export async function getStaticPaths() {
  const paths = data.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const projectIndex = data.findIndex(p => p.slug === params.slug);
  const project = data[projectIndex];
  const prevProject = projectIndex > 0 ? data[projectIndex - 1] : null;
  const nextProject = projectIndex < data.length - 1 ? data[projectIndex + 1] : null;

  return { 
    props: { 
      project,
      prevProject,
      nextProject
    } 
  };
}

export default ProjectDetailsPage;