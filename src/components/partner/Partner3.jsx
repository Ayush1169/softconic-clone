import React from 'react';
import Marquee from 'react-fast-marquee';
import HomePage from '../../data/content';

// Importing company logos
// import ExpandMyBusiness from "../../../public/assets/img/homePage/company1.png";
// import Vedanta from "../../../public/assets/img/homePage/company2.png";
// import ExpertRight from "../../../public/assets/img/homePage/company3.png";
// import TechSierra from "../../../public/assets/img/homePage/company4.png";
// import Ntpc from "../../../public/assets/img/homePage/company5.png";
// import Genxture from "../../../public/assets/img/homePage/company6.png";
// import MajorKalshi from "../../../public/assets/img/homePage/company7.png";
// import NimapInfotech from "../../../public/assets/img/homePage/company8.png";
// import Veda from "../../../public/assets/img/homePage/company9.png";
// import Coreco from "../../../public/assets/img/homePage/company10.png";

import ExpandMyBusiness from "../../../public/assets/img/company/expand-my-business.webp";
import Vedanta from "../../../public/assets/img/company/vedanta.webp";
import ExpertRight from "../../../public/assets/img/company/expert-right.webp";
import TechSierra from "../../../public/assets/img/company/tech-sierra.webp";
import Ntpc from "../../../public/assets/img/company/ntpc.webp";
import Genxture from "../../../public/assets/img/company/genxture.webp";
import MajorKalshi from "../../../public/assets/img/company/major-kalshi.webp";
import NimapInfotech from "../../../public/assets/img/company/nimap-infotech.webp";
import Veda from "../../../public/assets/img/company/veda.webp";
import Coreco from "../../../public/assets/img/company/coreco.webp";

function Partner3() {
  const imageStyle = {
    width: '100px',
    mixBlendMode: 'multiply',
    margin: '0 20px'
  };

  return (
    <div className="home3-partner-area" id="home3-partner-area">
      <div className="container-fluid">
        <div className="row g-4">
          <div className="col-lg-3">
            <div className="partner-title">
              <h3>{HomePage.companiesWorkedWith}</h3>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="partner-wrapper">
              <Marquee className="marquee_text" autoFill={true}>
                <img
                  src={ExpandMyBusiness.src}
                  alt="Expand My Business"
                  style={imageStyle}
                />
                <img src="assets/img/home-3/star.svg" alt="" />
                <img
                  src={Vedanta.src}
                  alt="Vedanta"
                  style={imageStyle}
                />
                <img src="assets/img/home-3/star.svg" alt="" />
                <img
                  src={ExpertRight.src}
                  alt="Expert Right"
                  style={imageStyle}
                />
                <img src="assets/img/home-3/star.svg" alt="" />
                <img
                  src={TechSierra.src}
                  alt="Tech Sierra"
                  style={imageStyle}
                />
                <img src="assets/img/home-3/star.svg" alt="" />
                <img
                  src={Ntpc.src}
                  alt="NTPC"
                  style={imageStyle}
                />
                <img src="assets/img/home-3/star.svg" alt="" />
                <img
                  src={Genxture.src}
                  alt="Genxture"
                  style={imageStyle}
                />
                <img src="assets/img/home-3/star.svg" alt="" />
                <img
                  src={MajorKalshi.src}
                  alt="Major Kalshi"
                  style={imageStyle}
                />
                <img src="assets/img/home-3/star.svg" alt="" />
                <img
                  src={NimapInfotech.src}
                  alt="Nimap Infotech"
                  style={imageStyle}
                />
                <img src="assets/img/home-3/star.svg" alt="" />
                <img
                  src={Veda.src}
                  alt="Veda"
                  style={imageStyle}
                />
                <img src="assets/img/home-3/star.svg" alt="" />
                <img
                  src={Coreco.src}
                  alt="Coreco"
                  style={imageStyle}
                />
                <img src="assets/img/home-3/star.svg" alt="" />
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partner3;
