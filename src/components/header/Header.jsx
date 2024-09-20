import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useReducer, useRef } from "react";

const initialState = {
  activeMenu: "",
  activeSubMenu: "",
  isSidebarOpen: false,
  isLeftSidebarOpen: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        ...state,

        activeMenu: state.activeMenu === action.menu ? "" : action.menu,
        activeSubMenu:
          state.activeMenu === action.menu ? state.activeSubMenu : "",
      };
    case "TOGGLE_SUB_MENU":
      return {
        ...state,
        activeSubMenu:
          state.activeSubMenu === action.subMenu ? "" : action.subMenu,
      };
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };
    case "setScrollY":
      return { ...state, scrollY: action.payload };
    case "TOGGLE_LEFT_SIDEBAR":
      return {
        ...state,
        isLeftSidebarOpen: !state.isLeftSidebarOpen,
      };
    default:
      return state;
  }
}

function Header() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const headerRef = useRef(null);
  const handleScroll = () => {
    const { scrollY } = window;
    dispatch({ type: "setScrollY", payload: scrollY });
  };
  const currentRoute = useRouter().pathname;
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = (menu) => {
    dispatch({ type: "TOGGLE_MENU", menu });
  };

  const toggleSubMenu = (subMenu) => {
    dispatch({ type: "TOGGLE_SUB_MENU", subMenu });
  };
  const toggleLeftSidebar = () => {
    dispatch({ type: "TOGGLE_LEFT_SIDEBAR" });
  };
  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_MENU", menu: "" });
    dispatch({ type: "TOGGLE_SUB_MENU", subMenu: "" });
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  return (
    <>
      <div
        className={`header-sidebar ${state.isLeftSidebarOpen ? "slide" : ""}`}
      >
        <div className="siderbar-top">
          <div className="sidebar-log">
            <Link legacyBehavior href="/" >
              <a >
                <img src="/assets/img/EVDT-LOGO.png" alt=""  style={{width:"50%"}}/>
              </a>
            </Link>
          </div>
          <div className="close-btn" onClick={toggleLeftSidebar}>
            <i className="bi bi-x-lg" />
          </div>
        </div>
        <div className="sidebar-content">
          <p>
            Duis a orci nunc. Suspendisse ac convallis sapien, quis commodo
            libero. Donec nec duomoi luctus, pellentesque lacus sed, mollis
            going leo.
          </p>
        </div>
        <div className="address-card">
          <div className="content">
            <div className="informations">
              <div className="single-info">
                <div className="icon">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="info">
                  <p>
                  Infront of Fitness Mantra Gym, Plot No: 667/7, Second Floor, Ward 02, DDM Rd, Korba, Chhattisgarh, 495677
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
          </div>
          {/* <img src="assets/images/bg/office1.png" alt="image"> */}
        </div>
        <div className="follow-area">
          <h5 className="blog-widget-title">Follow Us</h5>
          <p className="para">Follow us on Social Network</p>
          <div className="blog-widget-body">
            <ul className="follow-list d-flex flex-row align-items-start gap-4">

      
                <li><a target="_blank" href="https://www.facebook.com/evdtechnologyofficial/"><i className="bx bxl-facebook" /></a></li>
                <li><a target="_blank" href="https://www.youtube.com/@evdtechnology6379"><i className="bx bxl-youtube" /></a></li>
                <li><a target="_blank" href="https://www.linkedin.com/company/evdtechnologyllp"><i className="bx bxl-linkedin" /></a></li>
                <li><a target="_blank" href="https://www.instagram.com/evdtechnologyllp/"><i className="bx bxl-instagram" /></a></li>
         
            </ul>
          </div>
        </div>
      </div>
      <header
        ref={headerRef}
        className={state.scrollY > 10 ? "header-area2 sticky" : "header-area2"}
      >
        <div className="header-logo">
          <Link legacyBehavior href="/">
            <a>
              <img
                alt="image"
                className="img-fluid"
                src="/assets/img/EVDT-LOGO.png"
              />
            </a>
          </Link>
        </div>
        <div className={`main-menu ${state.isSidebarOpen ? "show-menu" : ""}`}>
          <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
            <div className="mobile-logo-wrap">
              <Link legacyBehavior href="/">
                <a>
                  <img alt="image" src="assets/img/logo.svg" />
                </a>
              </Link>
            </div>
          </div>
          <ul className="menu-list">
          <li className={`${currentRoute === "/" ? "active" : ""}`}>
              <Link legacyBehavior href="/">
                <a>home</a>
              </Link>
            </li>
            <li className={`${currentRoute === "/about" ? "active" : ""}`}>
              <Link legacyBehavior href="/about">
                <a>About</a>
              </Link>
            </li>
            {/* <li
              className={`menu-item-has-children services-menu ${[
                "/service",
                "/service2",
                "/service3",
                "/service4",
                "/service-details",
              ].includes(currentRoute)
                ? "active"
                : ""
                }`}
            >
              <a
                href="#"
                className={`drop-down ${state.activeMenu === "service" ? "active" : ""
                  }`}

              >
                Service
              </a>{" "}
              <i
                className={`bi bi-plus dropdown-icon ${state.activeMenu === "service" ? "active" : ""
                  }`}

              />
              <ul
                className={`sub-menu ${state.activeMenu === "service" ? "d-block" : ""}`}
              >
                <li>
                  <ul>
                    <Link legacyBehavior href="/service/web-development">
                      <a className={currentRoute === "/service/web-development" ? "active" : ""}>
                        Web Development
                      </a>
                    </Link>
                    <Link legacyBehavior href="/service/website-development">
                      <a className={currentRoute === "/service/website-development" ? "active" : ""}>
                        Website Development
                      </a>
                    </Link>
                    <Link legacyBehavior href="/service/web-app-development">
                      <a className={currentRoute === "/service/web-app-development" ? "active" : ""}>
                        Web App Development
                      </a>
                    </Link>
                    <Link legacyBehavior href="/service/custom-web-development">
                      <a className={currentRoute === "/service/custom-web-development" ? "active" : ""}>
                        Custom Web Development
                      </a>
                    </Link>
                    <Link legacyBehavior href="/service/e-commerce-development">
                      <a className={currentRoute === "/service/e-commerce-development" ? "active" : ""}>
                        E-commerce Development
                      </a>
                    </Link>
                  </ul>
                </li>
                <li>
                  <ul>
                    <Link legacyBehavior href="/service/ios-app-development">
                      <a className={currentRoute === "/service/ios-app-development" ? "active" : ""}>
                        IOS App Development
                      </a>
                    </Link>

                    <Link legacyBehavior href="/service/mobile-app-development">
                      <a className={currentRoute === "/service/mobile-app-development" ? "active" : ""}>
                        Mobile App Development
                      </a>
                    </Link>

                    <Link legacyBehavior href="/service/hybrid-app-development">
                      <a className={currentRoute === "/service/hybrid-app-development" ? "active" : ""}>
                        Hybrid App Development
                      </a>

                    </Link>
                    <Link legacyBehavior href="/service/android-app-development">
                      <a className={currentRoute === "/service/android-app-development" ? "active" : ""}>
                        Android App Development
                      </a>
                    </Link>
                    <Link legacyBehavior href="/service/progressive-web-app-development">
                      <a className={currentRoute === "/service/progressive-web-app-development" ? "active" : ""}>
                        Progressive Web App Development
                      </a>
                    </Link>
                  </ul>
                </li>
                <li>
                  <ul>
                    <Link legacyBehavior href="/service/software-integration">
                      <a className={currentRoute === "/service/software-integration" ? "active" : ""}>
                        Software Integration
                      </a>
                    </Link>
                    <Link legacyBehavior href="/service/software-development">
                      <a className={currentRoute === "/service/software-development" ? "active" : ""}>
                        Software Development
                      </a>
                    </Link>

                    <Link legacyBehavior href="/service/product-launch-and-support">
                      <a className={currentRoute === "/service/product-launch-and-support" ? "active" : ""}>
                        Product launch & Support
                      </a>
                    </Link>
                    <Link legacyBehavior href="/service/quality-assurance-and-testing">
                      <a className={currentRoute === "/service/quality-assurance-and-testing" ? "active" : ""}>
                        Quality Assurance & testing
                      </a>
                    </Link>
                    <Link legacyBehavior href="/service/product-ideation-and-conceptual">
                      <a className={currentRoute === "/service/product-ideation-and-conceptual" ? "active" : ""}>
                        Product Ideation & Conceptualization
                      </a>
                    </Link>
                  </ul>
                </li>
                <li>
                  <ul>
                    <Link legacyBehavior href="/service/seo">
                      <a className={currentRoute === "/service/seo" ? "active" : ""}>
                        SEO
                      </a>
                    </Link>

                    <Link legacyBehavior href="/service/digital-marketing">
                      <a className={currentRoute === "/service/digital-marketing" ? "active" : ""}>
                        Digital Marketing
                      </a>
                    </Link>
                    <Link legacyBehavior href="/service/social-media-marketing">
                      <a className={currentRoute === "/service/social-media-marketing" ? "active" : ""}>
                        Social Media Marketing
                      </a>
                    </Link>
                    <Link legacyBehavior href="/service/bulk-sms-and-email-marketing">
                      <a className={currentRoute === "/service/bulk-sms-and-email-marketing" ? "active" : ""}>
                        Bulk SMS & Email Marketing
                      </a>
                    </Link>
                    <Link legacyBehavior href="/service/social-media-video-marketing">
                      <a className={currentRoute === "/service/social-media-video-marketing" ? "active" : ""}>
                        Social Media Video Marketing
                      </a>
                    </Link>

                  </ul>
                </li>
                <li><strong>Other Services</strong>
                  <ul>
                    <Link legacyBehavior href="/service/ai-ml">
                      <a className={currentRoute === "/service/ai-ml" ? "active" : ""}>
                        AI/Ml
                      </a>
                    </Link>
                    <Link legacyBehavior href="/service/erp-crm">
                      <a className={currentRoute === "/service/erp-crm" ? "active" : ""}>
                        ERP/CRM
                      </a>
                    </Link>
                    <Link legacyBehavior href="/service/ui-ux-designing">
                      <a className={currentRoute === "/service/ui-ux-designing" ? "active" : ""}>
                        UI/UX Designing
                      </a>
                    </Link>

                    <Link legacyBehavior href="/service/saas-development">
                      <a className={currentRoute === "/service/saas-development" ? "active" : ""}>
                        SaaS Development
                      </a>
                    </Link>
                    <Link legacyBehavior href="/service/staff-augmentation">
                      <a className={currentRoute === "/service/staff-augmentation" ? "active" : ""}>
                        Staff Augmentation
                      </a>
                    </Link>
                  </ul>
                </li>
              </ul>


            </li> */}
            <li
              className={`menu-item-has-children ${state.activeMenu.includes(currentRoute)
                ? "active"
                : ""
                }`}
            >
              <a href="#" className="drop-down">
                Services
              </a>
              <i
                className={`bi bi-plus dropdown-icon ${state.activeMenu === "pages" ? "active" : ""
                  }`}
                onClick={() => toggleMenu("pages")}
              />
              <ul
                className={`sub-menu ${state.activeMenu === "pages" ? "d-block" : ""
                  }`}
              >
                <li>
                  <Link legacyBehavior href="#">
                    <a>Web Development</a>
                  </Link>

                  <i
                    className={`bi bi-plus dropdown-icon ${state.activeSubMenu === "team" ? "active" : ""
                      }`}
                    onClick={() => toggleSubMenu("team")}
                  />
                  <ul
                    className={`sub-menu ${state.activeSubMenu === "team" ? "d-block" : ""
                      }`}
                  >
                    <li>
                      <Link legacyBehavior href="/service/website-development">
                        <a
                          className={currentRoute === "/service/website-development" ? "active" : ""}
                        >
                          Website Development
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service/web-app-development">
                        <a
                          className={currentRoute === "/service/web-app-development" ? "active" : ""}
                        >
                          Web App Development
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service/custom-web-development">
                        <a
                          className={currentRoute === "/service/custom-web-development" ? "active" : ""}
                        >
                          Custom Web Development
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service/e-commerce-development">
                        <a
                          className={currentRoute === "/service/e-commerce-development" ? "active" : ""}
                        >
                          E-Commerce Development
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service/full-stack-development">
                        <a
                          className={currentRoute === "/service/full-stack-development" ? "active" : ""}
                        >
                          Full Stack Development
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link legacyBehavior href="#">
                    <a>Mobile App Development</a>
                  </Link>
                  <i
                    className={`bi bi-plus dropdown-icon ${state.activeSubMenu === "price" ? "active" : ""
                      }`}
                    onClick={() => toggleSubMenu("price")}
                  />
                  <ul
                    className={`sub-menu ${state.activeSubMenu === "price" ? "d-block" : ""
                      }`}
                  >
                    <li>
                      <Link legacyBehavior href="/service/android-app-development">
                        <a
                          className={
                            currentRoute === "/service/android-app-development" ? "active" : ""
                          }
                        >
                          Android App Development
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service/ios-app-development">
                        <a
                          className={
                            currentRoute === "/service/ios-app-development" ? "active" : ""
                          }
                        >
                          IOS App Development
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service/hybrid-app-development">
                        <a
                          className={
                            currentRoute === "/service/hybrid-app-development" ? "active" : ""
                          }
                        >
                          Hybrid App Development
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service/progressive-web-app-development">
                        <a
                          className={
                            currentRoute === "/service/progressive-web-app-development" ? "active" : ""
                          }
                        >
                          Progressive Web App Development
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service/product-development">
                        <a
                          className={
                            currentRoute === "/service/product-development" ? "active" : ""
                          }
                        >
                          Product Development
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link legacyBehavior href="#">
                    <a>Software Development</a>
                  </Link>
                  <i
                    className={`bi bi-plus dropdown-icon ${state.activeSubMenu === "price" ? "active" : ""
                      }`}
                    onClick={() => toggleSubMenu("price")}
                  />
                  <ul
                    className={`sub-menu ${state.activeSubMenu === "price" ? "d-block" : ""
                      }`}
                  >
                    <li>
                      <Link legacyBehavior href="/service/product-ideation-and-conceptual">
                        <a
                          className={
                            currentRoute === "/service/product-ideation-and-conceptual" ? "active" : ""
                          }
                        >
                          Product Ideation & Conceptualization
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service/product-launch-and-support">
                        <a
                          className={
                            currentRoute === "/service/product-launch-and-support" ? "active" : ""
                          }
                        >
                          Product Launch & Support
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service/quality-assurance-and-testing">
                        <a
                          className={
                            currentRoute === "/service/quality-assurance-and-testing" ? "active" : ""
                          }
                        >
                          Quality Assurance & Testing
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service/software-integration">
                        <a
                          className={
                            currentRoute === "/service/software-integration" ? "active" : ""
                          }
                        >
                          Software Integration
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link legacyBehavior href="#">
                    <a>Digital Marketing</a>
                  </Link>
                  <i
                    className={`bi bi-plus dropdown-icon ${state.activeSubMenu === "price" ? "active" : ""
                      }`}
                    onClick={() => toggleSubMenu("price")}
                  />
                  <ul
                    className={`sub-menu ${state.activeSubMenu === "price" ? "d-block" : ""
                      }`}
                  >
                    <li>
                      <Link legacyBehavior href="/service/social-media-marketing">
                        <a
                          className={
                            currentRoute === "/service/social-media-marketing" ? "active" : ""
                          }
                        >
                          Social Media Marketing 
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service/seo">
                        <a
                          className={
                            currentRoute === "/service/seo" ? "active" : ""
                          }
                        >
                          SEO
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service/content-marketing">
                        <a
                          className={
                            currentRoute === "/service/content-marketing" ? "active" : ""
                          }
                        >
                          Content Marketing
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service/social-media-video-marketing">
                        <a
                          className={
                            currentRoute === "/service/social-media-video-marketing" ? "active" : ""
                          }
                        >
                          Social Media Video Marketing
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service/graphic-designing">
                        <a
                          className={
                            currentRoute === "/service/graphic-designing" ? "active" : ""
                          }
                        >
                          Graphic Designing
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service/website-audit">
                        <a
                          className={
                            currentRoute === "/service/website-audit" ? "active" : ""
                          }
                        >
                          Website Audit
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service/bulk-sms-and-email-marketing">
                        <a
                          className={
                            currentRoute === "/service/bulk-sms-and-email-marketing" ? "active" : ""
                          }
                        >
                          Bulk SMS & Email Marketing
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link legacyBehavior href="#">
                    <a>UI/UX Designing</a>
                  </Link>
                  <i
                    className={`bi bi-plus dropdown-icon ${state.activeSubMenu === "price" ? "active" : ""
                      }`}
                    onClick={() => toggleSubMenu("price")}
                  />
                  <ul
                    className={`sub-menu ${state.activeSubMenu === "price" ? "d-block" : ""
                      }`}
                  >
                    <li>
                      <Link legacyBehavior href="/service/web-and-mobile-app-design">
                        <a
                          className={
                            currentRoute === "/service/web-and-mobile-app-design" ? "active" : ""
                          }
                        >
                         Web & Mobile App Designing
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service/logo-designing">
                        <a
                          className={
                            currentRoute === "/service/logo-designing" ? "active" : ""
                          }
                        >
                          Logo Designing
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service/redesign-and-modernizing-services">
                        <a
                          className={
                            currentRoute === "/service/redesign-and-modernizing-services" ? "active" : ""
                          }
                        >
                          Redesign & Modernizing Services
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link legacyBehavior href="#">
                    <a>ERP/CRM</a>
                  </Link>
                  <i
                    className={`bi bi-plus dropdown-icon ${state.activeSubMenu === "price" ? "active" : ""
                      }`}
                    onClick={() => toggleSubMenu("price")}
                  />
                  <ul
                    className={`sub-menu ${state.activeSubMenu === "price" ? "d-block" : ""
                      }`}
                  >
                    <li>
                      <Link legacyBehavior href="/service/erp-crm">
                        <a
                          className={
                            currentRoute === "/service/erp-crm" ? "active" : ""
                          }
                        >
                          ERP
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service/crm">
                        <a
                          className={
                            currentRoute === "/service/crm" ? "active" : ""
                          }
                        >
                          CRM
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link legacyBehavior href="#">
                    <a>Saas Development</a>
                  </Link>
                  <i
                    className={`bi bi-plus dropdown-icon ${state.activeSubMenu === "price" ? "active" : ""
                      }`}
                    onClick={() => toggleSubMenu("price")}
                  />
                  <ul
                    className={`sub-menu ${state.activeSubMenu === "price" ? "d-block" : ""
                      }`}
                  >
                    <li>
                      <Link legacyBehavior href="/service/optimizing-saas-application">
                        <a
                          className={
                            currentRoute === "/service/optimizing-saas-application" ? "active" : ""
                          }
                        >
                          Optimizing Saas Application
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service/integration-with-third-party-api">
                        <a
                          className={
                            currentRoute === "/service/integration-with-third-party-api" ? "active" : ""
                          }
                        >
                          Integration With third Party APIs
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service/testing">
                        <a
                          className={
                            currentRoute === "/service/testing" ? "active" : ""
                          }
                        >
                          Testing 
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link legacyBehavior href="#">
                    <a>Staff Augmentation</a>
                  </Link>
                  <i
                    className={`bi bi-plus dropdown-icon ${state.activeSubMenu === "price" ? "active" : ""
                      }`}
                    onClick={() => toggleSubMenu("price")}
                  />
                  <ul
                    className={`sub-menu ${state.activeSubMenu === "price" ? "d-block" : ""
                      }`}
                  >
                    <li>
                      <Link legacyBehavior href="/service/remote-staffing">
                        <a
                          className={
                            currentRoute === "/service/remote-staffing" ? "active" : ""
                          }
                        >
                          Remote Staffing
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service/outsourcing">
                        <a
                          className={
                            currentRoute === "/service/outsourcing" ? "active" : ""
                          }
                        >
                          Outsourcing
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service/contract-staffing">
                        <a
                          className={
                            currentRoute === "/service/contract-staffing" ? "active" : ""
                          }
                        >
                          Contract Staffing
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service/project-based-staffing">
                        <a
                          className={
                            currentRoute === "/service/project-based-staffing" ? "active" : ""
                          }
                        >
                          Project Based Staffing 
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link legacyBehavior href="#">
                    <a>AI/ML</a>
                  </Link>
                  <i
                    className={`bi bi-plus dropdown-icon ${state.activeSubMenu === "price" ? "active" : ""
                      }`}
                    onClick={() => toggleSubMenu("price")}
                  />
                  <ul
                    className={`sub-menu ${state.activeSubMenu === "price" ? "d-block" : ""
                      }`}
                  >
                    <li>
                      <Link legacyBehavior href="/service/artificial-intelligence">
                        <a
                          className={
                            currentRoute === "/service/artificial-intelligence" ? "active" : ""
                          }
                        >
                          Artificial Intelligence
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service/machine-learning">
                        <a
                          className={
                            currentRoute === "/service/machine-learning" ? "active" : ""
                          }
                        >
                          Machine Learning
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service/data-science">
                        <a
                          className={
                            currentRoute === "/service/data-science" ? "active" : ""
                          }
                        >
                          Data Science
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li
              className={` ${["/project", "/project-masonary", "/project-details"].includes(
                currentRoute
              )
                ? "active"
                : ""
                }`}
            >
              <a href="/project-masonary" className="d">
                Project
              </a>
             
            </li>
            <li
              className={`menu-item-has-children ${[
                "/team1",
                "/team2",
                "/team3",
                "/pricing1",
                "/pricing2",
                "/contact",
                "/faq",
                "/error",
              ].includes(currentRoute)
                ? "active"
                : ""
                }`}
            >
              <a href="#" className="drop-down">
                Products
              </a>
              <i
                className={`bi bi-plus dropdown-icon ${state.activeMenu === "pages" ? "active" : ""
                  }`}
                onClick={() => toggleMenu("pages")}
              />
              <ul
                className={`sub-menu ${state.activeMenu === "pages" ? "d-block" : ""
                  }`}
              >
                {/* <li>
                  <Link legacyBehavior href="/team1">
                    <a>Team</a>
                  </Link>

                  <i
                    className={`bi bi-plus dropdown-icon ${state.activeSubMenu === "team" ? "active" : ""
                      }`}
                    onClick={() => toggleSubMenu("team")}
                  />
                  <ul
                    className={`sub-menu ${state.activeSubMenu === "team" ? "d-block" : ""
                      }`}
                  >
                    <li>
                      <Link legacyBehavior href="/team1">
                        <a
                          className={currentRoute === "/team1" ? "active" : ""}
                        >
                          Team 01
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/team2">
                        <a
                          className={currentRoute === "/team2" ? "active" : ""}
                        >
                          Team 02
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/team3">
                        <a
                          className={currentRoute === "/team3" ? "active" : ""}
                        >
                          Team 03
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link legacyBehavior href="/pricing">
                    <a>Pricing</a>
                  </Link>
                  <i
                    className={`bi bi-plus dropdown-icon ${state.activeSubMenu === "price" ? "active" : ""
                      }`}
                    onClick={() => toggleSubMenu("price")}
                  />
                  <ul
                    className={`sub-menu ${state.activeSubMenu === "price" ? "d-block" : ""
                      }`}
                  >
                    <li>
                      <Link legacyBehavior href="/pricing">
                        <a
                          className={
                            currentRoute === "/pricing" ? "active" : ""
                          }
                        >
                          Pricing 01
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/pricing2">
                        <a
                          className={
                            currentRoute === "/pricing2" ? "active" : ""
                          }
                        >
                          Pricing 02
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link legacyBehavior href="/contact">
                    <a className={currentRoute === "/contact" ? "active" : ""}>
                      Contact
                    </a>
                  </Link>
                </li> */}
                <li>
                  <Link legacyBehavior href="/evd-academy">
                    <a className={currentRoute === "/evd-academy" ? "active" : ""}>
                      EVD Academy 
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/evd-erp">
                    <a className={currentRoute === "/evd-erp" ? "active" : ""}>
                      EVD ERP
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/evd-smartbook">
                    <a className={currentRoute === "/evd-smartbook" ? "active" : ""}>
                     EVD Smartbook
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className={` ${[
                "/case-study"
              ].includes(currentRoute)
                ? "active"
                : ""
                }`}
            >
              <a
                href="/case-study"
                className={`drop-down ${state.activeMenu === "case" ? "active" : ""
                  }`}
              >
                Case Study
              </a>
              {/* <i
                className={`bi bi-plus dropdown-icon ${state.activeMenu === "case" ? "active" : ""
                  }`}
                onClick={() => toggleMenu("case")}
              />
              <ul
                className={`sub-menu ${state.activeMenu === "case" ? "d-block" : ""
                  }`}
              >
                <li>
                  <Link legacyBehavior href="/case-study">
                    <a
                      className={currentRoute === "/case-study" ? "active" : ""}
                    >
                      Case study 01
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/case-study2">
                    <a
                      className={
                        currentRoute === "/case-study2" ? "active" : ""
                      }
                    >
                      Case study 02
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/case-study-standard">
                    <a
                      className={
                        currentRoute === "/case-study-standard" ? "active" : ""
                      }
                    >
                      Case study standard
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/case-study-details">
                    <a
                      className={
                        currentRoute === "/case-study-details" ? "active" : ""
                      }
                    >
                      Case study Details
                    </a>
                  </Link>
                </li>
              </ul> */}
            </li>
            <li
              className={` ${[
          
                "/blog-sidebar",
              ].includes(currentRoute)
                ? "active"
                : ""
                }`}
            >
              <a
                href="/blog-sidebar"
                className={`drop-down ${state.activeMenu === "blog" ? "active" : ""
                  }`}
                onClick={() => toggleMenu("blog")}
              >
                Blog
              </a>
              <i
                className={`bi bi-plus dropdown-icon ${state.activeMenu === "blog" ? "active" : ""
                  }`}
                onClick={() => toggleMenu("blog")}
              />
              {/* <ul
                className={`sub-menu ${state.activeMenu === "blog" ? "d-block" : ""
                  }`}
              >
                <li>
                  <Link legacyBehavior href="/blog">
                    <a className={currentRoute === "/blog" ? "active" : ""}>
                      Blog
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/blog-standard">
                    <a
                      className={
                        currentRoute === "/blog-standard" ? "active" : ""
                      }
                    >
                      Blog standard
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/blog-sidebar">
                    <a
                      className={
                        currentRoute === "/blog-sidebar" ? "active" : ""
                      }
                    >
                      Blog Sidebar
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/blog-masonary">
                    <a
                      className={
                        currentRoute === "/blog-masonary" ? "active" : ""
                      }
                    >
                      Blog Masonary
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/blog-details">
                    <a
                      className={
                        currentRoute === "/blog-details" ? "active" : ""
                      }
                    >
                      Blog Details
                    </a>
                  </Link>
                </li>
              </ul> */}
            </li>
          </ul>
          <div className="d-lg-none d-block">
            <form className="mobile-menu-form">
              <div className="hotline pt-30">
                <div className="hotline-icon">
                  <svg
                    width={26}
                    height={26}
                    viewBox="0 0 26 26"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.5488 16.106C20.0165 15.5518 19.3745 15.2554 18.694 15.2554C18.0191 15.2554 17.3716 15.5463 16.8173 16.1005L15.0833 17.8291C14.9406 17.7522 14.7979 17.6809 14.6608 17.6096C14.4632 17.5108 14.2766 17.4175 14.1175 17.3187C12.4932 16.2871 11.0171 14.9426 9.6013 13.2031C8.91536 12.3361 8.45441 11.6063 8.11968 10.8655C8.56965 10.4539 8.9867 10.0259 9.39277 9.61431C9.54642 9.46066 9.70007 9.30152 9.85372 9.14787C11.0061 7.9955 11.0061 6.50291 9.85372 5.35054L8.35564 3.85246C8.18553 3.68234 8.00993 3.50674 7.8453 3.33115C7.51606 2.99092 7.17034 2.63972 6.81366 2.31047C6.28137 1.78368 5.64483 1.50381 4.97535 1.50381C4.30588 1.50381 3.65836 1.78368 3.10961 2.31047C3.10412 2.31596 3.10412 2.31596 3.09864 2.32145L1.23289 4.20365C0.530497 4.90605 0.129911 5.7621 0.0421114 6.75533C-0.089588 8.35768 0.382335 9.85027 0.744508 10.827C1.63348 13.2251 2.96145 15.4475 4.94243 17.8291C7.34594 20.699 10.2378 22.9653 13.5413 24.5622C14.8034 25.1603 16.4881 25.8682 18.3703 25.9889C18.4855 25.9944 18.6062 25.9999 18.716 25.9999C19.9836 25.9999 21.0482 25.5445 21.8823 24.639C21.8878 24.628 21.8987 24.6226 21.9042 24.6116C22.1896 24.2659 22.5188 23.9531 22.8645 23.6184C23.1005 23.3934 23.3419 23.1574 23.5779 22.9105C24.1212 22.3453 24.4065 21.6868 24.4065 21.0118C24.4065 20.3314 24.1157 19.6783 23.5614 19.1296L20.5488 16.106ZM22.5133 21.8843C22.5078 21.8843 22.5078 21.8898 22.5133 21.8843C22.2993 22.1148 22.0798 22.3233 21.8439 22.5538C21.4872 22.894 21.125 23.2507 20.7848 23.6513C20.2305 24.2439 19.5775 24.5238 18.7215 24.5238C18.6392 24.5238 18.5514 24.5238 18.4691 24.5183C16.8393 24.414 15.3247 23.7775 14.1888 23.2342C11.0829 21.7307 8.35564 19.596 6.08931 16.8907C4.21808 14.6354 2.96694 12.5501 2.13833 10.3112C1.62799 8.94484 1.44142 7.88026 1.52373 6.87606C1.57861 6.23402 1.82554 5.70174 2.281 5.24628L4.15223 3.37504C4.42112 3.12262 4.70647 2.98543 4.98633 2.98543C5.33204 2.98543 5.6119 3.19396 5.7875 3.36956C5.79299 3.37504 5.79847 3.38053 5.80396 3.38602C6.1387 3.69881 6.45697 4.02257 6.79171 4.36828C6.96182 4.54388 7.13742 4.71948 7.31302 4.90056L8.8111 6.39865C9.39277 6.98032 9.39277 7.51809 8.8111 8.09976C8.65196 8.2589 8.49831 8.41804 8.33918 8.57169C7.87823 9.04361 7.43923 9.48261 6.96182 9.91063C6.95085 9.92161 6.93987 9.92709 6.93438 9.93807C6.46246 10.41 6.55026 10.8709 6.64903 11.1837C6.65452 11.2002 6.66001 11.2167 6.6655 11.2331C7.05511 12.177 7.60385 13.0659 8.43795 14.125L8.44344 14.1305C9.95798 15.9962 11.5548 17.4504 13.3163 18.5644C13.5413 18.7071 13.7718 18.8223 13.9913 18.932C14.1888 19.0308 14.3754 19.1241 14.5345 19.2229C14.5565 19.2339 14.5784 19.2503 14.6004 19.2613C14.787 19.3546 14.9626 19.3985 15.1436 19.3985C15.5991 19.3985 15.8845 19.1131 15.9777 19.0198L17.8545 17.1431C18.041 16.9566 18.3374 16.7316 18.6831 16.7316C19.0233 16.7316 19.3032 16.9456 19.4733 17.1322C19.4788 17.1376 19.4788 17.1376 19.4842 17.1431L22.5078 20.1667C23.0731 20.7265 23.0731 21.3026 22.5133 21.8843Z"></path>
                    <path d="M14.0512 6.18495C15.4889 6.4264 16.7949 7.10685 17.8375 8.14947C18.8802 9.19209 19.5551 10.4981 19.8021 11.9358C19.8624 12.298 20.1752 12.5504 20.5319 12.5504C20.5758 12.5504 20.6142 12.5449 20.6581 12.5395C21.0642 12.4736 21.3331 12.0895 21.2672 11.6834C20.9709 9.94387 20.1478 8.35799 18.8911 7.10136C17.6345 5.84473 16.0486 5.0216 14.3091 4.72528C13.903 4.65943 13.5244 4.92832 13.4531 5.3289C13.3817 5.72949 13.6451 6.1191 14.0512 6.18495Z"></path>
                    <path d="M25.9707 11.4691C25.4823 8.60468 24.1324 5.99813 22.0581 3.92387C19.9838 1.8496 17.3773 0.49968 14.5128 0.011294C14.1122 -0.0600432 13.7336 0.214331 13.6623 0.614917C13.5964 1.02099 13.8653 1.39963 14.2714 1.47096C16.8285 1.90447 19.1607 3.11721 21.0155 4.96649C22.8702 6.82125 24.0775 9.15343 24.511 11.7106C24.5714 12.0728 24.8841 12.3252 25.2408 12.3252C25.2847 12.3252 25.3231 12.3197 25.367 12.3142C25.7676 12.2539 26.042 11.8697 25.9707 11.4691Z"></path>
                  </svg>
                </div>
                <div className="hotline-info">
                  <span>Call Us Now</span>
                  <h6>
                    <a href="tel:29658718617">2-965-871-8617</a>
                  </h6>
                </div>
              </div>
              <div className="email pt-20 d-flex align-items-center">
                <div className="email-icon">
                  <svg
                    width={26}
                    height={26}
                    viewBox="0 0 26 26"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_461_205)">
                      <path d="M23.5117 3.30075H2.38674C1.04261 3.30075 -0.0507812 4.39414 -0.0507812 5.73827V20.3633C-0.0507812 21.7074 1.04261 22.8008 2.38674 22.8008H23.5117C24.8558 22.8008 25.9492 21.7074 25.9492 20.3633V5.73827C25.9492 4.39414 24.8558 3.30075 23.5117 3.30075ZM23.5117 4.92574C23.6221 4.92574 23.7271 4.94865 23.8231 4.98865L12.9492 14.4131L2.07526 4.98865C2.17127 4.9487 2.27629 4.92574 2.38668 4.92574H23.5117ZM23.5117 21.1757H2.38674C1.93844 21.1757 1.57421 20.8116 1.57421 20.3632V6.70547L12.4168 16.1024C12.57 16.2349 12.7596 16.3008 12.9492 16.3008C13.1388 16.3008 13.3285 16.2349 13.4816 16.1024L24.3242 6.70547V20.3633C24.3242 20.8116 23.96 21.1757 23.5117 21.1757Z"></path>
                    </g>
                  </svg>
                </div>
                <div className="email-info">
                  <span>Email Now</span>
                  <h6>
                    <a href="mailto:example@gmail.com">example@gmail.com</a>
                  </h6>
                </div>
              </div>
            </form>
            <div className="header-btn5">
              <Link legacyBehavior href="/contact">
                <a className="primary-btn3">Get A Quote</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="nav-right d-flex jsutify-content-end align-items-center">
          <div className="sidebar-btn2" onClick={toggleLeftSidebar}>
            <img src="/assets/img/home-3/sidebar-btn.svg" alt="" />
          </div>
          <div className="header-btn d-xl-flex d-none">
            <Link legacyBehavior href="/contact">
              <a className="primary-btn3">Get A Quote</a>
            </Link>
          </div>
          <div
            className={`sidebar-button mobile-menu-btn ${state.isSidebarOpen ? "active" : ""
              }`}
            onClick={toggleSidebar}
          >
            <span />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
