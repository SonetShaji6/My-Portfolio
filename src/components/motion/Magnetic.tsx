/** Magnetic wrapper – elements pull toward the cursor when nearby */
import { useRef, useState, type ReactNode } from 'react';
import { motion } from 'motion/react';

interface Props {
  children: ReactNode;
  className?: string;
  /** Pull strength multiplier (0–1) */
  strength?: number;
  /** Radius of magnetic pull in px */
  radius?: number;
}

export default function Magnetic({
  children,
  className = '',
  strength = 0.3,
  radius = 150,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    const distance = Math.sqrt(distX * distX + distY * distY);

    if (distance < radius) {
      setPosition({
        x: distX * strength,
        y: distY * strength,
      });
    }
  }

  function handleMouseLeave() {
    setPosition({ x: 0, y: 0 });
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={position}
      transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
