import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/layout/Layout";
import Link from "next/link";
import React, { useState } from "react";
import data from "../data/mesonaryData";
import Head from "next/head";

function ProjectMasonaryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [page, setPage] = useState(1);
  const itemsPerPage = 6; 

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category === "All" ? "All" : category);
    setPage(1);
  };

  const filteredData =
    selectedCategory === "All"
      ? data
      : data.filter((project) => project.category === selectedCategory);

  const displayedData = filteredData.slice(0, page * itemsPerPage); 

  const getColumnClass = (index) => {
    switch(index) {
      case 0: return "col-lg-4 col-sm-6"; 
      case 1: return "col-lg-6 col-sm-6"; 
      case 2:
      case 3: return "col-lg-4 col-sm-6"; 
      default: return "col-lg-4 col-sm-6";
    }
  };

  return (
    <>
    <Head>
        <title>
          EVD Technology
        </title>
        <link rel="icon" href="/assets/img/fevicon.png" />
      </Head>
    <Layout pageTitle={"Projects"}>
      <Breadcrumb
        pageList="Projects"
        title="Our Completed Projects"
        pageName="PROJECTS"
        image1="/assets/img/projects/hero1.png"
        image2="/assets/img/projects/hero2.png"
      />
      <div className="portfolio-masonary-page sec-mar"
        style={{ 
          backgroundImage: "url('/assets/img/Ellipse.png')",
          backgroundSize: "cover", 
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="row" style={{ width: '100%' }}>
            <div className="col-12">
              <ul className="isotope-menu">
                {["All", "UI/UX", "Web Design", "Developing", "Graphic Design"].map((category) => (
                  <li
                    key={category}
                    className={selectedCategory === category ? "active" : ""}
                    onClick={() => handleCategoryFilter(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="row g-4 project-items mb-55" style={{ width: '100%', justifyContent: 'center' }}>
            {displayedData.map((item, index) => (
              <div
                key={item.id}
                className={`${getColumnClass(index)} single-item ${item.category}`}
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <div className="single-work magnetic-item" style={{ width: '100%' }}>
                  <div className="work-img">
                    <img className="img-fluid" src={item.image} alt={item.title} style={{ width: '100%', height: 'auto' }} />
                  </div>
                  <div className="work-content">
                    <h3>
                      <Link href={`/projects/${item.slug}`}>
                        {item.title}
                      </Link>
                    </h3>
                    <span>{item.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row" style={{ width: '100%' }}>
            <div className="col-lg-12 d-flex justify-content-center">
              {displayedData.length < filteredData.length && (
                <div className="load-more-btn">
                  <button
                    className="primary-btn3"
                    onClick={() => setPage((prevPage) => prevPage + 1)}
                  >
                    Load More
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout></>
  );
}

export default ProjectMasonaryPage;
