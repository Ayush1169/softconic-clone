import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/layout/Layout";
import 'react-toastify/dist/ReactToastify.css';

function Contactpage() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Form validation logic
  const validateForm = () => {
    const newErrors = {};
    if (!formValues.firstName) newErrors.firstName = "First Name is required";
    if (!formValues.lastName) newErrors.lastName = "Last Name is required";
    if (!formValues.company) newErrors.company = "Company/Organization is required";
    if (!formValues.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formValues.email)) newErrors.email = "Invalid email address";
    if (!formValues.phone) newErrors.phone = "Phone is required";
    if (!formValues.message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      // Show an alert for form errors
      alert("Please fill all required fields correctly.");
      return;
    }

    const templateParams = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      company: formValues.company,
      email: formValues.email,
      phone: formValues.phone,
      message: formValues.message,
    };

    // Send the email using emailjs
    emailjs
      .send(
        "service_tjkquvz", // Email service ID
        "template_fb5jmgr", // Email template ID
        templateParams,
        "UjXT7K73yIRw42mCc" // Emailjs public key
      )
      .then((response) => {
        // Display a toast notification for success
        toast.success("Message sent successfully");
      })
      .catch((error) => {
        // Display a toast notification for failure
        toast.error("Email sending failed");
      });

    // Clear form values after submission
    setFormValues({
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <Layout>
      <Breadcrumb pageList="Contact" title="For Any Query" pageName="CONTACT" />
      <div className="contact-page-wrap sec-mar">
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-6">
              <div className="contact-content">
                <span>CONTACT WITH US</span>
                <h2>LET’S WORK TOGETHER?</h2>
                <p>
                  I have world-class, flexible support via live chat, email, and
                  phone. I guarantee that you’ll be able to have any issue
                  resolved within 24 hours.
                </p>
                <div className="informations">
                  <div className="single-info">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="info">
                      <p>
                      Infront of Fitness Mantra Gym, Plot No: 667/7, Second Floor,<br/> Ward 02, DDM Rd, Korba, Chhattisgarh, 495677
                      </p>
                    </div>
                  </div>
                  <div className="single-info">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="info">
                      <a href="tel:+91-7829401605">+91-7829401605</a>
                      <a href="tel:+91-6261743903">+91-6261743903</a>
                    </div>
                  </div>
                  <div className="single-info">
                    <div className="icon">
                      <i className="far fa-envelope" />
                    </div>
                    <div className="info">
                      <a href="mailto: sales@evdtechnology.com">sales@evdtechnology.com</a>
                      <a href="mailto: anshu@evdtechnology.com">anshu@evdtechnology.com</a>
                    </div>
                  </div>
                </div>
                <div className="follow-area">
                  <h5 className="blog-widget-title">Follow Us</h5>
                  <p className="para">Follow us on Social Network</p>
                  <div className="blog-widget-body">
                    <ul className="follow-list d-flex flex-row align-items-start gap-4">
                      <li>
                        <a href="https://www.facebook.com/evdtechnologyofficial/" target="_blank">
                          <i className="bx bxl-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/@evdtechnology6379" target="_blank">
                          <i className="bx bxl-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/evdtechnologyllp/" target="_blank">
                          <i className="bx bxl-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/company/evdtechnologyllp" target="_blank">
                          <i className="bx bxl-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="contact-form-wrap">
                <div className="form-tltle">
                  <h5>Make a Free Consulting</h5>
                </div>
                <div className="contact-form">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-20">
                        <div className="form-inner">
                          <label>First name</label>
                          <input
                            type="text"
                            name="firstName"
                            value={formValues.firstName}
                            onChange={handleChange}
                          />
                          {errors.firstName && <span>{errors.firstName}</span>}
                        </div>
                      </div>

                      <div className="col-md-6 mb-20">
                        <div className="form-inner">
                          <label>Last name</label>
                          <input
                            type="text"
                            name="lastName"
                            value={formValues.lastName}
                            onChange={handleChange}
                          />
                          {errors.lastName && <span>{errors.lastName}</span>}
                        </div>
                      </div>

                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Company/Organization</label>
                          <input
                            type="text"
                            name="company"
                            value={formValues.company}
                            onChange={handleChange}
                          />
                          {errors.company && <span>{errors.company}</span>}
                        </div>
                      </div>

                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Email</label>
                          <input
                            type="email"
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                          />
                          {errors.email && <span>{errors.email}</span>}
                        </div>
                      </div>

                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Phone</label>
                          <input
                            type="text"
                            name="phone"
                            value={formValues.phone}
                            onChange={handleChange}
                          />
                          {errors.phone && <span>{errors.phone}</span>}
                        </div>
                      </div>

                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Message</label>
                          <textarea
                            name="message"
                            value={formValues.message}
                            onChange={handleChange}
                          />
                          {errors.message && <span>{errors.message}</span>}
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-inner">
                          <button className="primary-btn3" type="submit">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ToastContainer needs to be in your component tree */}
      <ToastContainer />
    </Layout>
  );
}

export default Contactpage;
