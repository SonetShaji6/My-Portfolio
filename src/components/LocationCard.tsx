/** Location Card – Kalkoonthal, Kerala with pulsing dot and live clock */
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function LocationCard() {
  const [time, setTime] = useState('');

  useEffect(() => {
    function updateTime() {
      const now = new Date().toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setTime(now);
    }
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="solid-card hover-red-border border-l-4 border-l-[var(--color-accent)] group flex items-center gap-6 p-4 sm:p-6"
    >
      {/* Map pin with pulse */}
      <div className="relative flex shrink-0 items-center justify-center">
        <div className="relative flex h-14 w-14 items-center justify-center border border-[var(--color-border-subtle)] bg-[var(--color-bg-primary)] group-hover:bg-[var(--color-accent)] transition-colors duration-300">
          <span className="text-xl text-white mix-blend-difference">LOC</span>
          {/* Pulsing ring */}
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75 animate-ping"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-[var(--color-accent)] border border-white"></span>
          </span>
        </div>
      </div>

      <div className="flex-1">
        <p className="font-display text-lg uppercase tracking-wider text-white group-hover:text-[var(--color-accent)] transition-colors duration-300">Nedumkandam, Kerala</p>
        <p className="font-mono text-xs text-[var(--color-text-secondary)] tracking-widest uppercase mt-1">India</p>
      </div>

      {/* Live clock */}
      <div className="text-right border-l border-[var(--color-border-subtle)] pl-4 py-2 group-hover:border-[var(--color-accent)] transition-colors duration-300">
        <p className="font-mono text-base font-bold tabular-nums text-white group-hover:text-[var(--color-accent)] transition-colors duration-300">
          {time || '--:--:--'}
        </p>
        <p className="font-mono text-[10px] text-[var(--color-text-muted)] tracking-widest mt-1">IST (UTC+5:30)</p>
      </div>
    </motion.div>
  );
}
