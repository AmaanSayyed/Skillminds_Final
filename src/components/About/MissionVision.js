import React from 'react';

const MissionVision = () => {
    //refactor this code-25/07/24
    //change text -make readable

  return (
    
    <div className="tw-container tw-mx-auto tw-py-12">
      <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-mb-16 tw-gap-16">
        
        {/* Mission Section */}
        <div className="tw-shadow-lg tw-rounded-md tw-flex tw-flex-col-reverse sm:tw-flex-row tw-gap-12 tw-w-full sm:tw-w-3/4 tw-items-center tw-bg-slate-100 tw-p-8">
          <div className="img tw-w-full sm:tw-w-1/2 tw-flex tw-justify-center">
            <img src="/assets/img/mission.jpg" alt="mission" className="tw-rounded-full tw-w-max tw-object-cover tw-shadow-md"/>
          </div>
          <div className="content tw-w-full sm:tw-w-1/2 tw-px-2">
            <h2 className="tw-text-3xl tw-text-blue-500 tw-font-semibold tw-mb-4">Our Mission</h2>
            <p className="tw-text-justify tw-text-slate-700 tw-font-light sm:tw-text-xl">At SkillMinds, our mission is to empower businesses through innovative and transformative cloud-based solutions. We strive to deliver unparalleled Salesforce consulting and product development services, driving success and digital transformation for organizations of all sizes. Our team of highly skilled professionals is dedicated to helping our clients achieve their business goals through cutting-edge technology and personalized support.</p>
          </div>
        </div>
        
        {/* Vision Section */}
        <div className="tw-shadow-lg tw-rounded-md tw-flex tw-flex-col-reverse sm:tw-flex-row-reverse tw-gap-12 tw-w-full sm:tw-w-3/4 tw-items-center tw-bg-slate-100 tw-p-8">
          <div className="img tw-w-full sm:tw-w-1/2 tw-flex tw-justify-center">
            <img src="/assets/img/vision.jpg" alt="vision" className="tw-rounded-full tw-w-max tw-object-cover tw-shadow-md"/>
          </div>
          <div className="content tw-w-full sm:tw-w-1/2 tw-px-2">
            <h2 className="tw-text-3xl tw-text-blue-500 tw-font-semibold tw-mb-4">Our Vision</h2>
            <p className="tw-text-justify tw-text-slate-700 tw-font-light  sm:tw-text-xl">Our vision at SkillMinds is to be the leading provider of comprehensive Salesforce solutions and digital transformation services globally. We aim to continuously innovate and expand our expertise across various domains, including eCommerce, agriculture, CRM, and pharmaceuticals. By fostering a culture of excellence and collaboration, we aspire to be the trusted partner for businesses seeking to harness the power of technology to thrive in a rapidly evolving digital landscape.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionVision;
