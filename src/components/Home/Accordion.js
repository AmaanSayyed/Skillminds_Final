import React, { useState } from 'react';

const Accordion = ({ service }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <h3 className="tw-text-xl tw-mt-8 tw-mb-4">Questions About Service</h3>
      <div className="accordion-area" id="faqAccordion">
        {service.faqs.map((faq, index) => (
          <div key={index} className="accordion-card tw-style2">
            <div className="accordion-header">
              <button
                className={`accordion-button ${activeIndex === index ? '' : 'collapsed'}`}
                type="button"
                onClick={() => handleToggle(index)}
              >
                {faq.question}
              </button>
            </div>
            <div className={`accordion-collapse ${activeIndex === index ? 'show' : 'collapse'}`}>
              <div className="accordion-body">
                <p className="faq-text">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
