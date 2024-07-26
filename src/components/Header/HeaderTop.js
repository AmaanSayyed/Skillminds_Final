const HeaderTop = () => {
    return (
        <div className="header-top">
            <div className="container th-container4">
                <div className="row justify-content-center justify-content-lg-between align-items-center">
                    <div className="col-auto d-none d-md-block">
                        <div className="header-links">
                            <ul>
                                <li><i className="fa-regular fa-phone"></i><a href="tel:+919322825631">+91-9322825631</a></li>
                                <li className="d-none d-xl-inline-block"><i className="fa-sharp fa-regular fa-location-dot"></i>
                                    <span>Ruddhi Sankul-1st floor,Nashik ,India </span>
                                </li>
                                <li><i className="fa-regular fa-envelope"></i><a href="mailto:info@skillminds.in">info@skillminds.in</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="social-links">
                            <span className="social-title">Follow Us On:</span>
                            
                            {/* add social media links here */}
                            <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                            <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default HeaderTop;