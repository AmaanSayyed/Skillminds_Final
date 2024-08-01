import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";

// replace this css later
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Life = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [activeTab, setActiveTab] = useState("socials");

  let sliderFor = useRef(null);
  let sliderNav = useRef(null);

  useEffect(() => {
    setNav1(sliderFor);
    setNav2(sliderNav);
  }, []);

  const settingsFor = {
    asNavFor: nav2,
    slidesToShow: 1,
    arrows: false,
    dots: true,
    fade: true,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  const settingsNav = {
    asNavFor: nav1,
    slidesToShow: 3,
    swipeToSlide: true,
    focusOnSelect: true,
    centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          centerMode:false,
        },
      },
    ],
  };

  const images = {
    socials: [
      "assets/img/Skillminds/Socials/sm_grp_1.jpg",
      "assets/img/Skillminds/Socials/sm_grp_5.jpg",
      "assets/img/Skillminds/Socials/sm_grp_4.jpg",
    ],
    life: [
      "assets/img/Skillminds/Socials/sm_grp_4.jpg",
      "assets/img/Skillminds/Socials/sm_grp_5.jpg",
      "assets/img/Skillminds/Socials/sm_grp_1.jpg",
    ],
    events: [
      "assets/img/Skillminds/Socials/sm_grp_1.jpg",
      "assets/img/Skillminds/Socials/sm_grp_2.jpg",
      "assets/img/Skillminds/Socials/sm_grp_5.jpg",
    ],
    officeGallery: [
      // "assets/img/Skillminds/2ndfloor/2nd_floor_2.jpg", change the resolution
      "assets/img/Skillminds/2ndfloor/2nd_floor_3.jpg",
      "assets/img/Skillminds/2ndfloor/2nd_floor_4.jpg",
      "assets/img/Skillminds/2ndfloor/2nd_floor_5.jpg",
      "assets/img/Skillminds/2ndfloor/2nd_floor_6.jpg",
      "assets/img/Skillminds/2ndfloor/2nd_floor_7.jpg",
      "assets/img/Skillminds/2ndfloor/2nd_floor_8.jpg",
      "assets/img/Skillminds/2ndfloor/2nd_floor_9.jpg",
      "assets/img/Skillminds/2ndfloor/2nd_floor_10.jpg",
    ],
  };

  return (
    <div className="tw-container  tw-mx-auto tw-py-12">
      <h1 className="text-center">Life @SkillMinds</h1>
      
      <div className="tw-relative tw-max-w-8xl tw-p-8 tw-pt-12 tw-shadow-lg tw-rounded-lg tw-bg-white">

         {/* Tabs */}
      <div className="tw-absolute tw-top-0 tw-left-4 tw-flex tw-justify-left tw-mb-8 sm:tw-left-8 ">
        {["socials", "life", "events", "officeGallery"].map((tab) => (
          <button
            key={tab}
            className={`tw-px-4 tw-py-1.2 tw-mr-2 tw-rounded-b-md tw-font-semibold hover:tw-bg-blue-400 ${
              activeTab === tab ? "tw-p-0 tw-border-none tw-bg-blue-300 tw-cursor-pointer tw-outline-none  tw-shadow-md" : "tw-p-0 tw-border-none tw-bg-transparent tw-cursor-pointer tw-outline-none tw-shadow-md"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
        <div className="tw-mb-8 tw-w-full sm:tw-w-1/2 tw-mx-auto">
          <Slider {...settingsFor} ref={(slider) => (sliderFor = slider)}>
            {images[activeTab].map((img, index) => (
              <div key={index} className="tw-py-2">
                <img
                  src={img}
                  alt={`Slide ${index}`}
                  className="tw-rounded-md tw-w-max sm:tw-w-full tw-h-64 sm:tw-h-96 object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div>
          <Slider {...settingsNav} ref={(slider) => (sliderNav = slider)}>
            {images[activeTab].map((img, index) => (
              <div key={index} className="tw-px-2 py-4">
                <img
                  src={img}
                  alt={`Thumbnail ${index}`}
                  className="tw-w-36 tw-h-24 tw-object-cover sm:tw-w-80 sm:tw-h-44 sm:tw-mx-12 tw-rounded-lg tw-shadow-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Life;
