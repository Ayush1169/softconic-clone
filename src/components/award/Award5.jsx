import React from 'react'
import { AboutUs } from '../../data/content'

function Award5() {
  return (
    <div className="home5-award-area mb-130">
      <div className="container"
      style={{ 
        backgroundImage: "url('/assets/img/Ellipse.png')",
        backgroundSize: "cover", 
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}>
        <div className="row mb-55 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
          <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-2">
            <div className="section-title-5">
              <span>Award-Winning</span>
              <h2>Our Achievements</h2>
            </div>
            <div className="section-content">
              <p>Morbi interdum pellentesque nunc, luctusongi pretium nulla luctus at Aliquam. </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 wow animate fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
            <div className="award-wrapper">
              <table>
                <thead>
                  <tr>
                    <td>Awards</td>
                    <td>Category</td>
                    <td>Year</td>
                  </tr>
                </thead>
                <tbody>
                  {AboutUs.achievements.map((award, index) => (
                    <tr key={index}>
                      <td data-label="Awwards">
                        {award.title} <img src={award.imgSrc} alt={award.award} />
                      </td>
                      <td data-label="Project">{award.description}</td>
                      <td data-label="Year">{award.year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Award5
