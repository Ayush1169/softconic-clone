import BlogBanner from "../components/blog/BlogBanner";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/layout/Layout";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function BlogSidebarPage() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [newestPosts, setNewestPosts] = useState([]);

  // Fetch blog posts with pagination and search
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        let url = `https://blog.evdtechnology.com/wp-json/wp/v2/posts?_embed&per_page=6&page=${page}`;

        if (searchQuery) {
          url += `&search=${searchQuery}`;
        }

        const response = await fetch(url);
        const data = await response.json();

        setPosts(data);

        // WordPress provides total pages in headers for pagination
        const totalPosts = response.headers.get("X-WP-Total");
        setTotalPages(Math.ceil(totalPosts / 6));
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    // Fetch blog categories
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://blog.evdtechnology.com/wp-json/wp/v2/categories");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    // Fetch the top 3 newest posts
    const fetchNewestPosts = async () => {
      try {
        const response = await fetch("https://blog.evdtechnology.com/wp-json/wp/v2/posts?_embed&per_page=3");
        const data = await response.json();
        setNewestPosts(data);
      } catch (error) {
        console.error("Error fetching newest posts:", error);
      }
    };

    fetchPosts();
    fetchCategories();
    fetchNewestPosts();
  }, [page, searchQuery]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
    setPage(1);
  };

  return (
    <Layout >
      <Breadcrumb
        pageList="BLOG SIDEBAR"
        title="Exploring The Softconic Blog"
        pageName="Blog Sidebar"
      />
      <div className="home3-blog-area sec-mar"
       style={{ 
        backgroundImage: "url('/assets/img/Ellipse.png')",
        backgroundSize: "cover", 
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}>
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-8">
              <div className="row g-lg-4 gy-5">
                {posts.map((post) => (
                  <div
                    className="col-md-6 wow animate fadeInLeft"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                    key={post.id}
                  >
                    <div className="single-blog magnetic-item">
                      <div className="blog-img">
                        <img
                          src={post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url}
                          alt={post.title.rendered}
                          style={{
                            width: '100%', // This ensures the image takes up the full width of its container
                            height: '200px', // Set a fixed height (adjust as needed)
                            objectFit: 'cover' // Ensures the image maintains aspect ratio and fills the area
                          }}
                        />

                        <div className="blog-tag">
                          <Link legacyBehavior href="/blog">
                            <a>{post.categories[0]?.name}</a>
                          </Link>
                        </div>
                      </div>
                      <div className="blog-content">
                        <ul className="blog-meta">
                          <li>
                            <Link legacyBehavior href="/blog">
                              <a>{new Date(post.date).toLocaleDateString()}</a>
                            </Link>
                          </li>
                          <li>
                            <Link legacyBehavior href="/blog">
                              <a>Comment (3)</a>
                            </Link>
                          </li>
                        </ul>
                        <h4 style={{
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}>
                          <Link legacyBehavior href={`/blog-details/${post.id}`}>
                            <a>{post.title.rendered}</a>
                          </Link>
                        </h4>

                        <div className="blog-footer">
                          <div className="read-btn">
                            <Link legacyBehavior href={`/blog-details/${post.id}`}>
                              <a>
                                Read More
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                                </svg>
                              </a>
                            </Link>
                          </div>
                          <div className="social-area">
                            {/* Social sharing icons */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Pagination */}
              <div className="row">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center">
                    <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
                      <a className="page-link" onClick={() => handlePageChange(page - 1)}>
                        <i className="bi bi-arrow-left" />
                      </a>
                    </li>
                    {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNum) => (
                      <li className={`page-item ${pageNum === page ? "active" : ""}`} key={pageNum}>
                        <a className="page-link" onClick={() => handlePageChange(pageNum)}>
                          {pageNum}
                        </a>
                      </li>
                    ))}
                    <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
                      <a className="page-link" onClick={() => handlePageChange(page + 1)}>
                        <i className="bi bi-arrow-right" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="widget-area">
                <div className="single-widgets widget_search">
                  <form onSubmit={handleSearch}>
                    <div className="wp-block-search__inside-wrapper">
                      <input
                        type="search"
                        className="wp-block-search__input"
                        name="s"
                        placeholder="Search Here"
                        value={searchQuery}
                        onChange={handleSearch}
                      />
                      <button type="submit" className="wp-block-search__button primary-btn3">
                        Search
                      </button>
                    </div>
                  </form>
                </div>
                <div className="single-widgets widget_egns_categoris">
                  <div className="widget-title">
                    <h4>Category</h4>
                  </div>
                  <ul className="wp-block-categoris-cloud">
                    {categories.map((category) => (
                      <li key={category.id}>
                        <Link legacyBehavior href={`/blog?category=${category.slug}`}>
                          <a>
                            <span>{category.name}</span> <span className="number-of-categoris">({category.count})</span>
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="single-widgets widget_egns_recent_post">
                  <div className="widget-title">
                    <h4>Newest Posts</h4>
                  </div>
                  <div className="recent-post-wraper">
                    {newestPosts.map((post) => (
                      <div className="widget-cnt">
                        <div className="wi">
                          <Link legacyBehavior href="/blog-details">
                            <a>
                              <img
                                src={post._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large.source_url}
                                alt="image"
                              />
                            </a>
                          </Link>
                        </div>
                        <div className="wc">
                          <h6
                          >
                            <Link legacyBehavior href="/blog-details">
                              <a>{post.title.rendered}</a>
                            </Link>
                          </h6>
                          <Link legacyBehavior href="/blog">
                            <a>{new Date(post.date).toLocaleDateString()}</a>
                          </Link>
                        </div>
                      </div>
                    ))}


                  </div>
                </div>
                <div className="single-widgets widget_egns_tag">
                  <div className="widget-title">
                    <h4>All Tag</h4>
                  </div>
                  <p className="wp-block-tag-cloud">
                    <Link legacyBehavior href="/blog">
                      <a>Website</a>
                    </Link>
                    <Link legacyBehavior href="/blog">
                      <a>Web Design</a>
                    </Link>
                    <Link legacyBehavior href="/blog">
                      <a>Development</a>
                    </Link>
                    <Link legacyBehavior href="/blog">
                      <a>Graphic Design</a>
                    </Link>
                    <Link legacyBehavior href="/blog">
                      <a>Graphic</a>
                    </Link>
                    <Link legacyBehavior href="/blog">
                      <a>UI/UX Design</a>
                    </Link>
                    <Link legacyBehavior href="/blog">
                      <a>Activities</a>
                    </Link>
                    <Link legacyBehavior href="/blog">
                      <a>Software Design</a>
                    </Link>
                    <Link legacyBehavior href="/blog">
                      <a>3D Design</a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogSidebarPage;
