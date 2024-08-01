import React from 'react';
import useMask from '../../hooks/useMask';
import { Link } from 'react-router-dom';
import Accordion from './Accordion';


const ServiceModal = ({ service, onCancel }) => {
    useMask('#service-details')   
  return (
    <div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-70 tw-flex tw-items-center tw-justify-center tw-z-50" onClick={onCancel}>
      <div className="tw-bg-white tw-p-6 tw-rounded-lg tw-shadow-lg tw-w-4/5 tw-overflow-y-auto tw-max-h-screen" onClick={(e) => e.stopPropagation()}>
        <button className="tw-absolute tw-top-4 tw-right-4 tw-text-gray-600 tw-text-xl" onClick={onCancel}>X</button>
        <div className="tw-overflow-y-auto tw-max-h-[calc(100vh-4rem)] tw-p-4">
          <section className="tw-space-y-8 tw-mt-8" id='service-details'> 
            <div className="container">
              <div className="row">
                <div className="col-xxl-8 col-lg-8">
                  <div className="page-single">
                    <div className="page-img">
                      <img src={service.bannerImg} alt="Service" />
                    </div>
                    <div className="page-content">
                        <h2 className="tw-text-2xl tw-mb-4">{service.title}</h2>
                        <div className="service-description tw-text-justify">
                            {service.description.split('\n').map((paragraph,index)=>(
                            <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                        <Accordion service={service} />
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-lg-4">
                  <aside className="sidebar-area">
                    <div class="widget widget_banner  " data-bg-src="./assets/img/bg/widget_banner.jpg">
                            <div class="widget-banner">
                                <span class="text">CONTACT US NOW</span>
                                <h2 class="title">You Need Help?</h2>
                                <Link to="/contact-us" class="th-btn style3">GET A QUOTE<i class="fas fa-arrow-right ms-2"></i></Link>
                            </div>
                     </div>
                     <div className=" tw-mb-8">
                              <div className="th-video">
                                <img className="tw-w-full" src="./assets/img/service/service_inner_1.jpg" alt="service" />
                                <a href="https://www.youtube.com/watch?v=_sI_Ps7JSEk" className="play-btn tw-popup-video"><i className="fas fa-play"></i></a>
                              </div>
                     </div>
                     <div className="tw-mb-8">
                          <h3 className="tw-text-xl tw-mb-4">We Serve The Best Work</h3>
                          <div className="checklist tw-style5">
                            <ul>
                              <li><i className="fas fa-octagon-check"></i> Up am intention on dependent questions</li>
                              <li><i className="fas fa-octagon-check"></i> Surrounded affronting favourable</li>
                              <li><i className="fas fa-octagon-check"></i> Sed ut perspiciatis unde omnis iste natus</li>
                              <li><i className="fas fa-octagon-check"></i> Special Careness Risk Free</li>
                              <li><i className="fas fa-octagon-check"></i> Bibend auctor nisi elit volume are beguiled</li>
                            </ul>
                          </div>
                        </div>
                    
                  </aside>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
