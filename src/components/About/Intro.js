import useMask from '../../hooks/useMask';

const Intro = () => {
    const storyText=`Founded in 2020 amidst the challenges of the COVID-19 pandemic, <span class="tw-bg-purple-200 tw-px-1  tw-rounded">Skillminds LLP</span> emerged from a vision to address the widespread job losses and skills gaps exacerbated by the crisis. We saw an urgent need for individuals to upgrade their technology skills, which had long been outdated, and for recent graduates to gain cutting-edge knowledge.<br/><br/>
    Skillminds LLP was created with a mission to bridge these gaps by providing top-notch offshore development and consulting services globally. Our core objective is to empower our resources with advanced skills, ensuring they are equipped to tackle real-world business challenges effectively. <br /><br/>
    As a full-service <span class="tw-bg-purple-200 tw-px-1 tw-rounded">Salesforce consulting and product development firm</span>, Skillminds specializes in crafting transformative cloud-based solutions. We develop in-house products across diverse sectors, including <span class="tw-bg-purple-200 tw-px-1 tw-rounded">eCommerce, agriculture, CRM, and pharmaceuticals</span>. Our success lies in our collaborative approach with clients to create impactful solutions that drive business growth and enhance societal well-being. <br /><br/>
    Our team boasts highly skilled Salesforce professionals with an average of over 5 years of experience, including certified developers, consultants, and architects. Additionally, we are proficient in <span class="tw-bg-purple-200 tw-px-1 tw-rounded">Mulesoft, mobile app development, and automation tools like Provar and Selenium</span>. Our expertise helps organizations of all sizes transition to digital solutions, offering support with new implementations and enhancements of existing applications.
    At Skillminds, we are committed to not only advancing technology but also positively influencing society through our innovative solutions.`
    useMask('#about-sec');
    return (
    <div className="overflow-hidden space" id="about-sec">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-6 mb-30 mb-xl-0">
                    <div className="img-box1">
                        <div className="img1">
                            <img src="./assets/img/about.jpg" alt="About"/>
                        </div>
                        <div className="shape1">
                            <img src="./assets/img/normal/about_shape_1.png" alt="shape"/>
                        </div>
                        <div className="year-counter">
                            <h3 className="year-counter_number"><span className="counter-number">25</span></h3>
                            <p className="year-counter_text">Years Experience</p>
                        </div>
                    </div>
                </div>
                {/* change the padding */}
                <div className="col-xl-6 tw-px-8">
                    <div className="ps-xxl-4 ms-xl-3">
                        <div className="title-area mb-35">
                            <span className="sub-title">
                                <div className="icon-masking me-2">
                                    <span className="mask-icon" data-mask-src="./assets/img/theme-img/title_shape_1.svg"></span>
                                    <img src="./assets/img/theme-img/title_shape_1.svg" alt="shape"/>
                                </div>Our Story
                            </span>
                            <h2 className="sec-title">Our Journey: Building <span className="text-theme">SkillMinds</span> from Vision to Reality </h2> 
                        </div>
                        <p className="mt-n2 mb-25 tw-text-left tw-font-bold" dangerouslySetInnerHTML={{__html:storyText}}></p>
                        <div className="about-feature-wrap">
                            <div className="about-feature">
                                <div className="about-feature_icon ">
                                    <img src="./assets/img/icon/about_feature_1_1.svg" alt="Icon"/>
                                </div>
                                <div className="media-body">
                                    <h3 className="about-feature_title">Certified Company</h3>
                                    <p className="about-feature_text">Certified Cloud Experts</p>
                                </div>
                            </div>
                            <div className="about-feature">
                                <div className="about-feature_icon">
                                    <img src="./assets/img/icon/about_feature_1_2.svg" alt="Icon"/>
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