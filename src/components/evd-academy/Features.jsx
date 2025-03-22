"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

import img1 from "../../../public/assets/img/Features/img1.svg";
import img2 from "../../../public/assets/img/Features/img2.svg";
import img3 from "../../../public/assets/img/Features/img3.svg";
import img4 from "../../../public/assets/img/Features/img4.svg";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const Features = () => {
  const swiperRef = useRef(null);

  const swiperParams = {
    modules: [Navigation, Autoplay, EffectFade],
    slidesPerView: 4,
    loop: true,
    spaceBetween: 10,
    speed: 1500,
    navigation: {
      nextEl: ".testi-three-next",
      prevEl: ".testi-three-prev",
    },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
      1400: { slidesPerView: 4 },
    },
  };

  const featuresData = [
    {
      icon: img1,
      title: "Student Information System",
      description:
        "Streamlining student data management for efficient tracking and reporting.",
    },
    {
      icon: img2,
      title: "Course Management",
      description:
        "Facilitating the organization and structuring of educational courses.",
    },
    {
      icon: img3,
      title: "Attendance Tracking",
      description:
        "Real-time monitoring of student attendance, promoting accountability.",
    },
    {
      icon: img4,
      title: "Assignment and Grading System",
      description:
        "Automating the assignment submission and grading process for teachers and students.",
    },
    {
      icon: img4,
      title: "Resource Management",
      description:
        "Efficient allocation and utilization of educational resources",
    },
    {
      icon: img4,
      title: "Finance and Billing",
      description:
        "Streamlining financial processes, including billing and invoicing",
    },
    {
      icon: img4,
      title: "Library Management",
      description:
        "Digital cataloging and management of educational resources.",
    },
    {
      icon: img4,
      title: "Communication Hub",
      description:
        "A centralized platform for communication among students, teachers, and parents",
    },
    {
      icon: img4,
      title: "Security and Access Control",
      description:
        "Ensuring data security through robust access controls and encryption measures",
    },
    {
      icon: img4,
      title: "Reporting and Analytics",
      description:
        "Generating insightful reports and analytics for informed decision-making.",
    },
  ];

  return (
    <div className="Features">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-title-Features text-center">
              <h4>Features</h4>
              <h1>
                A Visionary Approach to <br /> Technical Excellence
              </h1>
            </div>
          </div>

          <div className="row justify-content-center Features-one-container">
            <Swiper
              {...swiperParams}
              ref={swiperRef}
              className="swiper testi-content-slider3"
            >
              {featuresData.map((feature, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                  <div className="Features-one">
                    <div className="Features-one-icon">
                      <img
                        src={feature.icon.src}
                        alt={`Features-one-Digitization${index + 1}`}
                      />
                    </div>
                    <div className="Features-one-info">
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="col-lg-12">
            <div className="slider-arrows arrow-style-two d-flex justify-content-center gap-4">
              <div
                className="swiper-prev-arrow testi-three-prev"
                onClick={() => swiperRef.current.swiper.slidePrev()}
                style={{ cursor: "pointer", color: "green", marginTop: "35px" }} // Inline CSS for green color
              >
                <ChevronLeft />
              </div>
              <div
                className="swiper-next-arrow testi-three-next"
                onClick={() => swiperRef.current.swiper.slideNext()}
                style={{ cursor: "pointer", color: "green", marginTop: "35px" }} // Inline CSS for green color
              >
                <ChevronRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
