'use client'
import React, { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import SwiperCore, { Autoplay, EffectFade, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, EffectFade, Thumbs]);

import vision from "../../../public/assets/img/Vision-goal-focusarea/visionimg.svg";
import Goal from "../../../public/assets/img/Vision-goal-focusarea/Goal.svg";
import focusarea from "../../../public/assets/img/Vision-goal-focusarea/focusarea.svg";
import img1 from "../../../public/assets/img/Vision-goal-focusarea/img1.svg";
import img2 from "../../../public/assets/img/Vision-goal-focusarea/img2.svg";
import img3 from "../../../public/assets/img/Vision-goal-focusarea/img3.svg";
import img4 from "../../../public/assets/img/Vision-goal-focusarea/img4.svg";
import img5 from "../../../public/assets/img/Vision-goal-focusarea/img5.svg";
import img6 from "../../../public/assets/img/Vision-goal-focusarea/img6.svg";
import img7 from "../../../public/assets/img/Vision-goal-focusarea/img7.svg";
import ArrowLeft from "../../../public/assets/img/icons/arrowLeft.svg";
import ArrowRight from "../../../public/assets/img/icons/arrowRight.svg";



const thumbs = {
  swiper: null,
};

const Vision = () => {
  const [swiperThumbs, updateSwiperThumbs] = useState(null);
  useEffect(() => {
    if (swiperThumbs) {
      swiperThumbs.controller.control = swiperThumbs;
    }
  }, [swiperThumbs]);

  const thumbs = useMemo(() => {
    return {
      slidesPerView: 1,
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
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 1,
        },
        1200: {
          slidesPerView: 1,
        },
        1400: {
          slidesPerView: 1,
        },
      },

    };
  }, []);
  return (


    <>
    <div className="section-vision">
      <div>
        <Swiper {...thumbs} className="swiper testi-content-slider3">

          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="vision-section">
                <div className="container ">
                  <div className="row justify-content-center mb-50">
                    <div className="col-lg-10">
                      <div className="section-title-vision-one text-center">
                        <h4> Vision</h4>

                        <h1>
                          A Visionary Approach to <br /> Technical Excellence
                        </h1>
                      </div>
                    </div>



                    <div className="col-xxl-6 col-xl-6  col-lg-6 col-md-6 ">
                      <div className="vision-section-one">
                        <div style={{ display: "flex" }}>
                          <Image className="img" src={img1} alt="img1"/>

                          <div
                            className="vision-content"
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <h1>Integration of Innovative Technology</h1>
                            <p>
                              EVD envisions a future where education seamlessly integrates
                              innovative technology, transforming traditional learning
                              into a dynamic and personalized experience
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="vision-section-one">
                        <div style={{ display: "flex" }}>
                          <Image src={img2} alt="img2" />

                          <div
                            className="vision-content"
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <h1>Empowerment of Educators</h1>
                            <p>
                              The platform aims to empower educators by providing them with cutting-edge tools and resources, enabling more effective and engaging teaching methods
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="vision-section-one">
                        <div style={{ display: "flex" }}>
                          <Image src={img3}  alt="img3" />

                          <div
                            className="vision-content"
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <h1>Inspiring Learners</h1>
                            <p>
                              EVD strives to inspire learners by creating an environment that fosters curiosity, adaptability, and a love for continuous learning
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="vision-section-one">
                        <div style={{ display: "flex" }}>
                          <Image src={img4}  alt="img4" />

                          <div
                            className="vision-content"
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <h1>Increased Satisfaction</h1>
                            <p>
                              Parental and stakeholder satisfaction levels saw a significant rise across all institutions, reflecting the tangible benefits experienced by students and educators alike
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xxl-6 col-xl-6  col-lg-6 col-md-6">
                      <div className="vision-section-one">
                        <div className="vision-section-img">
                          <Image src={vision} alt="vision1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide className="swiper-slide">
              <div className="vision-section">
                <div className="container ">
                  <div className="row justify-content-center mb-50">
                    <div className="col-lg-10">
                      <div className="section-title-vision-one text-center">
                        <h4> Goal</h4>

                        <h1>
                          A Visionary Approach to <br /> Technical Excellence
                        </h1>
                      </div>
                    </div>


                    <div className="col-xxl-6 col-xl-6  col-lg-6 col-md-6">
                      <div className="vision-section-one">
                        <div className="vision-section-img">
                          <Image src={Goal}  alt="goal" />
                        </div>
                      </div>
                    </div>

                    <div className="col-xxl-6 col-xl-6  col-lg-6 col-md-6 ">
                      <div className="vision-section-one">
                        <div style={{ display: "flex" }}>
                          <Image className="img" src={img7}  alt="img7" />

                          <div
                            className="vision-content"
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <h1>Digitization of Every Educational Stream:</h1>
                            <p>
                              EVD envisions a future where education seamlessly integrates innovative technology, transforming traditional learning into a dynamic and personalized experience
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="vision-section-one">
                        <div style={{ display: "flex" }}>
                          <Image src={img6}  alt="img6" />

                          <div
                            className="vision-content"
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <h1>Integration of Technology in Education:</h1>
                            <p>
                              The platform aims to empower educators by providing them with cutting-edge tools and resources, enabling more effective and engaging teaching methods
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="vision-section-one">
                        <div style={{ display: "flex" }}>
                          <Image src={img7}  alt="img7"/>

                          <div
                            className="vision-content"
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <h1>Catalyst for Adaptive Learning and AI:</h1>
                            <p>
                              EVD strives to inspire learners by creating an environment that fosters curiosity, adaptability, and a love for continuous learning
                            </p>
                          </div>
                        </div>
                      </div>


                    </div>


                  </div>
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide className="swiper-slide">
              <div className="vision-section">
                <div className="container ">
                  <div className="row justify-content-center mb-50">
                    <div className="col-lg-10">
                      <div className="section-title-vision-one text-center">
                        <h4>Focus Area</h4>

                        <h1>
                          A Visionary Approach to <br /> Technical Excellence
                        </h1>
                      </div>
                    </div>

                    <div className="col-xxl-6 col-xl-6  col-lg-6 col-md-6 ">
                      <div className="vision-section-one">
                        <div style={{ display: "flex" }}>
                          <Image className="img" src={img7} alt="img7" />

                          <div
                            className="vision-content"
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <h1>Adaptive Learning Platforms:</h1>
                            <p>
                              EVD envisions a future where education seamlessly integrates innovative technology, transforming traditional learning into a dynamic and personalized experience
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="vision-section-one">
                        <div style={{ display: "flex" }}>
                          <Image src={img6}  alt="img6"/>

                          <div
                            className="vision-content"
                            style={{ display: "flex", flexDirection: "column"}}
                          >
                            <h1>AI Integration:</h1>
                            <p>
                              The platform aims to empower educators by providing them with cutting-edge tools and resources, enabling more effective and engaging teaching methods
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="vision-section-one">
                        <div style={{ display: "flex" }}>
                          <Image src={img6}  alt="img6"/>

                          <div
                            className="vision-content"
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <h1>Gamification and Learning Apps:</h1>
                            <p>
                              EVD strives to inspire learners by creating an environment that fosters curiosity, adaptability, and a love for continuous learning
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="vision-section-one">
                        <div style={{ display: "flex" }}>
                          <Image src={img5}  alt="img5" />

                          <div
                            className="vision-content"
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <h1>Real-time Assessment and Feedback:</h1>
                            <p>
                              EVD strives to inspire learners by creating an environment that fosters curiosity, adaptability, and a love for continuous learning
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xxl-6 col-xl-6  col-lg-6 col-md-6">
                      <div className="vision-section-one">
                        <div className="vision-section-img">
                          <Image src={focusarea}  alt="focusarea" />
                        </div>
                      </div>
                    </div>
                  </div>
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
    </>
  );
};

export default Vision;
