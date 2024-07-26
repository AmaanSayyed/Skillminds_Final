import { useEffect } from "react";

const useMask = () => {
    useEffect(() => {
    const heroElement = document.getElementById('hero');
    if (heroElement) {
      const bgSrc = heroElement.getAttribute('data-bg-src');
      if (bgSrc) {
        heroElement.style.backgroundImage = `url(${bgSrc})`;
      }
    }

    const maskIcons = document.querySelectorAll('.mask-icon');
    maskIcons.forEach(icon => {
      const maskSrc = icon.getAttribute('data-mask-src');
      if (maskSrc) {
        icon.style.maskImage = `url(${maskSrc})`;
        icon.style.WebkitMaskImage = `url(${maskSrc})`;
      }
    });
    
  }, [])
};
export  default useMask;