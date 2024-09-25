import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import HomePage from "../../data/content";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

function Testimonial3() {
  return (
    <div className="home3-testimonil-area sec-mar"
    style={{ 
      backgroundImage: "url('/assets/img/Ellipse.png')",
      backgroundSize: "cover", 
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}>
      <div className="container">
        <div className="row mb-55 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
          <div className="col-lg-12 d-flex align-items-center justify-content-between gap-4 flex-wrap">
            <div className="section-title-3">
              <h2>{HomePage.happyClients.title}</h2>
              <p>{HomePage.happyClients.description}</p>
            </div>
            <div className="swiper-btn-group">
              <div className="swiper-btn prevbtn2">
                <i className="bi bi-arrow-left" />
              </div>
              <div className="swiper-btn nextbtn2">
                <i className="bi bi-arrow-right" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              loop={true}
              spaceBetween={30}
              speed={2000}
              centeredSlides={true}
              navigation={{
                nextEl: ".nextbtn2",
                prevEl: ".prevbtn2",
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                280: { slidesPerView: 1 },
                386: { slidesPerView: 1 },
                576: { slidesPerView: 1 },
                768: { slidesPerView: 1.5 },
                992: { slidesPerView: 2 },
                1200: { slidesPerView: 2 },
                1400: { slidesPerView: 2 },
              }}
              className="home3-testimonial-slider"
            >
              {HomePage.testimonials.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="testimonial-card3">
                    <div className="quate-icon">
                      <img src="" alt="" />
                    </div>
                    <div className="testimonial-top">
                      <div className="review-left">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="review-right">
                        <img src="assets/img/home-4/trastpilot-star.svg" alt="" />
                      </div>
                    </div>
                    <div className="testimonial-content">
                      <p>{item.content}</p>
                    </div>
                    <div className="testimonial-btm">
                      <div className="author-area">
                        <div className="author-content">
                          <h4>{item.author}</h4>
                          <span>{item.position}</span>
                        </div>
                      </div>
                      <div className="review-date-and-time">
                        <p>May 9, 2023</p>
                      </div>
                    </div>
                  </div>
                  <div className="author-img">
                    <img src={item.img2} alt="" style={{objectFit:"contain"}} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial3;