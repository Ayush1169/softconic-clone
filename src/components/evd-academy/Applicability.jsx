'use client'
import React, { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import SwiperCore, { Autoplay, EffectFade, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, EffectFade, Thumbs]);
import img1 from "../../../public/assets/img/Applicability/img1.svg";
import img2 from "../../../public/assets/img/Applicability/img2.svg";
import img3 from "../../../public/assets/img/Applicability/img3.svg";
import img4 from "../../../public/assets/img/Applicability/img4.svg";
import ArrowLeft from "../../../public/assets/img/icons/arrowLeft.svg";
import ArrowRight from "../../../public/assets/img/icons/arrowRight.svg";

const thumbs = {
  swiper: null,
};
const Applicability = () => {
  // Swiper thumbsinstance
  const [swiperThumbs, updateSwiperThumbs] = useState(null);
  useEffect(() => {
    if (swiperThumbs) {
      swiperThumbs.controller.control = swiperThumbs;
    }
  }, [swiperThumbs]);

  const thumbs = useMemo(() => {
    return {
      slidesPerView: 3,
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
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 3,
        },
      },

    };
  }, []);
  return (
    <div className="applicability">
      <div className="container ">
        <div className="row justify-content-center mb-50">
          <div className="col-lg-10">
            <div
              className="section-title-applicability
        text-center"
            >
              <h4>Applicability</h4>

              <h1>
                Applicability Across
                <br />
                Educational Sectors
              </h1>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="row justify-content-center applicability-one-container">
            <Swiper {...thumbs} className="swiper">

              <div className="swiper-wrapper applicability-content">
                <SwiperSlide className="swiper-slide">

                  <div className="applicability-card py-5" >
                    <div className="applicability-one">

                      <div className="applicability-one-icon pic">
                        <Image src={img1}  alt="applicability-one"  />
                      </div>
                      <div className="applicability-one-info">
                        <h3>Coaching <br /> Institutes</h3>
                        <p>1. Personalized Learning Paths<br />
                          2. Real-time Assessment   </p>

                      </div>
                    </div>
                  </div>
                </SwiperSlide>



                <SwiperSlide className="swiper-slide">
                  <div className="applicability-card py-5">
                    <div className="applicability-one">

                      <div className="applicability-one-icon pic">
                        <Image src={img2}  alt="Benefitadmin-one" />
                      </div>
                      <div className="applicability-one-info">
                        <h3>Music, Arts, Dance<br /> and any other Training</h3>
                        <p>1. Interactive Learning Modules<br />
                          2. Performance Analytics </p>

                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <div className="applicability-card  py-5">
                    <div className="applicability-one">

                      <div className="applicability-one-icon pic">
                        <Image src={img3} alt="applicability-one"  />
                      </div>
                      <div className="applicability-one-info">
                        <h3>Pre-K (Pre-Kindergarten)</h3>
                        <p>1. Engaging Early Learning Content<br />
                          2. Parental Involvement </p>

                      </div>
                    </div>
                  </div>
                </SwiperSlide>


                <SwiperSlide className="swiper-slide">
                  <div className="applicability-card  py-5">
                    <div className="applicability-one">

                      <div className="applicability-one-icon pic">
                        <Image src={img4} alt="applicability-one" />
                      </div>
                      <div className="applicability-one-info">
                        <h3>K-12</h3>
                        <p>1. Comprehensive Learning Resources<br/>
                           2. Parent-Teacher Collaboration </p>

                      </div>
                    </div>
                  </div>
                </SwiperSlide>




                <SwiperSlide className="swiper-slide">
                  <div className="applicability-card  py-5">
                    <div className="applicability-one">

                      <div className="applicability-one-icon pic">
                        <Image src={img3} alt="applicability-one"/>
                      </div>
                      <div className="applicability-one-info">
                        <h3>Higher Education:</h3>
                        <p>1. Advanced Learning Resources<br/>
                         2. Research and Collaboration</p>

                      </div>
                    </div>
                  </div>
                </SwiperSlide>




                <SwiperSlide className="swiper-slide">
                  <div className="applicability-card  py-5">
                    <div className="applicability-one">

                      <div className="applicability-one-icon pic">
                        <Image src={img3} alt="applicability-one" />
                      </div>
                      <div className="applicability-one-info">
                        <h3>Workforce Training</h3>
                        <p>1. Continuous Learning Opportunities<br/>
                           2. Corporate Training Modules </p>

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


      </div>
    </div>
  );
};

export default Applicability;

const applicability = [
  {
    id: 1,
    title: "Coaching Institutes",
    description1: "Personalized Learning Paths",
    description2: "Real-time Assessment",
  },
  {
    id: 2,
    title: "Music, Arts, Dance and any other Training",
    description1: "Interactive Learning Modules",
    description2: "Performance Analytics",
  },
  {
    id: 3,
    title: "Pre-K (Pre-Kindergarten)",
    description1: "Engaging Early Learning Content",
    description2: "Parental Involvement",
  }
]