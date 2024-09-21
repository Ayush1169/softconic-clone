import React, { useMemo } from "react";

const Commonfeature = () => {

  return (
    <div className="common-feature">
      <div className="container ">
        <div className="row justify-content-center mb-50">
          <div className="col-lg-10">
            <div className="section-common-feature text-center">
              <h4>Common Features</h4>
              <h6>
                Demonstrating the Impact of <br /> EVD in Educational
                Institutions
              </h6>
            </div>
          </div>
        </div>

        <div className="row justify-content-center gy-2">
          <div className="col-xxl-5 col-xl-5    col-lg-5 col-md-6">
            <div className="common-feature-one">
              <div className="common-feature-info">
                <span>Adaptive Learning Platforms - </span>
                <p>
                  {" "}
                  EVD&apos;s adaptive learning approach ensures that educational
                  content is tailored to individual needs, regardless of the
                  sector.
                </p>
              </div>
            </div>
          </div>



          <div className="col-xxl-5 col-xl-5   col-lg-5 col-md-6">
            <div className="common-feature-one">
              <div className="common-feature-info">
                <span>Real-time Assessment and Feedback - </span>
                <p>
                  The platform&apos;s real-time assessment tools are universally
                  beneficial, providing quick and actionable feedback to
                  learners and instructors alike.
                </p>
              </div>
            </div>
          </div>
          </div>


        
      </div>
    </div>
  );
};

export default Commonfeature;
