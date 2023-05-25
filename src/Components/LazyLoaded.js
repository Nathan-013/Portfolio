import React, { Children, useEffect, useRef, useState } from 'react';

const ComponenteVisivel = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
          // console.log(entry.target.className = 'lazy-load')
        }
      });
    });

    observer.observe(componentRef.current);

    // Cleanup da função de retorno do useEffect
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={componentRef}>
      {isVisible && children}
    </div>
  );
};

export default ComponenteVisivel;
