import { Link } from "react-router-dom";
import useMask from "../../hooks/useMask";

const Contents = () => {
  useMask();
  const title = "Driving Success through Innovation ";

  return (
    <div className="th-hero-wrapper hero-16" id="hero" data-bg-src="/assets/img/home-bg.jpg">
      <div className="hero-inner">
        <div className="container th-container4">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-6">
              <div className="hero-style16">
                <span className="sub-title">
                  <div className="icon-masking me-2">
                    <img
                      src="/assets/img/theme-img/title_shape_4.svg"
                      alt="shape"
                    />
                  </div>
                  Welcome to Skillminds
                </span>
                <h1 className="hero-title">
                  {title}
                  <span className="text-theme">SkillMinds</span>
                </h1>
                <div className="btn-group">
                  <Link
                    to="/contact-us"
                    className="th-btn style-radius text-capitalize"
                  >
                    Submit Enquiry
                  </Link>
                  <div className="about-client-box style2 mb-sm-0 mb-3">
                    {/* use map */}
                    <div className="client-thumb-group">
                      <div className="thumb">
                        <img src="./assets/img/profile_rv_1.jpg" alt="avater" />
                      </div>
                      <div className="thumb">
                        <img src="./assets/img/profile_rv_2.jpg" alt="avater" />
                      </div>
                      <div className="thumb">
                        <img src="./assets/img/profile_rv_1.jpg" alt="avater" />
                      </div>
                    </div>
                    <div className="cilent-box">
                      {/* make it component */}
                      <div className="about_review">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                      </div>
                      <h4 className="cilent-box_counter">
                        <span className="counter-number">2960</span>+ Client
                        Reviews
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="hero-counter_wrapp">
                  <div className="hero-counter">
                    <h2 className="counter-title mb-0">
                      <span className="counter-number">30</span>k+
                    </h2>
                    <span className="hero-counter_text">
                      Happily active client’s
                    </span>
                  </div>
                  <div className="hero-counter">
                    <h2 className="counter-title mb-0">
                      <span className="counter-number">25</span>
                    </h2>
                    <span className="hero-counter_text">
                      Years of experience in startup building
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="th-hero-image">
                <div className="th-hero-thumb">
                  <img src="./assets/img/hero/hero_img_15_1.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Remove ? if !used : code for animate */}
      {/* <div
        className="shape-mockup d-none d-xl-block"
        data-bottom="8%"
        data-left="4%"
      >
        <img src="./assets/img/shape/shape_7.png" alt="shape" />
      </div>
      <div
        className="shape-mockup movingX d-none d-xl-block"
        data-top="54%"
        data-right="44%"
      >
        <img src="./assets/img/shape/shape_8.png" alt="shape" />
      </div>
      <div
        className="shape-mockup spin d-none d-xl-block"
        data-bottom="14%"
        data-right="6%"
      >
        <img src="./assets/img/shape/shape_9.png" alt="shape" />
      </div> */}
    </div>
  );
};

export default Contents;
