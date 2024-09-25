import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import HomePage from "../../data/content";

function Service5() {

  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current.forEach(video => {
      if (video) {
        video.play().catch(error => {
          console.log("Autoplay was prevented. User interaction may be needed to play the video.");
        });
      }
    });
  }, []);

  return (
    <div className="home5-services-section"
    style={{ 
      backgroundImage: "url('/assets/img/Ellipse.png')",
      backgroundSize: "cover", 
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}>
      <div className="container">
        <div className="row mb-55 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
          <div className="col-lg-12">
            <div className="section-title-5 text-center">
              <span>Solutions We Offer</span>
              <h2>Services &amp; Solutions</h2>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-xl-4 col-md-6 col-sm-10  wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="solution-card magnetic-item">
              <div className="video-container icon">
                <video width="40%" height="auto" 
                ref={el => videoRefs.current[0] = el}
                autoPlay 
                loop 
                muted 
                playsInline>
                  <source src="/assets/videos/WEB DEV (1).mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="solution-content">
                <h4><Link legacyBehavior href="/service-details"><a>{HomePage.solutions[0].title}</a></Link></h4>
                <p>{HomePage.solutions[0].description}</p>
                <div className="learn-btn">
                  <Link legacyBehavior href="/service-details">
                    <a className="primary-btn8">
                      Learn More
                      <svg width={12} height={12} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-sm-10  wow animate fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
            <div className="solution-card magnetic-item">
            <div className="video-container icon">
            <video width="40%" height="auto" 
                ref={el => videoRefs.current[1] = el}
                autoPlay 
                loop 
                muted 
                playsInline>
                  <source src="/assets/videos/MOBILEAPP.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="solution-content">
                <h4><Link legacyBehavior href="/service-details"><a>{HomePage.solutions[1].title}</a></Link></h4>
                <p>{HomePage.solutions[1].description}</p>
                <div className="learn-btn">
                  <Link legacyBehavior href="/service-details">
                    <a className="primary-btn8">
                      Learn More
                      <svg width={12} height={12} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-sm-10  wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
            <div className="solution-card magnetic-item">
            <div className="video-container icon">
            <video width="40%" height="auto" 
                ref={el => videoRefs.current[2] = el}
                autoPlay 
                loop 
                muted 
                playsInline>
                  <source src="/assets/videos/SOFTWARE_DEV.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="solution-content">
                <h4><Link legacyBehavior href="/service-details"><a>{HomePage.solutions[2].title}</a></Link></h4>
                <p>{HomePage.solutions[2].description}</p>
                <div className="learn-btn">
                  <Link legacyBehavior href="/service-details">
                    <a className="primary-btn8">
                      Learn More
                      <svg width={12} height={12} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-sm-10  wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
            <div className="solution-card magnetic-item">
            <div className="video-container icon">
            <video width="40%" height="auto" 
                ref={el => videoRefs.current[3] = el}
                autoPlay 
                loop 
                muted 
                playsInline>
                  <source src="/assets/videos/DM.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="solution-content">
                <h4><Link legacyBehavior href="/service-details"><a>{HomePage.solutions[3].title}</a></Link></h4>
                <p>{HomePage.solutions[3].description}</p>
                <div className="learn-btn">
                  <Link legacyBehavior href="/service-details">
                    <a className="primary-btn8">
                      Learn More
                      <svg width={12} height={12} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-sm-10  wow animate fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
            <div className="solution-card magnetic-item">
            <div className="video-container icon">
            <video width="40%" height="auto" 
                ref={el => videoRefs.current[4] = el}
                autoPlay 
                loop 
                muted 
                playsInline>
                  <source src="/assets/videos/UIUX.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="solution-content">
                <h4><Link legacyBehavior href="/service-details"><a>{HomePage.solutions[4].title}</a></Link></h4>
                <p>{HomePage.solutions[4].description}</p>
                <div className="learn-btn">
                  <Link legacyBehavior href="/service-details">
                    <a className="primary-btn8">
                      Learn More
                      <svg width={12} height={12} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-sm-10  wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="solution-card magnetic-item">
            <div className="video-container icon">
            <video width="40%" height="auto" 
                ref={el => videoRefs.current[5] = el}
                autoPlay 
                loop 
                muted 
                playsInline>
                  <source src="/assets/videos/ERPCRM.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="solution-content">
                <h4><Link legacyBehavior href="/service-details"><a>{HomePage.solutions[5].title}</a></Link></h4>
                <p>{HomePage.solutions[5].description}</p>
                <div className="learn-btn">
                  <Link legacyBehavior href="/service-details">
                    <a className="primary-btn8">
                      Learn More
                      <svg width={12} height={12} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-sm-10  wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="solution-card magnetic-item">
            <div className="video-container icon">
            <video width="40%" height="auto" 
                ref={el => videoRefs.current[6] = el}
                autoPlay 
                loop 
                muted 
                playsInline>
                  <source src="/assets/videos/SAAS.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="solution-content">
                <h4><Link legacyBehavior href="/service-details"><a>{HomePage.solutions[6].title}</a></Link></h4>
                <p>{HomePage.solutions[6].description}</p>
                <div className="learn-btn">
                  <Link legacyBehavior href="/service-details">
                    <a className="primary-btn8">
                      Learn More
                      <svg width={12} height={12} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-sm-10  wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="solution-card magnetic-item">
            <div className="video-container icon">
            <video width="40%" height="auto" 
                ref={el => videoRefs.current[7] = el}
                autoPlay 
                loop 
                muted 
                playsInline>
                  <source src="/assets/videos/STAFFAUG.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="solution-content">
                <h4><Link legacyBehavior href="/service-details"><a>{HomePage.solutions[7].title}</a></Link></h4>
                <p>{HomePage.solutions[7].description}</p>
                <div className="learn-btn">
                  <Link legacyBehavior href="/service-details">
                    <a className="primary-btn8">
                      Learn More
                      <svg width={12} height={12} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-sm-10  wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="solution-card magnetic-item">
            <div className="video-container icon">
            <video width="40%" height="auto" 
                ref={el => videoRefs.current[8] = el}
                autoPlay 
                loop 
                muted 
                playsInline>
                  <source src="/assets/videos/AIMI.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="solution-content">
                <h4><Link legacyBehavior href="/service-details"><a>{HomePage.solutions[8].title}</a></Link></h4>
                <p>{HomePage.solutions[8].description}</p>
                <div className="learn-btn">
                  <Link legacyBehavior href="/service-details">
                    <a className="primary-btn8">
                      Learn More
                      <svg width={12} height={12} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service5
