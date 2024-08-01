import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger animation when 10% of the image is visible
    triggerOnce: true, // Only trigger once
  });

  // Set isVisible to true when the image comes into view
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div className="tw-container tw-mx-auto tw-py-12">
      <h2 className={`tw-text-4xl tw-font-bold tw-text-center tw-mb-8 ${isVisible ? 'tw-opacity-100 tw-translate-y-0 tw-duration-1000 tw-ease-out' : 'tw-opacity-0 tw-translate-y-10'}`} style={{ transition: 'opacity 1s, transform 1s' }}>
        <span className="tw-border-solid tw-border-0 tw-border-b-4 tw-border-blue-500 tw-pb-1">SkillMinds Family</span>
      </h2>

      <div ref={ref} className="tw-relative tw-w-full tw-flex tw-justify-center">
        <div className={`tw-max-w-7xl tw-overflow-hidden tw-rounded-lg tw-shadow-lg ${isVisible ? 'tw-translate-x-0 tw-opacity-100' : 'tw-translate-x-[-100%] tw-opacity-0'}`} style={{ transition: 'opacity 1s, transform 1s' }}>
          <img src="./assets/img/team_bg.jpg" alt="Our Team" 
          className="tw-w-full tw-object-cover " />
        </div>
      </div>

      <div className={`tw-mt-8 tw-text-center ${isVisible ? 'tw-opacity-100 tw-translate-y-0 tw-duration-1000 tw-ease-out' : 'tw-opacity-0 tw-translate-y-10'}`}>
        <p className="tw-text-lg">We are a diverse team of professionals committed to providing the best service. Our team consists of experts in various fields, working together to achieve our goals.</p>
      </div>
    </div>
  );
};

export default Team;
