import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper/core';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import { reviews } from './reviewsData'; // Import your reviews data
import useMask from '../../hooks/useMask';

// Initialize Swiper modules
SwiperCore.use([Autoplay, Navigation]);

const Testimonials = () => {
  useMask('#testimonial-sec');
  const [expandedReviews, setExpandedReviews] = useState({});
  const [swiperInstance, setSwiperInstance] = useState(null);

  const toggleReadMore = (id) => {
    setExpandedReviews(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  const handleMouseEnter = () => {
    if (swiperInstance) {
      swiperInstance.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperInstance) {
      swiperInstance.autoplay.start();
    }
  };

  return (
    <section className="bg-top-center space tw-rounded-3xl" id='testimonial-sec' data-bg-src="assets/img/testimonial_banner.jpg">
      <div className="container">
        <div className="title-area text-center">
          <div className="shadow-title color2">TESTIMONIALS</div>
          <span className="sub-title">
            <div className="icon-masking me-2">
              <span className="mask-icon" data-mask-src="assets/img/theme-img/title_shape_2.svg"></span>
              <img src="assets/img/theme-img/title_shape_2.svg" alt="shape" />
            </div>
            CUSTOMER FEEDBACK
          </span>
          <h2 className="sec-title text-white">
            What Happy Clients Say <br /> <span className="text-theme"> About Us?</span>
          </h2>
        </div>

        <div className="slider-area">
          <Swiper
            className="swiper th-slider has-shadow"
            id="testiSlider3"
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{ prevEl: '.slider-prev', nextEl: '.slider-next' }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            spaceBetween={30} // Add space between slides
            onSwiper={setSwiperInstance}
          >
            {reviews.map(review => (
              <SwiperSlide
                key={review.id}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onFocus={handleMouseEnter}
                onBlur={handleMouseLeave}
              >
                <div className="testi-grid flex flex-col justify-between h-full p-6 bg-white shadow-md rounded-lg">
                  <div className="testi-grid_img mb-4">
                    <img className="w-24 h-24 rounded-full mx-auto" src={review.image} alt="Avatar" />
                    <div className="testi-grid_quote mt-4">
                      <img src="assets/img/icon/quote_left_3.svg" alt="quote" />
                    </div>
                  </div>
                  <div className="testi-grid_review flex justify-center space-x-1 text-yellow-500 mb-4">
                    {[...Array(5)].map((_, index) => (
                      <i key={index} className="fa-solid fa-star-sharp"></i>
                    ))}
                  </div>
                  <div className="testi-grid_content text-center">
                    <p className="testi-grid_text mb-4">
                      {expandedReviews[review.id] ? review.fullText : review.text}
                      <span
                        className="tw-text-blue-500 hover:tw-text-blue-700 tw-cursor-pointer"
                        onClick={() => toggleReadMore(review.id)}
                      >
                        {expandedReviews[review.id] ? "Read less..." : "Read more..."}
                      </span>
                    </p>
                    <h3 className="box-title mb-2">{review.name}</h3>
                    <p className="testi-grid_desig">{review.position} at {review.company}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="slider-arrow style3 slider-prev"><i className="far fa-arrow-left"></i></button>
          <button className="slider-arrow style3 slider-next"><i className="far fa-arrow-right"></i></button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
