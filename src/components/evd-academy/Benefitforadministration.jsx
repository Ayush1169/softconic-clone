import React from 'react'
import Image from "next/image";
import icon1 from "../../../public/assets/img/Benefitadministration/icon1.svg"
import icon2 from "../../../public/assets/img/Benefitadministration/icon2.svg"
import icon3 from "../../../public/assets/img/Benefitadministration/icon3.svg"
import icon4 from "../../../public/assets/img/Benefitadministration/icon4.svg"
import icon5 from "../../../public/assets/img/Benefitadministration/icon5.svg"
import icon6 from "../../../public/assets/img/Benefitadministration/icon6.svg"
import icon7 from "../../../public/assets/img/Benefitadministration/icon7.svg"
import icon8 from "../../../public/assets/img/Benefitadministration/icon8.svg"






const Benefitforadministration = () => {
  return (
    <div className="Benefitadmin-section" 
    style={{
      backgroundImage: "url('/assets/img/Ellipse.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}>
    <div className='container '>
        <div className="row justify-content-center mb-50"> 
        <div className="col-lg-10">
        <div className='section-title-Benefitadmin
        text-center'>

               
         <h1>Benefits For Adminstration</h1>
          </div>
         
          </div>
        </div>


        <div className="row justify-content-center gy-2">
         <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 fix" >
            <div className="Benefitadmin-one">
             
              <div className="Benefitadmin-one-icon">
                <Image src={icon1} alt="Benefitadmin-one"/>
              </div>
              <div className="Benefitadmin-one-info">
                <p>Efficient Resource Allocation</p>
              
              </div>
            </div>
          </div>
         



          <div className="col-xxl-3 col-xl-3    col-lg-3 col-md-6">
            <div className="Benefitadmin-one">
             
              <div className="Benefitadmin-one-icon">
                <Image src={icon2} alt="Benefitadmin-one"/>
              </div>
              <div className="Benefitadmin-one-info">
                <p>Centralized Data Management</p>
                </div>
              </div>
            </div>


            <div className="col-xxl-3 col-xl-3    col-lg-3 col-md-6">
            <div className="Benefitadmin-one">
             
              <div className="Benefitadmin-one-icon">
                <Image src={icon3} alt="Benefitadmin-one"/>
              </div>
              <div className="Benefitadmin-one-info">
                <p>Automated Administrative Tasks</p>
                </div>
              </div>
            </div>



            <div className="col-xxl-3 col-xl-3    col-lg-3 col-md-6">
            <div className="Benefitadmin-one">
             
              <div className="Benefitadmin-one-icon">
                <Image src={icon4} alt="Benefitadmin-one"/>
              </div>
              <div className="Benefitadmin-one-info">
                <p>Strategic Planning Suppor</p>
                </div>
              </div>
            </div>


          </div>



          <div className="row      justify-content-center gy-2" style={{paddingTop:'20px'}}>
         <div className="col-xxl-3 col-xl-3    col-lg-3 col-md-6" >
            <div className="Benefitadmin-one">
             
              <div className="Benefitadmin-one-icon">
                <Image src={icon5} alt="Benefitadmin-one"/>
              </div>
              <div className="Benefitadmin-one-info">
                <p>SMS & Email Management</p>
              
              </div>
            </div>
          </div>
         



          <div className="col-xxl-3 col-xl-3    col-lg-3 col-md-6">
            <div className="Benefitadmin-one">
             
              <div className="Benefitadmin-one-icon">
                <Image src={icon6} alt="Benefitadmin-one"/>
              </div>
              <div className="Benefitadmin-one-info">
                <p>Event</p>
                </div>
              </div>
            </div>


            <div className="col-xxl-3 col-xl-3    col-lg-3 col-md-6">
            <div className="Benefitadmin-one">
             
              <div className="Benefitadmin-one-icon">
                <Image src={icon7} alt="Benefitadmin-one"/>
              </div>
              <div className="Benefitadmin-one-info">
                <p>Feedback</p>
                </div>
              </div>
            </div>



            <div className="col-xxl-3 col-xl-3  col-lg-3 col-md-6">
            <div className="Benefitadmin-one">
             
              <div className="Benefitadmin-one-icon">
                <Image src={icon8} alt="Benefitadmin-one"/>
              </div>
              <div className="Benefitadmin-one-info">
                <p>News Feed</p>
                </div>
              </div>
            </div>


          </div>


          </div>
          </div>
  )
}

export default Benefitforadministration