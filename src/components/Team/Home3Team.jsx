import React from 'react';
import HomePage from "../../data/content";

function Home3Team({ showAll }) {
  const membersToDisplay = showAll ? HomePage.teamMembers.members : HomePage.teamMembers.members.slice(0, 4);

  return (
    <div className="home3-team-area sec-mar"
   >
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
        <div className="row justify-content-center"
        >
          {membersToDisplay.map((member, index) => (
            <div
              key={index}
              className={`col-lg-4 col-md-6 col-sm-12 experts wow animate fadeInUp`}
              data-wow-delay={`${200 + index * 100}ms`}
              data-wow-duration="1500ms"
            >
              <div className="experts-card magnetic-item">
                <div className="experts-img">
                  <img
                    className="img-fluid"
                   
                    src={member.src}
                    alt={member.name}
                  />
                  <div className="expert-social">
                    <ul>
                      <li><a target='_blank' href={member.linkedin}><i className="bx bxl-linkedin" /></a></li>
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
