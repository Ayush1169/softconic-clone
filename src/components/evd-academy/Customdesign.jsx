import React from 'react'
import Image from "next/image";

import img1 from "../../../public/assets/img/Custom-design/img1.svg"
import img2 from "../../../public/assets/img/Custom-design/img2.svg"
import img3 from "../../../public/assets/img/Custom-design/img3.svg"
import img4 from "../../../public/assets/img/Custom-design/img4.svg"


const Customdesign = () => {
  return (
    <div className="Custom-Design-section">
      <div className='container '>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className='section-title-customdesign text-center'>
              <h4> Custom Design And Development</h4>
              <h1>EVD Takes A User-Centric Approach, Tailoring <br /> Experiences For Various Stakeholders</h1>
            </div>

          </div>
        </div>


        <div className="row justify-content-center custom-Design-card-container">
          <div className="col-xxl-3 col-xl-3    col-lg-3 col-md-6">
            <div className="Custom-Design-one">

              <div className="Custom-Design-one-icon">
                <Image src={img1} alt="Custom-Design-one-Digitization1"/>
              </div>
              <div className="Custom-Design-one-info">
                <h4>Student (Mobile and Web App)</h4>
                <p>
                  The student interface is designed for easy navigation, enabling students to access course materials, engage in interactive
                </p>
              </div>
           
            </div>
          </div>


          <div className="col-xxl-3 col-xl-3  col-lg-3 col-md-6">
            <div className="Custom-Design-one">

              <div className="Custom-Design-one-icon">
                <Image src={img2} alt="Custom-Design-one-Digitization2"/>
              </div>
              <div className="Custom-Design-one-info">
                <h4>Teacher (Mobile and Web App)</h4>
                <p>
                  Teachers benefit from tools for lesson planning, grading, and communication with students. The platform fosters a activities, and monitor their progress seamlessly.
                </p>
              </div>
            
            </div>
          </div>


          <div className="col-xxl-3 col-xl-3    col-lg-3 col-md-6">
            <div className="Custom-Design-one">

              <div className="Custom-Design-one-icon">
                <Image src={img3} alt="Custom-Design-one-Digitization3"/>
              </div>
              <div className="Custom-Design-one-info">
                <h4>Admin Panel (Web-based)</h4>
                <p>
                  The comprehensive administrative dashboard facilitates efficient management of courses, users, and system settings. It is a centralized hub for overseeing the entire educational ecosystem
                </p>
              </div>
         
            </div>
          </div>


          <div className="col-xxl-3 col-xl-3    col-lg-3 col-md-6">
            <div className="Custom-Design-one">

              <div className="Custom-Design-one-icon">
                <Image src={img4} alt="Custom-Design-one-Digitization4"/>
              </div>
              <div className="Custom-Design-one-info">
                <h4>Parent (Web and Mobile App)</h4>
                <p>
                  Parents can actively participate in their child&apos;s education through a dedicated platform. They can stay informed about their child&apos;s progress, communicate with teachers, and engage in the educational journey.
                </p>
              </div>
           

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Customdesign