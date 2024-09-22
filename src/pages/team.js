import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/layout/Layout";
import React from "react";
import HomePage from "../data/content";

function Team1() {
  return (
    <Layout>
      <Breadcrumb pageList="Team" title="Meet Our Expertise" pageName="TEAM" />
      <div className="home3-team-area sec-mar">
        <div className="container">
        <h2 style={{ marginTop: "-100px" }}>{HomePage.teamMembers.title}</h2>

          <div className="row">
            {HomePage.teamMembers.members.map((member, index) => (
              <div
                key={index}
                className="col-lg-3 col-sm-6 experts wow animate fadeInUp"
                data-wow-delay={`${200 + index * 100}ms`}
                data-wow-duration="1500ms"
              >
                <div className="experts-card magnetic-item">
                  <div className="experts-img">
                    <img
                      className="img-fluid"
                      src={`assets/img/home-4/experts-0${index + 1}.png`} // Assuming you have images named experts-01.png, experts-02.png, etc.
                      alt={member.name}
                    />
                    <div className="expert-social">
                      <ul>
                        <li>
                          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
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
    </Layout>
  );
}

export default Team1;
