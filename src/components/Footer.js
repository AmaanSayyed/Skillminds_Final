import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer-wrapper footer-layout5 footer-layout12 footer-layout14" data-bg-src="./assets/img/bg/footer_bg.jpg">
        <div className="container th-container4">
            <div className="widget-area">
                <div className="row justify-content-between">
                    <div className="col-md-6 col-xxl-3 col-xl-4">
                        <div className="widget footer-widget">
                            <h3 className="widget_title style2 text-white">About Company</h3>
                            <div className="th-widget-about style2">
                                <p className="about-text">SkillMinds is the full-service Salesforce consulting firm with the resources and experience to get the job done right. </p>
                                <div className="th-social">
                                    <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
                                    <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-auto">
                        <div className="widget footer-widget">
                            <h3 className="widget_title style2 text-white">Address</h3>
                            <div className="th-widget-about">
                                <div className="footer-info">
                                    <p className="footer-info_text">
                                        <a href="tel:+919322825631" className="text-inherit">+91-9322825631</a>
                                    </p>
                                </div>
                                <p className="footer-info"><a className="text-inherit" href="mailto:info@skillminds.in">info@skillminds.in</a></p>
                                <p className="footer-info">Ruddhi Sankul-1st floor,Nashik ,India</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-auto">
                        <div className="widget widget_nav_menu footer-widget">
                            <h3 className="widget_title style2 text-white">Company</h3>
                            <div className="menu-all-pages-container">
                                <ul className="menu">
                                    <li><a href="/#service-sec">What we Offer</a></li>
                                    <li><a href="/about">Our Story</a></li>
                                    <li><a href="/blogs">Latest Posts</a></li>
                                    <li><a href="/jobs">Join Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-auto">
                        <div className="widget widget_offer footer-widget">
                            <h3 className="widget_title style2 text-white">Our Courses</h3>
                            <div className="download-btn-wrap">
                                <div className="mb-10">
                                    <a target="_blank" href="https://play.google.com/" className="download-btn">
                                        <img src="./Skillminds_Dev_Website/assets/img/normal/google-play.png" alt=""/>
                                    </a>
                                </div>
                                <div>
                                    <a target="_blank" href="https://www.apple.com/store" className="download-btn">
                                        <img src="./Skillminds_Dev_Website/assets/img/normal/app.png" alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-wrap">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-4">
                        <p className="copyright-text">Copyright <i className="fal fa-copyright"></i> 2024 <a href="">SkillMinds</a>. All Rights Reserved.</p>
                    </div>
                    <div className="col-lg-4 text-center">
                        <span className="tw-text-white">Made with ☕ & ❤️</span>
                    </div>
                    <div className="col-lg-4 text-center text-md-end">
                        <ul className="footer-menu">
                            <li><Link to="/#service-sec">Services</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/blogs">Articles</Link></li>
                            <li><Link to="/contact-us">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
}
 
export default Footer;