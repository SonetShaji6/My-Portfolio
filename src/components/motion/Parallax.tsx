/** Scroll-linked parallax wrapper */
import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface Props {
  children: ReactNode;
  className?: string;
  /** How far to move (px) */
  offset?: number;
  /** Direction */
  direction?: 'up' | 'down';
}

export default function Parallax({
  children,
  className = '',
  offset = 50,
  direction = 'up',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const mult = direction === 'up' ? -1 : 1;
  const y = useTransform(scrollYProgress, [0, 1], [offset * mult, -offset * mult]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}
