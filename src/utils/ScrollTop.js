import React, { useEffect } from 'react';

const ScrollTop = () => {
  useEffect(() => {
    const scrollTopBtn = document.querySelector('.scroll-top');
    const progressPath = document.querySelector('.scroll-top path');
    const pathLength = progressPath.getTotalLength();

    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		

    const updateProgress = () => {
      const scroll = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      const progress = pathLength - (scroll * pathLength / height);
      progressPath.style.strokeDashoffset = progress;
    }

    updateProgress();
    window.addEventListener('scroll', updateProgress);

    const offset = 50;
    const duration = 750;
    window.addEventListener('scroll', () => {
      if (window.scrollY > offset) {
        scrollTopBtn.classList.add('show');
      } else {
        scrollTopBtn.classList.remove('show');
      }
    });

    scrollTopBtn.addEventListener('click', (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return false;
    });

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', updateProgress);
      scrollTopBtn.removeEventListener('click', scrollTopBtn);
    };
  }, []);

  return (
    <div className="scroll-top">
      <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style={{
          transition: "stroke-dashoffset 10ms linear 0s",
          strokeDasharray: "307.919, 307.919",
          strokeDashoffset: "307.919"
        }}>
        </path>
      </svg>
    </div>
  );
};

export default ScrollTop;
