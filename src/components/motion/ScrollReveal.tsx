/** Reusable Motion wrapper – scroll-triggered reveal */
import { useRef, type ReactNode } from 'react';
import { motion, useInView } from 'motion/react';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  once?: boolean;
}

const directionMap: Record<string, { x?: number; y?: number }> = {
  up: { y: 1 },
  down: { y: -1 },
  left: { x: 1 },
  right: { x: -1 },
};

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 30,
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-40px 0px' });

  const dir = directionMap[direction];
  // Reduce horizontal offset to prevent mobile overflow
  const clampedDist = (direction === 'left' || direction === 'right') ? Math.min(distance, 20) : distance;
  const initialOffset = {
    x: (dir.x ?? 0) * clampedDist,
    y: (dir.y ?? 0) * clampedDist,
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...initialOffset }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...initialOffset }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
