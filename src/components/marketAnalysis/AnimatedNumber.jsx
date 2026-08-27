import React, { useEffect, useState, useRef } from 'react';

const AnimatedNumber = ({ value, prefix = '₹', duration = 800, className = '' }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const startValueRef = useRef(value);
  const startTimeRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    if (typeof value !== 'number' || isNaN(value)) {
      setDisplayValue(value);
      return;
    }

    const startVal = typeof displayValue === 'number' ? displayValue : value;
    const targetVal = value;

    if (startVal === targetVal) {
      setDisplayValue(value);
      return;
    }

    startValueRef.current = startVal;
    startTimeRef.current = null;

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const step = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const currentVal = Math.round(startValueRef.current + (targetVal - startValueRef.current) * easedProgress);

      setDisplayValue(currentVal);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(step);
      }
    };

    animationFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [value, duration]);

  const formattedStr =
    typeof displayValue === 'number'
      ? `${prefix}${displayValue.toLocaleString('en-IN')}`
      : `${prefix}${displayValue || '0'}`;

  return <span className={className}>{formattedStr}</span>;
};

export default AnimatedNumber;
