'use client';
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from "../../../public/assets/img/Applicability/img1.svg";
import img2 from "../../../public/assets/img/Applicability/img2.svg";
import img3 from "../../../public/assets/img/Applicability/img3.svg";
import img4 from "../../../public/assets/img/Applicability/img4.svg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const Applicability = () => {
  const [swiper, setSwiper] = useState(null);

  const applicabilityData = [
    {
      id: 1,
      title: "Coaching Institutes",
      description1: "Personalized Learning Paths",
      description2: "Real-time Assessment",
      img: img1,
    },
    {
      id: 2,
      title: "Music, Arts, Dance and any other Training",
      description1: "Interactive Learning Modules",
      description2: "Performance Analytics",
      img: img2,
    },
    {
      id: 3,
      title: "Pre-K (Pre-Kindergarten)",
      description1: "Engaging Early Learning Content",
      description2: "Parental Involvement",
      img: img3,
    },
    {
      id: 4,
      title: "K-12",
      description1: "Comprehensive Learning Resources",
      description2: "Parent-Teacher Collaboration",
      img: img4,
    },
    {
      id: 5,
      title: "Higher Education",
      description1: "Advanced Learning Resources",
      description2: "Research and Collaboration",
      img: img3,
    },
    {
      id: 6,
      title: "Workforce Training",
      description1: "Continuous Learning Opportunities",
      description2: "Corporate Training Modules",
      img: img3,
    },
  ];

  return (
    <div className="applicability" style={{paddingBottom: "50px"}}>
      <div className="container">
        <div className="row justify-content-center mb-50">
          <div className="col-lg-10">
            <div className="section-title-applicability text-center">
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
            <Swiper
              modules={[Navigation, Autoplay, EffectFade]}
              onSwiper={setSwiper}
              slidesPerView={3}
              loop={true}
              spaceBetween={10}
              speed={1500}
              navigation={{
                nextEl: ".swiper-next-arrow",
                prevEl: ".swiper-prev-arrow",
              }}
              breakpoints={{
                280: { slidesPerView: 1 },
                386: { slidesPerView: 1 },
                576: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
                1400: { slidesPerView: 3 },
              }}
              className="swiper"
            >
              {applicabilityData.map(item => (
                <SwiperSlide key={item.id} className="swiper-slide">
                  <div className="applicability-card py-5">
                    <div className="applicability-one">
                      <div className="applicability-one-icon pic">
                        <Image src={item.img} alt={item.title} />
                      </div>
                      <div className="applicability-one-info">
                        <h3>{item.title}</h3>
                        <p>{item.description1}<br />{item.description2}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="col-lg-12">
            <div className="slider-arrows arrow-style-two d-flex justify-content-center gap-4">
              <div
                className="swiper-prev-arrow"
                tabIndex={0}
                role="button"
                aria-label="Previous slide"
                onClick={() => swiper?.slidePrev()}
                style={{ cursor: 'pointer' }}
              >
                <ChevronLeft color="green" size={24} />
              </div>
              <div
                className="swiper-next-arrow"
                tabIndex={0}
                role="button"
                aria-label="Next slide"
                onClick={() => swiper?.slideNext()}
                style={{ cursor: 'pointer' }}
              >
                <ChevronRight color="green" size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applicability;