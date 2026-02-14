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
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bento-tile flex items-center gap-4 p-5"
    >
      {/* Map pin with pulse */}
      <div className="relative flex shrink-0 items-center justify-center">
        <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10">
          <span className="text-xl">📍</span>
          {/* Pulsing ring */}
          <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50 pulse-dot"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
          </span>
        </div>
      </div>

      <div className="flex-1">
        <p className="text-sm font-semibold">Nedumkandam, Kalkoonthal, Kerala</p>
        <p className="font-mono text-[10px] text-[var(--color-text-muted)] tracking-wider uppercase">India</p>
      </div>

      {/* Live clock */}
      <div className="text-right">
        <p className="font-mono text-sm font-semibold tabular-nums text-[var(--color-text-primary)]">
          {time || '--:--:--'}
        </p>
        <p className="font-mono text-[10px] text-[var(--color-text-muted)] tracking-wider">IST</p>
      </div>
    </motion.div>
  );
}
