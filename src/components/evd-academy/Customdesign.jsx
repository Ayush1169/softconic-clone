import React from 'react';
import { BookOpen, Book, Users, LayoutDashboard } from 'lucide-react';

const Customdesign = () => {
  return (
    <div className="Custom-Design-section"
    style={{ 
      backgroundImage: "url('/assets/img/Ellipse.png')",
      backgroundSize: "cover", 
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-title-customdesign text-center">
              <h4>Custom Design And Development</h4>
              <h1>EVD Takes A User-Centric Approach, Tailoring <br /> Experiences For Various Stakeholders</h1>
            </div>
          </div>
        </div>

        <div className="row justify-content-center custom-Design-card-container">
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6" 
          style={{marginBottom: "50px"}}>
            <div className="Custom-Design-one"  style={{marginBottom: "50px"}}>
              <div className="Custom-Design-one-icon">
                <BookOpen color="#00B300" size={48} />
              </div>
              <div className="Custom-Design-one-info">
                <h4>Student (Mobile and Web App)</h4>
                <p>
                  The student interface is designed for easy navigation, enabling students to access course materials, engage in interactive activities, and monitor their progress seamlessly.
                </p>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
            <div className="Custom-Design-one">
              <div className="Custom-Design-one-icon">
                <Book color="#00B300" size={48} /> {/* Changed to Book icon */}
              </div>
              <div className="Custom-Design-one-info">
                <h4>Teacher (Mobile and Web App)</h4>
                <p>
                  Teachers benefit from tools for lesson planning, grading, and communication with students. The platform fosters interactive activities and seamless monitoring of progress.
                </p>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
            <div className="Custom-Design-one">
              <div className="Custom-Design-one-icon">
                <LayoutDashboard color="#00B300" size={48} />
              </div>
              <div className="Custom-Design-one-info">
                <h4>Admin Panel (Web-based)</h4>
                <p>
                  The comprehensive administrative dashboard facilitates efficient management of courses, users, and system settings. It is a centralized hub for overseeing the entire educational ecosystem.
                </p>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
            <div className="Custom-Design-one">
              <div className="Custom-Design-one-icon">
                <Users color="#00B300" size={48} />
              </div>
              <div className="Custom-Design-one-info">
                <h4>Parent (Web and Mobile App)</h4>
                <p>
                  Parents can actively participate in their child's education through a dedicated platform. They can stay informed about their child's progress, communicate with teachers, and engage in the educational journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customdesign;
