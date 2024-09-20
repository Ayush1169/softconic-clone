import React from 'react';
import HomePage from "../../data/content";

function Home3Team({ showAll }) {
  const membersToDisplay = showAll ? HomePage.teamMembers.members : HomePage.teamMembers.members.slice(0, 4);

  const memberImages = [
    "/assets/img/team/One.png",
    "/assets/img/team/pic-1.png",
    "/assets/img/team/pic-2.png",
    "/assets/img/team/pic-4.webp",
  ];

  return (
    <div className="home3-team-area sec-mar">
      <div className="container"
        style={{ 
          backgroundImage: "url('/assets/img/Ellipse.png')",
          backgroundSize: "cover", 
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}>
        <div className="row mb-55 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="section-title-3 text-center">
              <h2>Team Members</h2>
              <p>{HomePage.teamMembers.title}</p>
            </div>
          </div>
        </div>
        
        <div className="row">
          {membersToDisplay.map((member, index) => (
            <div
              key={index}
              className={`col-lg-3 col-sm-6 experts wow animate fadeInUp`}
              data-wow-delay={`${200 + index * 100}ms`}
              data-wow-duration="1500ms"
            >
              <div className="experts-card magnetic-item">
                <div 
                  className="experts-img"
                  style={{ 
                    overflow: 'hidden', 
                  }}
                >
                  <img
                    className="img-fluid"
                    src={memberImages[index]}
                    alt={member.name}
                    style={{ 
                      width: '200px', 
                      height: '200px', 
                      objectFit: 'contain', 
                      mixBlendMode: 'multiply', 
                      transform: 'scale(2.0)',  
                      marginTop: '60px',
                    }} 
                  />
                  <div className="expert-social">
                    <ul>
                      <li>
                        <a href={member.linkedin}
                          target="_blank" 
                          rel="noopener noreferrer" 
                          > 
                          <i className="bx bxl-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="experts-content">
                  <h4>{member.name}</h4>
                  <span>{member.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home3Team;
