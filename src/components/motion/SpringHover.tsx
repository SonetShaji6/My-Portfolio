/** Spring-hover icon wrapper */
import type { ReactNode } from 'react';
import { motion } from 'motion/react';

interface Props {
  children: ReactNode;
  className?: string;
  href?: string;
  label?: string;
}

export default function SpringHover({ children, className = '', href, label }: Props) {
  const Tag = href ? 'a' : 'div';

  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.2, rotate: -5 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 12 }}
    >
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="inline-flex"
        >
          {children}
        </a>
      ) : (
        children
      )}
    </motion.div>
  );
}
