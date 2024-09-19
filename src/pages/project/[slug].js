import Breadcrumb from "../../components/common/Breadcrumb";
import Layout from "../../components/layout/Layout";
import Link from "next/link";
import React from "react";
import { useRouter } from 'next/router';
import data from "../../data/mesonaryData";

function ProjectDetailsPage({ project }) {
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
                <img className="img-fluid" src={project.image} alt={project.title} />
              </div>
            </div>
          </div>
          <div className="row gy-5">
            <div className="col-lg-8">
              <div className="portfolio-content">
                <h3>Project Overview</h3>
                <p>{project.description}</p>
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
                    <h5>{project.company}</h5>
                  </li>
                </ul>
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
  const project = data.find(p => p.slug === params.slug);
  return { props: { project } };
}

export default ProjectDetailsPage;
