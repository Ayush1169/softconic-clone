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
    <div className="home3-blog-area sec-mar"
      style={{
        backgroundImage: "url('/assets/img/Ellipse.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}>
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
            <div
              key={index}
              className="col-lg-4 col-md-6 wow animate fadeInUp"
              data-wow-delay={`${200 + index * 100}ms`}
              data-wow-duration="1500ms"
            >
              <div className="single-blog magnetic-item">
                <div
                  className="blog-img"
                  style={{
                    height: '200px',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={blog._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url}
                    alt={blog.title.rendered}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div className="blog-content"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '250px',
                  }}>
                  <ul className="blog-meta" style={{ listStyle: 'none', padding: 0 }}>
                    <li>
                      <Link legacyBehavior href="/blog">
                        <a>{new Date(blog.date).toLocaleDateString()}</a>
                      </Link>
                    </li>
                  </ul>
                  <h4>
                    <Link legacyBehavior href="/blog-details">
                      <a dangerouslySetInnerHTML={{ __html: blog.title.rendered }} />
                    </Link>
                  </h4>
                  <div className="blog-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="read-btn">
                      <Link legacyBehavior href="/blog-details">
                        <a href={blog.link} target="_blank" rel="noopener noreferrer">
                          Read More
                          <svg width={12} height={12} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                          </svg>
                        </a>
                      </Link>
                    </div>
                    <div className="social-area" style={{ display: 'flex', alignItems: 'center' }}>
                      <ul style={{ display: 'flex', gap: '10px', listStyle: 'none', padding: 0 }}>

                        <li><a target="_blank" href="https://www.facebook.com/evdtechnologyofficial/"><i className="bx bxl-facebook" /></a></li>
                        <li><a target="_blank" href="https://www.youtube.com/@evdtechnology6379"><i className="bx bxl-youtube" /></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/company/evdtechnologyllp"><i className="bx bxl-linkedin" /></a></li>
                        <li><a target="_blank" href="https://www.instagram.com/evdtechnologyllp/"><i className="bx bxl-instagram" /></a></li>

                      </ul>
                      <span>
                        <img
                          src="assets/img/home-3/plain-icon.svg"
                          alt=""
                          style={{ width: '20px', height: '20px' }}
                        />
                      </span>
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
