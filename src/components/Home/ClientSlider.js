import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import useSwiper from '../../hooks/useSwiper';
import 'swiper/swiper.min.css'; // Import Swiper styles


const ClientSlider = () => {
  let brands = [
    { src: './assets/img/jet_logo.png', link: 'https://www.justeattakeaway.com/' },
    { src: './assets/img/Operatus_Logo.png', link: 'https://www.operatus.io/' },
    { src: './assets/img/panther_logo.jpg', link: 'https://panther.com' },
    { src: './assets/img/corpnet_logo.png', link: 'https://www.corpnet.com/' },
    { src: './assets/img/algoclouds.png', link: 'https://www.algotalenthub.com/' },
    { src: './assets/img/aquera-logo.png', link: 'https://aquera.com/' },
  ];

  // Swiper settings
  const swiperParams = {
    slidesPerView: 5,
    spaceBetween: 24,
    speed:1000,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: false,
    breakpoints: {
      0: { slidesPerView: 1 },
      576: { slidesPerView: 2 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
      1400: { slidesPerView: 5 },
    },
  };

  // Use the custom hook
  // useSwiper(swiperParams);

  return (
    <div className="brand-sec8 bg-title overflow-hidden">
      <div className="container th-container4">
        <div className="slider-area text-center">
          <h2 className="tw-text-white">Our Clients</h2>
          <Swiper {...swiperParams}>
            {brands.map((brand, index) => (
              <SwiperSlide key={index}>
                <a href={brand.link} target="_blank" className="tw-relative brand-box style4">
                  <img src={brand.src}  alt="Brand Logo" 

                  //added custom styles for centering logos
                  className={brand.src.includes('jet_logo.png')
                    ? 'tw-w-50 tw-h-16 tw-absolute tw-top-5 tw-left-8'
                    : brand.src.includes('Operatus_Logo.png')
                    ? 'tw-w-50 tw-h-16 tw-absolute tw-top-4 tw-left-0'
                    : brand.src.includes('corpnet_logo.png')
                    ? 'tw-w-36 tw-h-12 tw-absolute tw-top-5 tw-left-12'

                    : ''
                    
                  }
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ClientSlider;
