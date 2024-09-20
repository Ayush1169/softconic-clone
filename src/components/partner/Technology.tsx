import React from 'react';
import Marquee from "react-fast-marquee";
import { FrontEndData } from "../../data/techImg";

function Technology() {
  return (
    <div className="home4-trusted-client-area sec-mar">
      <p>Technologies We Use</p>
      <div className="marque-wrap">
        <div className="marquee_text">
          <Marquee>
            {FrontEndData.map((value) => (
              <div key={value.id} className="single-client"  style={{ margin: '0 20px' }}>
                <img className="img-fluid" src={value.imgSrc} alt={value.altName} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Technology;
