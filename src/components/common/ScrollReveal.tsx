import React, { useEffect, useRef, useState } from 'react';

export type AnimationType =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'fade-in'
  | 'zoom-in';

export interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  as?: React.ElementType;
}

export function useInView(options: {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
} = {}) {
  const { threshold = 0.08, rootMargin = '0px', once = false } = options;
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) {
            observer.unobserve(node);
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  return { ref, isInView };
}

const getInitialAnimationClass = (animation: AnimationType): string => {
  switch (animation) {
    case 'fade-up':
      return 'opacity-0 translate-y-7 sm:translate-y-8';
    case 'fade-down':
      return 'opacity-0 -translate-y-7 sm:-translate-y-8';
    case 'fade-left':
      return 'opacity-0 -translate-x-7 sm:-translate-x-8';
    case 'fade-right':
      return 'opacity-0 translate-x-7 sm:translate-x-8';
    case 'zoom-in':
      return 'opacity-0 scale-[0.95] translate-y-2';
    case 'fade-in':
    default:
      return 'opacity-0';
  }
};

const getVisibleAnimationClass = (animation: AnimationType): string => {
  switch (animation) {
    case 'fade-up':
    case 'fade-down':
      return 'opacity-100 translate-y-0';
    case 'fade-left':
    case 'fade-right':
      return 'opacity-100 translate-x-0';
    case 'zoom-in':
      return 'opacity-100 scale-100 translate-y-0';
    case 'fade-in':
    default:
      return 'opacity-100';
  }
};

const getDelayClass = (delay: number): string => {
  if (delay <= 0) return 'delay-0';
  if (delay <= 75) return 'delay-75';
  if (delay <= 100) return 'delay-100';
  if (delay <= 150) return 'delay-150';
  if (delay <= 200) return 'delay-200';
  if (delay <= 250) return 'delay-[250ms]';
  if (delay <= 300) return 'delay-300';
  if (delay <= 400) return 'delay-[400ms]';
  if (delay <= 500) return 'delay-500';
  if (delay <= 600) return 'delay-[600ms]';
  if (delay <= 700) return 'delay-700';
  return 'delay-1000';
};

const getDurationClass = (duration: number): string => {
  if (duration <= 500) return 'duration-500';
  if (duration >= 1000) return 'duration-1000';
  return 'duration-700';
};

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  className = '',
  threshold = 0.08,
  rootMargin = '0px',
  once = false,
  as: Component = 'div'
}) => {
  const { ref, isInView } = useInView({ threshold, rootMargin, once });

  const initialClass = getInitialAnimationClass(animation);
  const visibleClass = getVisibleAnimationClass(animation);
  const delayClass = getDelayClass(delay);
  const durationClass = getDurationClass(duration);

  return (
    <Component
      ref={ref}
      className={`transition-all ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${
        isInView ? `${durationClass} ${delayClass} ${visibleClass}` : `duration-300 delay-0 ${initialClass}`
      } ${className}`}
    >
      {children}
    </Component>
  );
};

export default ScrollReveal;
