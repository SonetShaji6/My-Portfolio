/** Studio-style floating navbar with mobile hamburger */
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#about');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-35% 0px -60% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 640) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[calc(100%-2rem)] sm:w-auto"
    >
      <motion.div
        layout
        animate={{
          paddingBlock: scrolled ? 6 : 10,
          paddingInline: scrolled ? 12 : 20,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="glass flex items-center justify-between sm:justify-start gap-1 rounded-full shadow-lg shadow-black/20"
      >
        {/* Logo */}
        <a href="#about" className="mr-2 flex items-center gap-2 pr-2 sm:pr-3 sm:mr-3 border-r border-[var(--color-border-glass)]">
          <span className="font-display text-lg text-gradient">S</span>
        </a>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-0.5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.href)}
              className="relative rounded-full px-3 py-1.5 text-xs font-medium font-mono tracking-wide transition-colors"
              style={{ color: active === link.href ? '#eeeef2' : '#6b6b80' }}
            >
              {active === link.href && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full bg-[var(--color-accent)] opacity-[0.12]"
                  transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="sm:hidden flex flex-col items-center justify-center w-8 h-8 gap-1"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            className="block w-4 h-[1.5px] bg-[var(--color-text-primary)] rounded-full"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-4 h-[1.5px] bg-[var(--color-text-primary)] rounded-full"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            className="block w-4 h-[1.5px] bg-[var(--color-text-primary)] rounded-full"
          />
        </button>
      </motion.div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="sm:hidden mt-2 glass rounded-2xl p-3 shadow-lg shadow-black/30"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => { setActive(link.href); setMobileOpen(false); }}
                className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-mono tracking-wide transition-colors"
                style={{
                  color: active === link.href ? '#eeeef2' : '#6b6b80',
                  background: active === link.href ? 'rgba(124, 92, 252, 0.1)' : 'transparent',
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
