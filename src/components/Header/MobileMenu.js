import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = ({ isMenuOpen, toggleMenu }) => {
  const handleLinkClick = () =>  {
    toggleMenu(); // Close the menu when a link is clicked
  };

  return (
    <div className={`th-menu-wrapper ${isMenuOpen ? "th-body-visible" : ""}`}>
      <div className={`th-menu-area text-center ${isMenuOpen ? "th-body-visible" : ""}`}>
        <button className="th-menu-toggle" onClick={toggleMenu}>
          <i className="fal fa-times"></i>
        </button>
        <div className="mobile-logo">
          <a href="/">
            <span data-mask-src="" className="mask-icon"></span>
            <img src="./assets/img/skillminds_logo.png" alt="Webteck" style={{ width: '12rem' }} />
          </a>
        </div>

        <div className="th-mobile-menu" style={{ display: isMenuOpen ? 'block' : 'none' }}>
          <ul>
            <li className="menu-item-has-children mega-menu-wrap">
                {/* add scroll top for home */}
              <Link  to="/" onClick={handleLinkClick} >Home</Link>
            </li>
            <li className="menu-item-has-children">
              <Link to="/#about-sec" onClick={handleLinkClick}>Company</Link>
              <ul className="sub-menu">
                <li><Link to="/about" onClick={handleLinkClick}>About Us</Link></li>
                <li><Link to="/ourteam" onClick={handleLinkClick}>Our Team</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/#service-sec" onClick={handleLinkClick}>Services</Link>
            </li>
            <li>
              <li className="tw-text-slate-700">Career</li>
              <ul className="sub-menu">
                <li><Link to="/jobs" onClick={handleLinkClick}>Join Us</Link></li>
                <li><Link to="/training" onClick={handleLinkClick}>Training</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/blogs" onClick={handleLinkClick}>Blog</Link>
            </li>
            <li>
              <Link to="/contact-us" onClick={handleLinkClick}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
