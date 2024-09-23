"use client";
import React from "react";
import Image from "next/image";

import { Archive, Shield, ThumbsUp, Gamepad } from 'lucide-react';


const Objectives = () => {
  return (
    <div className="objective-section "> 
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-title-ten text-center">
              <h4> Objectives</h4>

              <h1>
                A Visionary Approach to <br /> Technical Excellence
              </h1>
            </div>
          </div>
        </div>



        <div className="row justify-content-center objective-section-container">
          <div className="col-xxl-3 col-xl-3    col-lg-3 col-md-6">
            <div className="objective-section-one">

              <div className="objective-section-one-icon">
              <Archive color="green" width={50} height={50} />
              </div>
              <div className="objective-section-one-info">
                <h4>Digitization of Every Stream</h4>
                <p>
                EVD&apos;s primary objective is to cater to a spectrum of educational institutions, from small tuition classes to large-scale EdTech companies. It aims to provide a versatile digital platform, ensuring a smooth transition to the digital realm for every educational entity.
                </p>
              </div>
           
            </div>
          </div>



          <div className="col-xxl-3 col-xl-3    col-lg-3 col-md-6">
            <div className="objective-section-one">

              <div className="objective-section-one-icon">
              <Shield color="green"  width={50} height={50} />
              </div>
              <div className="objective-section-one-info">
                <h4>Encouraging Integration of Technology in Education</h4>
                <p>
                EVD seeks to promote the effective incorporation of technology in education. By doing so, it empowers teachers with advanced tools and methodologies, fostering an environment where technology becomes an integral part of the educational experience.
                </p>
              </div>
           
            </div>
          </div>


          <div className="col-xxl-3 col-xl-3  col-lg-3 col-md-6">
            <div className="objective-section-one">

              <div className="objective-section-one-icon">
              <ThumbsUp color="green"  width={50} height={50} />
              </div>
              <div className="objective-section-one-info">
                <h4>Adaptive Learning Platforms and AI</h4>
                <p>
                The platform places a strong emphasis on adaptive learning, tailoring educational content to individual learning styles. Artificial Intelligence is seamlessly integrated to personalize the learning journey for each student, creating an intelligent and responsive educational ecosystem.
                </p>
              </div>
           
            </div>
          </div>


          <div className="col-xxl-3 col-xl-3    col-lg-3 col-md-6">
            <div className="objective-section-one">

              <div className="objective-section-one-icon">
              <Gamepad color="green"  width={50} height={50} />
              </div>
              <div className="objective-section-one-info">
                <h4>Gamification and Learning Apps</h4>
                <p>
                EVD believes in making education enjoyable. The platform incorporates gamification elements to engage students actively in the learning process. Learning apps are thoughtfully designed to provide interactive and immersive learning experiences.
                </p>
              </div>
           
            </div>
          </div>

       

        </div>





     




        
        


      </div>
    </div>
  );
};

export default Objectives;
