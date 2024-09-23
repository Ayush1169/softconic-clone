'use client';
import React, { useMemo, useState, useEffect, useRef } from "react";
import Image from "next/image";
import SwiperCore, { Autoplay, EffectFade, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

SwiperCore.use([Navigation, Autoplay, EffectFade, Thumbs]);

// Import your images
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

const SECTIONS = [
  {
    title: "Vision",
    subtitle: "A Visionary Approach to Technical Excellence",
    mainImage: vision,
    items: [
      {
        image: img1,
        title: "Integration of Innovative Technology",
        description: "EVD envisions a future where education seamlessly integrates innovative technology, transforming traditional learning into a dynamic and personalized experience"
      },
      {
        image: img2,
        title: "Empowerment of Educators",
        description: "The platform aims to empower educators by providing them with cutting-edge tools and resources, enabling more effective and engaging teaching methods"
      },
      {
        image: img3,
        title: "Inspiring Learners",
        description: "EVD strives to inspire learners by creating an environment that fosters curiosity, adaptability, and a love for continuous learning"
      },
      {
        image: img4,
        title: "Increased Satisfaction",
        description: "Parental and stakeholder satisfaction levels saw a significant rise across all institutions, reflecting the tangible benefits experienced by students and educators alike"
      }
    ]
  },
  {
    title: "Goal",
    subtitle: "A Visionary Approach to Technical Excellence",
    mainImage: Goal,
    items: [
      {
        image: img7,
        title: "Digitization of Every Educational Stream:",
        description: "EVD envisions a future where education seamlessly integrates innovative technology, transforming traditional learning into a dynamic and personalized experience"
      },
      {
        image: img6,
        title: "Integration of Technology in Education:",
        description: "The platform aims to empower educators by providing them with cutting-edge tools and resources, enabling more effective and engaging teaching methods"
      },
      {
        image: img7,
        title: "Catalyst for Adaptive Learning and AI:",
        description: "EVD strives to inspire learners by creating an environment that fosters curiosity, adaptability, and a love for continuous learning"
      }
    ]
  },
  {
    title: "Focus Area",
    subtitle: "A Visionary Approach to Technical Excellence",
    mainImage: focusarea,
    items: [
      {
        image: img7,
        title: "Adaptive Learning Platforms:",
        description: "EVD envisions a future where education seamlessly integrates innovative technology, transforming traditional learning into a dynamic and personalized experience"
      },
      {
        image: img6,
        title: "AI Integration:",
        description: "The platform aims to empower educators by providing them with cutting-edge tools and resources, enabling more effective and engaging teaching methods"
      },
      {
        image: img6,
        title: "Gamification and Learning Apps:",
        description: "EVD strives to inspire learners by creating an environment that fosters curiosity, adaptability, and a love for continuous learning"
      },
      {
        image: img5,
        title: "Real-time Assessment and Feedback:",
        description: "EVD strives to inspire learners by creating an environment that fosters curiosity, adaptability, and a love for continuous learning"
      }
    ]
  }
];

const Vision = () => {
  const [swiperThumbs, updateSwiperThumbs] = useState(null);
  const swiperRef = useRef(null); // Create a ref for the Swiper instance

  useEffect(() => {
    if (swiperThumbs) {
      swiperThumbs.controller.control = swiperThumbs;
    }
  }, [swiperThumbs]);

  const thumbs = useMemo(() => ({
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
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 1 },
      768: { slidesPerView: 1 },
      992: { slidesPerView: 1 },
      1200: { slidesPerView: 1 },
      1400: { slidesPerView: 1 },
    },
  }), []);

  return (
    <div className="section-vision"
    style={{ 
      backgroundImage: "url('/assets/img/Ellipse.png')",
      backgroundSize: "cover", 
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}>
      <div>
        <Swiper {...thumbs} className="swiper testi-content-slider3" ref={swiperRef}>
          <div className="swiper-wrapper">
            {SECTIONS.map((section, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <div className="vision-section">
                  <div className="container">
                    <div className="row justify-content-center mb-50">
                      <div className="col-lg-10">
                        <div className="section-title-vision-one text-center">
                          <h4>{section.title}</h4>
                          <h1>{section.subtitle}</h1>
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                        {section.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="vision-section-one">
                            <div style={{ display: "flex" }}>
                              <Image className="img" src={item.image} alt={`img${itemIndex + 1}`} />
                              <div className="vision-content" style={{ display: "flex", flexDirection: "column" }}>
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                        <div className="vision-section-one">
                          <div className="vision-section-img">
                            <Image src={section.mainImage} alt={`${section.title.toLowerCase()}-image`} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>

      <div className="col-lg-12"
      style={{
        marginTop: "30px"
      }}>
        <div className="slider-arrows arrow-style-two d-flex justify-content-center gap-4">
          <div
            className="swiper-prev-arrow testi-three-prev"
            tabIndex={0}
            role="button"
            aria-label="Previous slide"
            style={{ cursor: 'pointer' }}
            onClick={() => swiperRef.current.swiper.slidePrev()} // Link button to previous slide
          >
            <ChevronLeft color="green" size={24} />
          </div>
          <div
            className="swiper-next-arrow testi-three-next"
            tabIndex={0}
            role="button"
            aria-label="Next slide"
            style={{ cursor: 'pointer' }}
            onClick={() => swiperRef.current.swiper.slideNext()} // Link button to next slide
          >
            <ChevronRight color="green" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
