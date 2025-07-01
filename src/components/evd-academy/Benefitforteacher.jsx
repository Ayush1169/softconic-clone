import React from "react";
import Image from "next/image";
import icon1 from "../../../public/assets/img/Benefitteacher/icon1.svg";
import icon2 from "../../../public/assets/img/Benefitteacher/icon2.svg";
import icon3 from "../../../public/assets/img/Benefitteacher/icon3.svg";
import icon4 from "../../../public/assets/img/Benefitteacher/icon4.svg";
import icon5 from "../../../public/assets/img/Benefitteacher/image 5.svg";
import icon6 from "../../../public/assets/img/Benefitteacher/icon6.svg";
import icon7 from "../../../public/assets/img/Benefitteacher/icon7.svg";
import icon8 from "../../../public/assets/img/Benefitteacher/8882657.png";

const Benefitforteacher = () => {
  return (
    <div className="Benefitteacher-section"
     >
      <div className="container ">
        <div className="row justify-content-center mb-50">
          <div className="col-lg-10">
            <div
              className="section-title-Benefitteacher
        text-center"
            >
              <h1>Benefits For Teachers</h1>
            </div>
          </div>
        </div>

        <div className="row justify-content-center gy-3">
          <div className="col-xxl-3 col-xl-3    col-lg-3 col-md-6">
            <div className="Benefitteacher-one">
              <div className="Benefitteacher-one-icon">
                <Image src={icon1} alt="Benefitteacher-one" />
              </div>
              <div className="Benefitteacher-one-info">
                <p>Efficient Administrative Processes</p>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
            <div className="Benefitteacher-one">
              <div className="Benefitteacher-one-icon">
                <Image src={icon2} alt="Benefitteacher-one" />
              </div>
              <div className="Benefitteacher-one-info">
                <p>Access to Advanced Teaching Resources</p>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-3    col-lg-3 col-md-6">
            <div className="Benefitteacher-one">
              <div className="Benefitteacher-one-icon">
                <Image src={icon3} alt="Benefitteacher-one" />
              </div>
              <div className="Benefitteacher-one-info">
                <p>Dynamic Teaching Environment</p>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-3    col-lg-3 col-md-6">
            <div className="Benefitteacher-one">
              <div className="Benefitteacher-one-icon">
                <Image src={icon4} alt="Benefitteacher-one" />
              </div>
              <div className="Benefitteacher-one-info">
                <p>Improved Communication Channels</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center gy-3" style={{ paddingTop: '20px' }}>
          <div className="col-xxl-3 col-xl-3    col-lg-3 col-md-6">
            <div className="Benefitteacher-one">
              <div className="Benefitteacher-one-icon">
                <Image src={icon5} alt="Benefitteacher-one" />
              </div>
              <div className="Benefitteacher-one-info">
                <p>Holiday Calendar</p>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-3    col-lg-3 col-md-6">
            <div className="Benefitteacher-one">
              <div className="Benefitteacher-one-icon">
                <Image src={icon6} alt="Benefitteacher-one" />
              </div>
              <div className="Benefitteacher-one-info">
                <p> Inventory Management</p>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-3    col-lg-3 col-md-6">
            <div className="Benefitteacher-one">
              <div className="Benefitteacher-one-icon">
                <Image src={icon7} alt="Benefitteacher-one" />
              </div>
              <div className="Benefitteacher-one-info">
                <p>Online & Counter Based Payment</p>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-3    col-lg-3 col-md-6">
            <div className="Benefitteacher-one">
              <div className="Benefitteacher-one-icon">
                <Image src={icon8} alt="Benefitteacher-one" />
              </div>
              <div className="Benefitteacher-one-info">
                <p>Default Handling</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Benefitforteacher;
