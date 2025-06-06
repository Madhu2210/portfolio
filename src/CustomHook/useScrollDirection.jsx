import { useState, useEffect, useRef } from 'react';

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const lastScrollTopRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const lastScrollTop = lastScrollTopRef.current;

      if (scrollTop > lastScrollTop && scrollDirection !== "down") {
        setScrollDirection('down');
      } else {
        if (scrollDirection !== "up") {
          setScrollDirection('up');
        }
      }
      lastScrollTopRef.current = scrollTop <= 0 ? 0 : scrollTop; 
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollDirection;
};

export default useScrollDirection;
