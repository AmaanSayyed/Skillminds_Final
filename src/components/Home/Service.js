import 'swiper/swiper.min.css'; // Import Swiper styles
import 'swiper/components/navigation/navigation.min.css'; // Optional: Swiper navigation styles
import useSwiper from "../../hooks/useSwiper";
import { Swiper, SwiperSlide } from 'swiper/react';



const Service = () => {
   const services= [
        {
            title: "Test Automation",
            description: "Experts in Provar and Selenium automation tools and Softwares.",
            img: "./assets/img/icon/service_7_1.svg"
        },
        {
            title: "MuleSoft",
            description: "Expertise in Integration with Salesforce and other applications Tuning up MuleSoft.",
            img: "./Skillminds_Dev_Website/assets/img/icon/service_7_1.svg"
        },
        {
            title: "Business Transformations",
            description: "Moving Legacy Business to SFDC Business Mapping of Processes Complex Data migration.",
            img: "./assets/img/icon/service_7_1.svg"
        },
        {
            title: "Salesforce CRM",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, excepturi?.",
            img: "./assets/img/icon/service_7_1.svg"
        },
        {
            title: "Test Automation",
            description: "Experts in Provar and Selenium automation tools and Softwares.",
            img: "./assets/img/icon/service_7_1.svg"
        },
        {
            title: "MuleSoft",
            description: "Expertise in Integration with Salesforce and other applications Tuning up MuleSoft .",
            img: "./assets/img/icon/service_7_1.svg"
        },
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
                <div className="swiper th-slider has-shadow" >
                    <div className="swiper-wrapper ">
                        <Swiper {...swiperParams}>
                        {services.map((service,index)=>(
                            <SwiperSlide key={index}>
                            <div className="service_card4 tw-shadow-custom tw-mx-2">
                                <div className="box-icon ">
                                    <img src="./assets/img/icon/service_7_1.svg" alt="Icon"/>
                                </div>
                                <h3 className="box-title"><a href="service-details.html">{service.title}</a></h3>
                                <p className="service_card4_text">{service.description}</p>
                                <a href="service-details.html" className="line-btn">Read Details<i className="fa-regular fa-arrow-right ms-2"></i></a>
                            </div>
                        </SwiperSlide>
                        ))}
                        </Swiper>

                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
 
export default Service;