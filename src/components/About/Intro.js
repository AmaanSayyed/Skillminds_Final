import useMask from '../../hooks/useMask';

const Intro = () => {
    useMask();
    return (
    <div className="overflow-hidden space" id="about-sec">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-6 mb-30 mb-xl-0">
                    <div className="img-box1">
                        <div className="img1">
                            <img src="/assets/img/normal/about_1_1.png" alt="About"/>
                        </div>
                        <div className="shape1">
                            <img src="/assets/img/normal/about_shape_1.png" alt="shape"/>
                        </div>
                        <div className="year-counter">
                            <h3 className="year-counter_number"><span className="counter-number">25</span></h3>
                            <p className="year-counter_text">Years Experience</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="ps-xxl-4 ms-xl-3">
                        <div className="title-area mb-35">
                            <span className="sub-title">
                                <div className="icon-masking me-2">
                                    <span className="mask-icon" data-mask-src="/assets/img/theme-img/title_shape_1.svg"></span>
                                    <img src="/assets/img/theme-img/title_shape_1.svg" alt="shape"/>
                                </div>About Us
                            </span>
                            <h2 className="sec-title">Grow your Business Scale Up at demand with <span className="text-theme">SkillMinds</span></h2>
                        </div>
                        <p className="mt-n2 mb-25">SkillMinds is a full-service Salesforce consulting and product development firm.We deliver success through the development of transformative cloud-based business solutions in partnership with our customers.</p>
                        <div className="about-feature-wrap">
                            <div className="about-feature">
                                <div className="about-feature_icon ">
                                    <img src="/assets/img/icon/about_feature_1_1.svg" alt="Icon"/>
                                </div>
                                <div className="media-body">
                                    <h3 className="about-feature_title">Certified Company</h3>
                                    <p className="about-feature_text">Certified Cloud Experts</p>
                                </div>
                            </div>
                            <div className="about-feature">
                                <div className="about-feature_icon">
                                    <img src="/assets/img/icon/about_feature_1_2.svg" alt="Icon"/>
                                </div>
                                <div className="media-body">
                                    <h3 className="about-feature_title">Expert Developers</h3>
                                    <p className="about-feature_text">Skilled Professionals</p>
                                </div>
                            </div>
                        </div>
                        <div className="btn-group">
                            <a href="about.html" className="th-btn">Join Us<i className="fa-regular fa-arrow-right ms-2"></i></a>
                            <div className="call-btn">
                                <div className="play-btn">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="media-body">
                                    <span className="btn-text">Call Us On:</span>
                                    <a href="tel:+919322825631" className="btn-title">+91-9322825631</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default Intro;