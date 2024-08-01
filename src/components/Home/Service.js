import ServiceModal from './ServiceModal';
// import 'swiper/swiper.min.css'; // Import Swiper styles
// import 'swiper/components/navigation/navigation.min.css'; // Optional: Swiper navigation styles
import useSwiper from "../../hooks/useSwiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { services } from '../../data/serviceData';
import { useState } from 'react';

const Service = () => {
   const [showModal, setShowModal] = useState(false);
   const [serviceInfo, setServiceInfo] = useState(null);

   const colors = ['tw-bg-gray-200', 'tw-bg-blue-200', 'tw-bg-yellow-200', 'tw-bg-gray-300', 'tw-bg-blue-300'];
   
   const openModal = (service) => {
     setServiceInfo(service);
     setShowModal(true);
   };

   const closeModal = () => {
     setShowModal(false);
     setServiceInfo(null);
   };

   // Swiper settings
   const swiperParams = {
     slidesPerView: 5,
     spaceBetween: 24,
     speed: 1000,
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
       1200: { slidesPerView: 3 },
       1400: { slidesPerView: 3 },
     },
   };

   // Use the custom hook
   useSwiper(swiperParams);

   return (
     <section className="service-sec15 space" id="service-sec">
       <div className="container th-container4">
         <div className="row justify-content-center">
           <div className="col-lg-6 col-md-7 col-sm-10 px-xl-4">
             <div className="title-area text-center">
               <span className="sub-title">
                 <div className="icon-masking me-2">
                   <img src="./assets/img/theme-img/title_shape_4.svg" alt="shape"/>
                 </div>Our Expertise
               </span>
               <h2 className="sec-title">We are expert in Salesforce CRM and Integration Solutions</h2>
             </div>
           </div>
         </div>
       
         <div className="slider-area">
           <div className="swiper th-slider has-shadow">
             <div className="swiper-wrapper">
               <Swiper {...swiperParams}>
                 {services.map((service, index) => (
                   <SwiperSlide key={index}>
                     <div className={`service_card4 tw-shadow-custom tw-mx-2 ${colors[index % colors.length]}`}>
                       <div className="box-icon">
                         <img src="./assets/img/icon/service_7_1.svg" alt="Icon"/>
                       </div>
                       <h3 className="box-title"><a href="service-details.html">{service.title}</a></h3>
                       <p className="service_card4_text">{service.shortDescription}</p>
                       <span className="line-btn tw-cursor-pointer" onClick={() => openModal(service)}>Read Details<i className="fa-regular fa-arrow-right ms-2"></i></span>
                     </div>
                   </SwiperSlide>
                 ))}
               </Swiper>
             </div>
           </div>
           {showModal && (
             <ServiceModal
               service={serviceInfo}
               onCancel={closeModal}
             />
           )}
         </div>
       </div>
     </section>
   );
};

export default Service;
