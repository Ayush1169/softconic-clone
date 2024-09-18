import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import BlogBanner from "../components/blog/BlogBanner";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/layout/Layout";

function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchBlogs(currentPage);
  }, [currentPage]);

  const fetchBlogs = (page) => {
    axios
      .get(
        `https://blog.evdtechnology.com/wp-json/wp/v2/posts?_embed&per_page=9&page=${page}`
      )
      .then((response) => {
        setBlogs(response.data);
        setTotalPages(parseInt(response.headers["x-wp-totalpages"]) || 1);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  };

  const truncateTitle = (title, lines = 2) => {
    return {
      display: "-webkit-box",
      WebkitLineClamp: lines,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      textOverflow: "ellipsis",
    };
  };

  return (
    <Layout>
      <Breadcrumb
        pageList="Blog Grid"
        title="Exploring The Softconic Blog"
        pageName="BLOG GRID"
      />
      <BlogBanner />
      <div className="home3-blog-area sec-mar">
        <div className="container">
          <div className="row g-lg-4 gy-5">
            {blogs.map((blog) => {
              const { title, date, _embedded, id } = blog;
              const category =
                blog.categories[0] === 1 ? "Web Development" : "Cloud Solutions";
              const img =
                _embedded["wp:featuredmedia"]?.[0]?.source_url ||
                "/default-image.jpg";
              const count_comment = _embedded.replies?.length || 0;

              return (
                <div
                  key={id}
                  className="col-lg-4 col-md-6 wow animate fadeInLeft"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <div className="single-blog magnetic-item">
                    <div className="blog-img">
                      <img
                        className="img-fluid"
                        src={img}
                        alt={title.rendered}
                      />
                      <div className="blog-tag">
                        <Link href="/blog">{category}</Link>
                      </div>
                    </div>
                    <div className="blog-content">
                      <ul className="blog-meta">
                        <li>
                          <Link href="/blog">
                            {new Date(date).toLocaleDateString()}
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog">Comment ({count_comment})</Link>
                        </li>
                      </ul>
                      <h4 style={truncateTitle(title.rendered, 2)}>
                        <Link href="/blog-details">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: title.rendered,
                            }}
                          />
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                  <a
                    className="page-link"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  >
                    <i className="bi bi-arrow-left" />
                  </a>
                </li>
                {[...Array(totalPages).keys()].map((page) => (
                  <li
                    key={page}
                    className={`page-item ${currentPage === page + 1 ? "active" : ""}`}
                  >
                    <a className="page-link" onClick={() => setCurrentPage(page + 1)}>
                      {page + 1}
                    </a>
                  </li>
                ))}
                <li
                  className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
                >
                  <a
                    className="page-link"
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  >
                    <i className="bi bi-arrow-right" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogPage;
