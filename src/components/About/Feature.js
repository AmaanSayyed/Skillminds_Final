const Feature = () => {
    return (
    <div className="space" data-bg-src="/assets/img/bg/why_bg_1.png">
        <div className="container">
            <div className="row align-items-center flex-row-reverse">
                <div className="col-xxl-7 col-xl-6 mb-30 mb-xl-0">
                    <div className="img-box2">
                        <div className="img1">
                            <img src="/assets/img/normal/why_1_1.jpg" alt="Why"/>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-5 col-xl-6">
                    <div className="title-area mb-35">
                        <span className="sub-title">
                            <div className="icon-masking me-2">
                                <span className="mask-icon" data-mask-src="/assets/img/theme-img/title_shape_1.svg"></span>
                                <img src="/assets/img/theme-img/title_shape_1.svg" alt="shape"/>
                            </div>
                            WHY CHOOSE US
                        </span>
                        <h2 className="sec-title">We Excel in Salesforce Consulting and <span className="text-theme">IT Services</span></h2>
                    </div>
                    <p className="mt-n2 mb-30">At SkillMinds, we are committed to delivering transformative cloud-based business solutions that drive success for organizations of all sizes. </p>
                    <div className="two-column">
                        <div className="checklist style2">
                            <ul>
                                <li><i className="far fa-check"></i> Extensive Salesforce Expertise</li>
                                <li><i className="far fa-check"></i> Diverse Domain Knowledge</li>
                                <li><i className="far fa-check"></i> Certified Professionals</li>
                            </ul>
                        </div>
                        <div className="checklist style2">
                            <ul>
                                <li><i className="far fa-check"></i> Comprehensive Service Offering</li>
                                <li><i className="far fa-check"></i> Proven Track Record</li>
                                <li><i className="far fa-check"></i> Personalized Support and Innovation</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}
 
export default Feature;