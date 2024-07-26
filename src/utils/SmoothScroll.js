import { useEffect } from "react";

const SmoothScroll = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = './assets/js/smooth-scroll.js'; // Ensure the correct path to smoothscroll.js
        script.async = true;
    
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);
    return null;
}
 
export default SmoothScroll;

