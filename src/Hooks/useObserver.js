import { useState, useEffect, useRef } from 'react';

export default function useObserver() {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Deja de observar después de que el elemento sea visible
        }
      },
      {
        threshold: 0.2, // El 20% del elemento debe estar visible para activarse
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return [isVisible, elementRef];
}