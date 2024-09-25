import React from 'react';
import Marquee from "react-fast-marquee";

// Importing client images
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

function Partnar4() {
  return (
    <div className="home4-trusted-client-area sec-mar">
      <p>Companies We Have Worked With</p>
      <div className="marque-wrap">
        <div className="marquee_text">
          <Marquee >
            <div className="single-client" style={{
              marginLeft: "10px"
            }}>
              <img className="img-fluid" src={ExpandMyBusiness.src} alt="Expand My Business" />
            </div>
            <div className="single-client" style={{
              marginLeft: "10px"
            }}>
              <img className="img-fluid" src={Vedanta.src} alt="Vedanta" />
            </div>
            <div className="single-client" style={{
              marginLeft: "10px"
            }}>
              <img className="img-fluid" src={ExpertRight.src} alt="Expert Right" />
            </div>
            <div className="single-client" style={{
              marginLeft: "10px"
            }}>
              <img className="img-fluid" src={TechSierra.src} alt="Tech Sierra" />
            </div>
            <div className="single-client" style={{
              marginLeft: "10px"
            }}>
              <img className="img-fluid" src={Ntpc.src} alt="NTPC" />
            </div>
            <div className="single-client" style={{
              marginLeft: "10px"
            }}>
              <img className="img-fluid" src={Genxture.src} alt="Genxture" />
            </div>
            <div className="single-client" style={{
              marginLeft: "10px"
            }}>
              <img className="img-fluid" src={MajorKalshi.src} alt="Major Kalshi" />
            </div>
            <div className="single-client" style={{
              marginLeft: "10px"
            }}>
              <img className="img-fluid" src={NimapInfotech.src} alt="Nimap Infotech" />
            </div>
            <div className="single-client" style={{
              marginLeft: "10px"
            }}>
              <img className="img-fluid" src={Veda.src} alt="Veda" />
            </div>
            <div className="single-client" style={{
              marginLeft: "10px"
            }}>
              <img className="img-fluid" src={Coreco.src} alt="Coreco" />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Partnar4;
