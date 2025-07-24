import {useEffect, useRef, useState} from 'react';

export function useInView<T extends HTMLElement>(threshold = 0.1) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {threshold},
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return {ref, isVisible} as const;
}