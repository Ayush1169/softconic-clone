import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home3Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch data using axios
    axios.get('https://blog.evdtechnology.com/wp-json/wp/v2/posts?_embed&per_page=15&page=1')
      .then(response => {
        // Set the first 3 blog posts in state
        setBlogs(response.data.slice(0, 3));
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
      });
  }, []);

  return (
    <div className="home3-blog-area sec-mar">
      <div className="container">
        <div className="row mb-55 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="section-title-3 text-center">
              <h2>Latest Blogs</h2>
              <p>Check out our latest articles</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center g-lg-4 gy-5">
          {blogs.map((blog, index) => (
            <div key={index} className="col-lg-4 col-md-6 wow animate fadeInUp" data-wow-delay={`${200 + (index * 100)}ms`} data-wow-duration="1500ms">
              <div className="single-blog magnetic-item">
                <div className="blog-img">
                  <img className="img-fluid" src={blog._embedded['wp:featuredmedia'][0].source_url} alt={blog.title.rendered} />
                  {/* <div className="blog-tag">
                    <Link legacyBehavior href="/blog">
                      <a>{blog.categories[0] === 1 ? 'Web Development' : 'Cloud Solutions'}</a>
                    </Link>
                  </div> */}
                </div>
                <div className="blog-content">
                  <ul className="blog-meta">
                    <li>
                      <Link legacyBehavior href="/blog">
                        <a>{new Date(blog.date).toLocaleDateString()}</a>
                      </Link>
                    </li>
                    <li>
                      {/* <Link legacyBehavior href="/blog">
                        <a>Comment ({blog._embedded.replies ? blog._embedded.replies.length : 0})</a>
                      </Link> */}
                    </li>
                  </ul>
                  <h4>
                    <Link legacyBehavior href="/blog-details">
                      <a dangerouslySetInnerHTML={{ __html: blog.title.rendered }} />
                    </Link>
                  </h4>
                  <div className="blog-footer">
                    <div className="read-btn">
                      <Link legacyBehavior href="/blog-details">
                        <a>
                          Read More
                          <svg width={12} height={12} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                          </svg>
                        </a>
                      </Link>
                    </div>
                    <div className="social-area">
                      <ul>
                        <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                        <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                        <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a></li>
                        <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li>
                      </ul>
                      <span><img src="assets/img/home-3/plain-icon.svg" alt="" /></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home3Blog;
