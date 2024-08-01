import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu"; // Assuming MobileMenu component is in the same directory

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle sticky class based on scroll position
  const handleScroll = () => {
    const topPos = window.scrollY;
    setIsSticky(topPos > 500);
  };

  // Add scroll event listener on component mount
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`sticky-wrapper ${isSticky ? "sticky" : ""} tw-shadow-md`}>
      <div className="menu-area tw-bg-white">
        <div className="container th-container4">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto">
              <div className="header-logo">
                <a href="/">
                  <span data-mask-src="./assets/img/skillminds_logo.png"></span>
                  <img
                    src="./assets/img/skillminds_logo.png"
                    alt="Webteck"
                    style={{ width: "12rem" }}
                  />
                </a>
              </div>
            </div>
            <div className="col-auto">
              <nav className="main-menu style2 d-none d-lg-inline-block">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li className="menu-item-has-children ">
                    <Link to="/#about-sec">Company</Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/ourteam">Our Team</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/#service-sec">Services</Link>
                  </li>
                  <li className="menu-item-has-children">
                    {/* make unclickable link */}
                    <a className="">CAREER</a>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/jobs">Join Us</Link>
                      </li>
                      <li>
                        <Link to="/training">Training</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/blogs">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </nav>
              <button
                type="button"
                className="th-menu-toggle d-block d-lg-none"
                onClick={toggleMenu}
              >
                <i className="far fa-bars"></i>
              </button>
            </div>
            <div className="col-auto d-xl-block d-none">
              <div className="header-button">
                <a href="tel:+2586232325" className="th-btn style-radius">
                  Call us: +91-9322825631
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pass isMenuOpen state and toggleMenu function to MobileMenu */}
      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </div>
  );
};

export default Navbar;
