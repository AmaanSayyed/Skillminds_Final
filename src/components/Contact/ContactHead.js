const ContactHead = () => {
    return ( 
    <div className="space">
        <div className="container">
            <div className="row gy-4">
                <div className="col-xl-4 col-md-6">
                    <div className="contact-info">
                        <div className="contact-info_icon">
                            <i className="fas fa-location-dot"></i>
                        </div>
                        <div className="media-body">
                            <h4 className="box-title">Our Office Address</h4>
                            <span className="contact-info_text">Ruddhi Sankul-1st/2nd floor<br/> Nashik, India</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="contact-info">
                        <div className="contact-info_icon">
                            <i className="fas fa-phone"></i>
                        </div>
                        <div className="media-body">
                            <h4 className="box-title">Call Us Anytime</h4>
                            <span className="contact-info_text">
                                <a href="tel:+65485965789">+91-9322825631</a>
                                <a href="tel:+65485965789">+91-9322825631</a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="contact-info">
                        <div className="contact-info_icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="media-body">
                            <h4 className="box-title">Send An Email</h4>
                            <span className="contact-info_text">
                                <a href="mailto:info.example@gmail.com">info@skillminds.in</a>
                                <a href="mailto:info@webteck.com">myhr@skillminds.in</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default ContactHead;