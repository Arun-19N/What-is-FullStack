import { useInView } from '../../hooks/useInView';

/**
 * Wrapper component that reveals children when they scroll into view.
 * Supports multiple animation directions: up, left, right, scale.
 */
export default function ScrollReveal({ 
  children, 
  direction = 'up', 
  delay = 0, 
  threshold = 0.15, 
  className = '',
  as: Tag = 'div' 
}) {
  const [ref, isInView] = useInView({ threshold });

  const dirClass = {
    up: 'reveal',
    left: 'reveal-left',
    right: 'reveal-right',
    scale: 'reveal-scale',
  }[direction] || 'reveal';

  return (
    <Tag
      ref={ref}
      className={`${dirClass} ${isInView ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </Tag>
  );
}
