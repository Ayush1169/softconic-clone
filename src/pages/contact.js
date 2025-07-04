import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/layout/Layout";
import 'react-toastify/dist/ReactToastify.css';
import Aero from "../../public/assets/img/aero.svg"
import Image from "next/image";
import Head from "next/head";

const validationSchema = Yup.object({
  name: Yup.string().required("First Name is Required!"),
  lastName: Yup.string().required("Last Name is Required!"),
  email: Yup.string().email("Invalid email").required("Email is Required!"),
  phone: Yup.string()
  .matches(/^\d+$/, "Phone number must contain only digits")
  .min(10, "Phone number must be at least 10 digits")
  .max(15, "Phone number can't be more than 15 digits")
  .required("Phone is Required!"),
  message: Yup.string().required("Message is Required!"),
  company: Yup.string().required("Company/Organization is Required!")
})

function Contactpage() {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      company: "",
      email: "",
      phone: "",
      message: "",

    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const templateParams = {
        name: values.name,
        lastName: values.lastName,
        company: values.company,
        email: values.email,
        phone: values.phone,
        message: values.message,

      };

      emailjs
        .send(
          "service_tjkquvz",
          "template_fb5jmgr",
          templateParams,
          "UjXT7K73yIRw42mCc"
        )
        .then((response) => {

          toast.success("Message sent successfully");
        })
        .catch((error) => {

          toast.error("Email sending failed");
        });
      formik.resetForm();
    },
  });


  return (
    <>
      <Head>
        <title>
          EVD Technology
        </title>
        <link rel="icon" href="/assets/img/fevicon.png" />
      </Head>
      <Layout pageTitle={"Contact"}>
        <Breadcrumb pageList="Contact" title="For Any Query" pageName="CONTACT" />
        <div className="contact-page-wrap sec-mar"
          style={{
            backgroundImage: "url('/assets/img/Ellipse.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}>
          <div className="container">
            <div className="row g-lg-4 gy-5">
              <div className="col-lg-6">
                <div className="contact-content">
                  <span>CONTACT WITH US</span>
                  <h2>LET’S WORK TOGETHER?</h2>
                  <p>
                    We have world-class, flexible support via live chat, email, and
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
                          <a target='_blank' href="https://www.google.com/maps/place/EVD+Technology+LLP/@22.3530279,82.7020842,17z/data=!3m2!4b1!5s0x3a278f2e1ea838eb:0xd1a92c85d2f85e57!4m6!3m5!1s0x3a2788cb666b7427:0xff101e61b70ad2!8m2!3d22.3530279!4d82.7020842!16s%2Fg%2F11bvtg_v2v?entry=ttu">
                            Infront of Fitness Mantra Gym, Plot No: 667/7, Second Floor, Ward 02, DDM Rd, Korba, Chhattisgarh, 495677</a>
                        </p>
                      </div>
                    </div>
                    <div className="single-info">
                      <div className="icon">
                        <i className="fas fa-map-marker-alt" />
                      </div>
                      <div className="info">
                        <p>
                          <a target='_blank' href="https://www.google.com/maps/place/Progressive+Point/@21.2129458,81.6633226,17z/data=!3m1!4b1!4m6!3m5!1s0x3a28dd2051f9c227:0x3b746deed9b1a21d!8m2!3d21.2129458!4d81.6633226!16s%2Fg%2F11gy1lxvf4?entry=ttu">
                            Office no 152, 1st Floor, Progressive Point, Near Fruit Market, Lalpur, Raipur, Chhattisgarh, 492001</a>

                        </p>
                      </div>
                    </div>
                    <div className="single-info">
                      <div className="icon">
                        <i className="fas fa-phone-alt"/>
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
                    <form onSubmit={formik.handleSubmit}>
                      <div className="row">
                        <div className="col-md-6 mb-20">
                          <div className="form-inner">
                            <label>First name</label>
                            <input
                              type="text"
                              name="name"
                              placeholder="First Name*"
                              {...formik.getFieldProps("name")}
                            />
                          </div>
                          {formik.touched.name && formik.errors.name ? (
                            <div
                              style={{
                                color: "red",
                                marginTop: "3px",
                                fontSize: "12px"
                              }}
                            >
                              {formik.errors.name}
                            </div>
                          ) : null}
                        </div>

                        <div className="col-md-6 mb-20">
                          <div className="form-inner">
                            <label>Last name</label>
                            <input
                              type="text"
                              name="lastName"
                              placeholder="Last Name*"
                              {...formik.getFieldProps("lastName")}
                            />
                          </div>
                          {formik.touched.lastName && formik.errors.lastName ? (
                            <div
                              style={{
                                color: "red",
                                marginTop: "3px",
                                fontSize: "12px"
                              }}
                            >
                              {formik.errors.lastName}
                            </div>
                          ) : null}
                        </div>

                        <div className="col-lg-12 mb-20">
                          <div className="form-inner">
                            <label>Company/Organization</label>
                            <input
                              type="text"
                              name="company"
                              placeholder="Company/Organization*"
                              {...formik.getFieldProps("company")}
                            />
                          </div>
                          {formik.touched.company && formik.errors.company ? (
                            <div style={{ color: "red", marginTop: "3px", fontSize: "12px" }}>
                              {formik.errors.company}
                            </div>
                          ) : null}
                        </div>

                        <div className="col-lg-12 mb-20">
                          <div className="form-inner">
                            <label>Email</label>
                            <input
                              type="email"
                              name="email"
                              placeholder="Email*"
                              {...formik.getFieldProps("email")}
                            />
                          </div>
                          {formik.touched.email && formik.errors.email ? (
                            <div style={{ color: "red", marginTop: "3px", fontSize: "12px" }}>
                              {formik.errors.email}
                            </div>
                          ) : null}
                        </div>

                        <div className="col-lg-12 mb-20">
                          <div className="form-inner">
                            <label>Phone</label>
                            <input
                              type="text"
                              name="phone"
                              placeholder="Phone*"
                              inputMode="numeric"
                              pattern="[0-9]*"
                              {...formik.getFieldProps("phone")}
                            />
                          </div>
                          {formik.touched.phone && formik.errors.phone ? (
                            <div style={{ color: "red", marginTop: "3px", fontSize: "12px" }}>
                              {formik.errors.phone}
                            </div>
                          ) : null}
                        </div>

                        <div className="col-lg-12 mb-20">
                          <div className="form-inner">
                            <label>Message</label>
                            <textarea
                              name="message"
                              placeholder="Message*"
                              {...formik.getFieldProps("message")}
                            />
                          </div>
                          {formik.touched.message && formik.errors.message ? (
                            <div style={{ color: "red", marginTop: "1px", fontSize: "12px" }}>
                              {formik.errors.message}
                            </div>
                          ) : null}
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
          <div className="location-section pb-120">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-5 col-md-6 col-sm-10">
                  <div className="office-location-signle">
                    <a
                      className="map-button"
                      href="https://www.google.com/maps/place/EVD+Technology+LLP/@22.3530279,82.7020842,17z/data=!3m2!4b1!5s0x3a278f2e1ea838eb:0xd1a92c85d2f85e57!4m6!3m5!1s0x3a2788cb666b7427:0xff101e61b70ad2!8m2!3d22.3530279!4d82.7020842!16s%2Fg%2F11bvtg_v2v?entry=ttu"
                      target="_blank"
                      role="button"
                    >
                      <i className="bi bi-geo-alt" />
                      <h5>View Map</h5>
                      <Image src={Aero} alt="Arrow Icon" />
                    </a>
                    <div className="content">
                      <h3>Head Office</h3>
                      <a
                        href="https://www.google.com/maps/place/EVD+Technology+LLP/@22.3530279,82.7020842,17z/data=!3m2!4b1!5s0x3a278f2e1ea838eb:0xd1a92c85d2f85e57!4m6!3m5!1s0x3a2788cb666b7427:0xff101e61b70ad2!8m2!3d22.3530279!4d82.7020842!16s%2Fg%2F11bvtg_v2v?entry=ttu"
                        target="_blank"
                        style={{ color: "black !important" }}
                      >
                        <p style={{ color: "black !important" }}>
                          Infront of Fitness Mantra Gym, Plot No: 667/7, Second
                          Floor, Ward 02, DDM Rd, Korba, Chhattisgarh, 495677
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 col-sm-10 ">
                  <div className="office-location-signle">
                    <a
                      className="map-button"
                      href="https://www.google.com/maps/place/Progressive+Point/@21.2129458,81.6633226,17z/data=!3m1!4b1!4m6!3m5!1s0x3a28dd2051f9c227:0x3b746deed9b1a21d!8m2!3d21.2129458!4d81.6633226!16s%2Fg%2F11gy1lxvf4?entry=ttu"
                      target="_blank"
                      role="button"
                    >
                      <i className="bi bi-geo-alt" />
                      <h5>View Map</h5>
                      <Image src={Aero} alt="Arrow Icon" />
                    </a>
                    <div className="content">
                      <h3>Branch Office</h3>
                      <a
                        href="https://www.google.com/maps/place/Progressive+Point/@21.2129458,81.6633226,17z/data=!3m1!4b1!4m6!3m5!1s0x3a28dd2051f9c227:0x3b746deed9b1a21d!8m2!3d21.2129458!4d81.6633226!16s%2Fg%2F11gy1lxvf4?entry=ttu"
                        target="_blank"
                        style={{ color: "black !important" }}
                      >
                        <p style={{ color: "black !important" }}>
                          Office no 152, 1st Floor, Progressive Point, Near Fruit
                          Market, Lalpur, Raipur, Chhattisgarh, 492001
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ToastContainer needs to be in your component tree */}
        <ToastContainer />
      </Layout></>
  );
}

export default Contactpage;
