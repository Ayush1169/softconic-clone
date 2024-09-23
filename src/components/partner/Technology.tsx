import React, { useState } from 'react';
import Marquee from "react-fast-marquee";
import { FrontEndData } from "../../data/techImg";

function Technology() {
  const imageStyle = {
    width: '50px', 
    margin: '0 20px',
    opacity: 0.5,
    transition: 'opacity 0.3s ease'
  };
  const [hovered, setHovered] = useState(null);

  return (
    <div className="home4-trusted-client-area sec-mar">
      <p>Technologies We Use</p>
      <div className="marque-wrap">
        <div className="marquee_text">
          <Marquee>
            {FrontEndData.map((value) => (
              <div key={value.id} className="single-client" style={{ margin: '0 0px' }}
              onMouseEnter={() => setHovered(value.id)} 
              onMouseLeave={() => setHovered(null)} 
              >
                <img
                  className="img-fluid"
                  src={value.imgSrc}
                  alt={value.altName}
                  style={{
                    ...imageStyle,
                    opacity: hovered === value.id ? 1 : 0.5, 
                    width:80,
                    height:70
                  }}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Technology;
