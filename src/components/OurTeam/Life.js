import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";

//replace this css later
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Life = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

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
    dots:true,
    fade: true,
    autoplay: true,
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
        },
      },
    ],
  };

  const images = [
    "assets/img/sm_grp_1.jpg",
    "assets/img/sm_grp_2.jpg",
    "assets/img/sm_grp_3.jpg",
    "assets/img/sm_grp_4.jpg",
    "assets/img/sm_grp_5.jpg",
    "assets/img/sm_grp_6.jpg"
  ];

  return (
    <div className="tw-container tw-mx-auto tw-py-12">
      <h1 className="text-center">Life @SkillMinds</h1>
      <div className="tw-max-w-8xl tw-p-8 tw-shadow-lg tw-rounded-lg tw-bg-white">
        <div className="tw-mb-8 tw-w-full sm:tw-w-1/2 tw-mx-auto">
          <Slider {...settingsFor} ref={(slider) => (sliderFor = slider)}>
            {images.map((img, index) => (
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
            {images.map((img, index) => (
              <div key={index} className="tw-px-2">
                <img
                  src={img}
                  alt={`Thumbnail ${index}`}
                  className="tw-w-56 tw-h-32 sm:tw-w-80 sm:tw-h-44 tw-rounded-lg tw-shadow-lg object-cover"
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
