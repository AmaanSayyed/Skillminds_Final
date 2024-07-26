import { useEffect } from 'react';
import SwiperCore, { Autoplay, Navigation } from 'swiper/core';

// Import Swiper core styles
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

SwiperCore.use([Autoplay, Navigation]);

const useSwiper = (params) => {
  useEffect(() => {
    // Output to console for debugging
    // console.log('Swiper Settings:', params);
  }, [params]); // Run whenever params change

  return params; // Return Swiper params for use in components
};

export default useSwiper;
