import { useEffect } from "react";

const useMask = (selector) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      const bgSrc = element.getAttribute('data-bg-src');
      if (bgSrc) {
        element.style.backgroundImage = `url(${bgSrc})`;
      }

      const maskIcons = element.querySelectorAll('.mask-icon');
      maskIcons.forEach(icon => {
        const maskSrc = icon.getAttribute('data-mask-src');
        if (maskSrc) {
          icon.style.maskImage = `url(${maskSrc})`;
          icon.style.WebkitMaskImage = `url(${maskSrc})`;
          icon.style.backgroundColor = '#01b8fa'; // Set the background color
        }
      });
    });
  }, [selector]);
};

export default useMask;
