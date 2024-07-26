import { Link } from "react-router-dom";


const About = () => {
    return ( 
        
// About Area  
<div>
    <section id="about-sec">
    <div className="space-bottom" >
        <div className="container th-container4">
            <div className="row">
                <div className="col-xl-6 mb-30 mb-xl-0">
                    <div className="img-box17 pe-xl-5">
                        <div className="img1">
                            <img src="./assets/img/normal/about_15_1.jpg" alt="About"/>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="title-area mb-35">
                        <span className="sub-title text-capitalize fs-20">
                            <div className="icon-masking me-2">
                                <img src="./assets/img/theme-img/title_shape_4.svg" alt="shape"/>
                            </div>About SkillMinds
                        </span>
                        <h2 className="sec-title">Your Salesforce Consulting Partner
                        To Help You Achieve Success and Beyond</h2>
                    </div>
                    <p className="mt-n2 mb-25">SkillMinds is the full-service Salesforce consulting firm with the resources and experience to get the job done right. We deliver success through the development of transformative cloud-based business solutions in partnership with our customers. As our clients undertake digital transformation, we are there to guide them every step.</p>
                    <div className="about-feature-wrap style5">
                        <div>
                            <div className="about-feature style5">
                                <div className="about-feature_icon">
                                    <img src="./assets/img/icon/about_feature_2_1.svg" alt="Icon"/>
                                </div>
                                <div className="media-body">
                                    <h3 className="about-feature_title">Seamless Salesforce Integration</h3>
                                </div>
                            </div>
                            <div className="about-feature style5">
                                <div className="about-feature_icon">
                                    <img src="./assets/img/icon/about_feature_2_2.svg" alt="Icon"/>
                                </div>
                                <div className="media-body">
                                    <h3 className="about-feature_title">24x7 Support</h3>
                                </div>
                            </div>
                            <div className="btn-group style3">
                                <Link to="/about" className="th-btn style-radius text-capitalize">Details</Link>
                                <div className="call-btn">
                                    <i className="fas fa-phone"></i>
                                    <div className="media-body">
                                        <span className="btn-text">Call Now!</span>
                                        <a href="tel:+25632542598" className="btn-title">+91-9322825631</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about-img">
                            <img src="./assets/img/normal/about_15_2.jpg" alt=""/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <div className="shape-mockup" data-bottom="0%" data-right="0%"><img src="./assets/img/shape/about_shape.png" alt="shape"/>
    </div>
    </section>
</div>

    
    );
}
 
export default About;