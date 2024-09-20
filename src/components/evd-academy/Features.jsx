'use client'
import React, { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import SwiperCore, { Autoplay, EffectFade, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, EffectFade, Thumbs]);


import img1 from "../../../public/assets/img/Features/img1.svg";
import img2 from "../../../public/assets/img/Features/img2.svg";
import img3 from "../../../public/assets/img/Features/img3.svg";
import img4 from "../../../public/assets/img/Features/img4.svg";
import ArrowLeft from "../../../public/assets/img/icons/arrowLeft.svg";
import ArrowRight from "../../../public/assets/img/icons/arrowRight.svg";


const thumbs = {
  swiper: null,
};
const Features = () => {

  // Swiper thumbsinstance
  const [swiperThumbs, updateSwiperThumbs] = useState(null);
  useEffect(() => {
    if (swiperThumbs) {
      swiperThumbs.controller.control = swiperThumbs;
    }
  }, [swiperThumbs]);

  const thumbs = useMemo(() => {
    return {
      slidesPerView: 4,
      getSwiper: updateSwiperThumbs,
      loop: true,
      spaceBetween: 10,
      speed: 1500,
      navigation: {
        nextEl: ".testi-three-next",
        prevEl: ".testi-three-prev",
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 4,
        },
      },

    };
  }, []);

  return (
    <div className="Features">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-title-Features text-center">
              <h4>Features</h4>

              <h1>
                A Visionary Approach to <br /> Technical Excellence
              </h1>
            </div>
          </div>


          <div className="row justify-content-center">
          <div className="row justify-content-center Features-one-container">
          <Swiper {...thumbs} className="swiper testi-content-slider3">

              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="Features-one">
                    <div className="Features-one-icon">
                      <Image src={img1} alt="Features-one-Digitization1"/>
                    </div>
                    <div className="Features-one-info">
                      <h4> Student Information System</h4>
                      <p>
                        Streamlining student data management for efficient tracking
                        and reporting.
                      </p>
                    </div>
                   
                  </div>
                </SwiperSlide>



                <SwiperSlide className="swiper-slide">
                  <div className="Features-one">
                    <div className="Features-one-icon">
                      <Image src={img2} alt="Features-one-Digitization2"/>
                    </div>
                    <div className="Features-one-info">
                      <h4> Course Management</h4>
                      <p>
                        Facilitating the organization and structuring of educational courses.
                      </p>
                    </div>
                  
                  </div>
                </SwiperSlide>



                <SwiperSlide className="swiper-slide">
                  <div className="Features-one">
                    <div className="Features-one-icon">
                      <Image src={img3} alt="Features-one-Digitization3"/>
                    </div>
                    <div className="Features-one-info">
                      <h4> Attendance Tracking</h4>
                      <p>
                        Real-time monitoring of student attendance, promoting accountability.
                      </p>
                    </div>
                   
                  </div>
                </SwiperSlide>


                
                <SwiperSlide className="swiper-slide">
                  <div className="Features-one">
                    <div className="Features-one-icon">
                      <Image src={img4} alt="Features-one-Digitization4"/>
                    </div>
                    <div className="Features-one-info">
                   
                      <h4> Assignment and Grading System</h4>
                   
                      <p>
                        Automating the assignment submission and grading process for teachers and students.
                      </p>
                  
                    </div>
                   
                  </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <div className="Features-one">
                    <div className="Features-one-icon">
                      <Image src={img4} alt="Features-one-Digitization4"/>
                    </div>
                    <div className="Features-one-info">
                   
                      <h4>Resource Management:</h4>
                   
                      <p>
                      Efficient allocation and utilization of educational resources
                      </p>
                  
                    </div>
                   
                  </div>
                </SwiperSlide>



                <SwiperSlide className="swiper-slide">
                  <div className="Features-one">
                    <div className="Features-one-icon">
                      <Image src={img4} alt="Features-one-Digitization4"/>
                    </div>
                    <div className="Features-one-info">
                   
                      <h4>Finance and Billing:</h4>
                   
                      <p>
                      Streamlining financial processes, including billing and invoicing
                      </p>
                  
                    </div>
                   
                  </div>
                </SwiperSlide>



                <SwiperSlide className="swiper-slide">
                  <div className="Features-one">
                    <div className="Features-one-icon">
                      <Image src={img4} alt="Features-one-Digitization"/>
                    </div>
                    <div className="Features-one-info">
                   
                      <h4> Library Management:</h4>
                   
                      <p>
                      Digital cataloging and management of educational resources.
                      </p>
                  
                    </div>
                   
                  </div>
                </SwiperSlide>



                <SwiperSlide className="swiper-slide">
                  <div className="Features-one">
                    <div className="Features-one-icon">
                      <Image src={img4} alt="Features-one-Digitization4"/>
                    </div>
                    <div className="Features-one-info">
                   
                      <h4> Communication Hub:</h4>
                   
                      <p>
                      A centralized platform for communication among students, teachers, and parents
                      </p>
                  
                    </div>
                   
                  </div>
                </SwiperSlide>





                <SwiperSlide className="swiper-slide">
                  <div className="Features-one">
                    <div className="Features-one-icon">
                      <Image alt="Features-one-Digitization" src={img4} />
                    </div>
                    <div className="Features-one-info">
                   
                      <h4>Security and Access Control:</h4>
                   
                      <p>
                      Ensuring data security through robust access controls and encryption measures
                      </p>
                  
                    </div>
                   
                  </div>
                </SwiperSlide>






                <SwiperSlide className="swiper-slide">
                  <div className="Features-one">
                    <div className="Features-one-icon">
                      <Image alt="Features-one-Digitization" src={img4} />
                    </div>
                    <div className="Features-one-info">
                   
                      <h4> Reporting and Analytics</h4>
                   
                      <p>
                      Generating insightful reports and analytics for informed decision-making.
                      </p>
                  
                    </div>
                   
                  </div>
                </SwiperSlide>


              </div>
            </Swiper>
            </div>





            <div className="col-lg-12">
              <div className="slider-arrows arrow-style-two d-flex  justify-content-center gap-4">
                <div
                  className="swiper-prev-arrow testi-three-prev"
                  tabIndex={0}
                  role="button"
                  aria-label="Previous slide"
                >
                  <Image src={ArrowLeft} alt="Arrow Left" />
                </div>
                <div
                  className="swiper-next-arrow testi-three-next"
                  tabIndex={0}
                  role="button"
                  aria-label="Next slide"
                >
                  <Image src={ArrowRight} alt="Arrow Right" />
                </div>
              </div>
            </div>
          </div>




        </div>

      </div>
    </div>
  );
};

export default Features;
