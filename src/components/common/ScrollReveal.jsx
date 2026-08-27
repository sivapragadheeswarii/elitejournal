import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ 
  children, 
  animation = 'fade-up', 
  delay = 0, 
  className = '' 
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0 translate-y-8 transition-all duration-700 ease-out';
    
    switch (animation) {
      case 'slide-left':
        return 'animate-slide-left opacity-100';
      case 'slide-right':
        return 'animate-slide-right opacity-100';
      case 'scale-in':
        return 'animate-scale-in opacity-100';
      case 'fade-up':
      default:
        return 'animate-landing-up opacity-100';
    }
  };

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
