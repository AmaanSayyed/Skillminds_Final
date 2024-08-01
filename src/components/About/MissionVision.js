import React from 'react';
import CardComponent from './CardComponent';

const MissionVision = () => {
    //refactor this code-25/07/24 
    //change text -make readable -Done 31/7/24
    const missionContent = ` At Skillminds, we are on a mission to unleash the potential of cloud <span class="tw-bg-purple-200 tw-px-1 tw-rounded">technologies like Salesforce CRM, GCP, and AWS</span> to deliver exceptional IT consulting services. Our dedication to creating <span class="tw-bg-purple-200 tw-px-1 tw-rounded">innovative solutions</span> and developing in-house products reflects our deep commitment to social responsibility. Through our expertise in <span class="tw-bg-purple-200 tw-px-1 tw-rounded">mobile development, test automation, and business transformation</span>, we strive to foster a culture of excellence and continuous improvement, attracting the best and brightest to join our team.`;
  
    const visionContent = `At Skillminds, we envision becoming <span class="tw-bg-purple-200 tw-px-1 tw-rounded">India's leading IT consulting company</span> within the next decade, powered by our passion for cloud technologies such as <span class="tw-bg-purple-200 tw-px-1 tw-rounded">Salesforce CRM, GCP, and AWS</span>. We are committed to delivering <span class="tw-bg-purple-200 tw-px-1 tw-rounded">innovative solutions for our clients</span> and developing in-house products that address <span class="tw-bg-purple-200 tw-px-1 tw-rounded">real-life societal challenges</span>, reflecting our strong sense of social responsibility. Our expertise in <span class="tw-bg-purple-200 tw-px-1 tw-rounded">mobile development, test automation, and digital business transformation</span>, combined with our focus on being <span class="tw-bg-purple-200 tw-px-1 tw-rounded">the best workplace</span>, ensures we attract <span class="tw-bg-purple-200 tw-px-1 tw-rounded">highly qualified and certified resources</span> with industry-leading knowledge.`;

  return (
    
    <div className="tw-container tw-mx-auto tw-py-12">
      <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-mb-16 tw-gap-16">
        
        <CardComponent 
          title="Our Mission"
          content={missionContent}
          image="/assets/img/vision.jpg"
          isReversed={false}/>

        <CardComponent 
          title="Our Vision"
          content={visionContent}
          image="/assets/img/mission.jpg"
          isReversed={true}/>
        
      </div>
    </div>
    
  );
}

export default MissionVision;
