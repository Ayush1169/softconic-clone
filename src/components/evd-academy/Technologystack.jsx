import React from "react";
import Image from "next/image";
import img1 from "../../../public/assets/img/technologystack/dsa.svg";
import img2 from "../../../public/assets/img/technologystack/Typescript.svg";
import img3 from "../../../public/assets/img/technologystack/Javascript.svg";
import img4 from "../../../public/assets/img/technologystack/Html.svg";
import img5 from "../../../public/assets/img/technologystack/css.svg";
import img6 from "../../../public/assets/img/technologystack/react.svg";
import img7 from "../../../public/assets/img/technologystack/nodejs.svg";

const Technologystack = () => {
  return (
    <div className="Technologystack">
      <div className="container ">
        <div className="row justify-content-center mb-50">
          <div className="col-lg-10 ">
            <div
              className="section-title-Technologystack
        text-center"
            >
              <h4>Technology Stack</h4>

              <h1>
                A Visionary Approach to <br /> Technical Excellence
              </h1>
            </div>
          </div>
        </div>

        <div className="row justify-content-center gy-3">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="Technologystack-section-one">

              <div className="Technologystack-card">
                <div className="Technologystack-one-icon">
                  <Image src={img1} alt="Technologystackimg1"/>
                </div>
                <div>
                  <h3>Data Structures<br/> & Algorithm</h3>
                </div>
              </div>

              <div className="Technologystack-card">
                <div className="Technologystack-one-icon">
                  <Image src={img2} alt="Technologystackimg2"/>
                </div>
                <div>
                  <h3>Typescript</h3>
                </div>
              </div>


            </div> 
          </div>

          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="Technologystack-section-one">



            <div className="Technologystack-card">
                <div className="Technologystack-one-icon">
                  <Image src={img3} alt="Technologystackimg3"/>
                </div>
                <div>
                  <h3>Javascript</h3>
                </div>
              </div>



              <div className="Technologystack-card">
                <div className="Technologystack-one-icon">
                  <Image src={img4} alt="Technologystackimg4"/>
                </div>
                <div>
                  <h3>HTML</h3>
                </div>
              </div>



              <div className="Technologystack-card">
                <div className="Technologystack-one-icon">
                  <Image src={img5} alt="Technologystackimg5"/>
                </div>
                <div>
                  <h3>CSS</h3>
                </div>
              </div>


            </div> 
          </div>

          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="Technologystack-section-one">


            <div className="Technologystack-card">
                <div className="Technologystack-one-icon">
                  <Image src={img6} alt="Technologystackimg6"/>
                </div>
                <div>
                  <h3>React.js</h3>
                </div>
              </div>



              <div className="Technologystack-card">
                <div className="Technologystack-one-icon">
                  <Image src={img7} alt="Technologystackimg7"/>
                </div>
                <div>
                  <h3>Node.js</h3>
                </div>
              </div>

          

            </div> 
          </div>




        </div>

       {/* <div className="button-tech-one">
       <button className="button-techstack">View More</button>
      </div> */}
       </div>
       
    </div>
  );
};

export default Technologystack;
