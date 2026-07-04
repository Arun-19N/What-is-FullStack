import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook that detects when an element enters the viewport.
 * Uses IntersectionObserver for performant scroll-based animations.
 * 
 * @param {Object} options
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @param {string} options.rootMargin - Margin around root
 * @param {boolean} options.triggerOnce - Only trigger once (default: true)
 * @returns {[React.RefObject, boolean]} - [ref to attach, isInView boolean]
 */
export function useInView({ threshold = 0.15, rootMargin = '0px', triggerOnce = true } = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isInView];
}

export default useInView;
