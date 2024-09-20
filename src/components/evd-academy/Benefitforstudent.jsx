import React from "react";
import Image from "next/image";
import icon1 from "../../../public/assets/img/Benefitstudent/icon1.svg";
import icon2 from "../../../public/assets/img/Benefitstudent/icon2.svg";
import icon3 from "../../../public/assets/img/Benefitstudent/icon3.svg";
import icon4 from "../../../public/assets/img/Benefitstudent/icon4.svg";
import icon5 from "../../../public/assets/img/Benefitstudent/icon5.svg";
import icon6 from "../../../public/assets/img/Benefitstudent/icon6.svg";

const benefitforstudent = () => {
  return (
    <div className="Benefitstudent-section">
      <div className="container ">
        <div className="row justify-content-center mb-50">
          <div className="col-lg-10">
            <div
              className="section-Benefitstudent
        text-center"
            >
              <h4> Benefits</h4>
              <h1>Benefits For Students</h1>
            </div>
          </div>
        </div>

        <div className="row justify-content-center gy-2">
          <div className="col-xxl-3 col-xl-3    col-lg-3 col-md-6">
            <div className="Benefitstudent-one">
              <div className="Benefitstudent-one-icon">
                <Image src={icon1} alt="Benefitstudent-one"/>
              </div>
              <div className="Benefitstudent-one-info">
                <p>Personalized Learning Paths</p>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-3    col-lg-3 col-md-6">
            <div className="Benefitstudent-one">
              <div className="Benefitstudent-one-icon">
                <Image src={icon2} alt="Benefitstudent-one"/>
              </div>
              <div className="Benefitstudent-one-info">
                <p>Adaptive Learning Platforms</p>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-3    col-lg-3 col-md-6">
            <div className="Benefitstudent-one">
              <div className="Benefitstudent-one-icon">
                <Image src={icon3} alt="Benefitstudent-one"/>
              </div>
              <div className="Benefitstudent-one-info">
                <p>Engagement through Interactivity</p>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-3    col-lg-3 col-md-6">
            <div className="Benefitstudent-one">
              <div className="Benefitstudent-one-icon">
                <Image src={icon4} alt="Benefitstudent-one"/>
              </div>
              <div className="Benefitstudent-one-info">
                <p>Real-time Feedback</p>
              </div>
            </div>
          </div>
         
        </div>



         <div  className="row justify-content-center gy-2" style={{paddingTop:'20px'}}>

          <div className="col-xxl-3 col-xl-3    col-lg-3 col-md-6">
            <div className="Benefitstudent-one">
              <div className="Benefitstudent-one-icon">
                <Image src={icon5} alt="Benefitstudent-one"/>
              </div>
              <div className="Benefitstudent-one-info">
                <p>inhouse live stream</p>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-3    col-lg-3 col-md-6">
            <div className="Benefitstudent-one">
              <div className="Benefitstudent-one-icon">
                <Image src={icon6} alt="Benefitstudent-one"/>
              </div>
              <div className="Benefitstudent-one-info">
                <p>test module</p>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-3    col-lg-3 col-md-6">
            <div className="Benefitstudent-one">
              <div className="Benefitstudent-one-icon">
                <Image src={icon5} alt="Benefitstudent-one"/>
              </div>
              <div className="Benefitstudent-one-info">
                <p>inhouse live stream</p>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-3    col-lg-3 col-md-6">
            <div className="Benefitstudent-one">
              <div className="Benefitstudent-one-icon">
                <Image src={icon6} alt="Benefitstudent-one"/>
              </div>
              <div className="Benefitstudent-one-info">
                <p>test module</p>
              </div>
            </div>
          </div>
         </div>




      </div>
    </div>
  );
};

export default benefitforstudent;
