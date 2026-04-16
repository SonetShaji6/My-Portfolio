/** Solid, Minimal Navbar with Bold Red Accents */
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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        scrolled ? 'bg-[var(--color-bg-primary)]/90 backdrop-blur-md border-b border-[var(--color-border-subtle)]' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#about" className="group flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center bg-[var(--color-accent)] text-white font-display font-bold text-xl group-hover:bg-white group-hover:text-black transition-colors duration-300">
              S
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden sm:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActive(link.href)}
                className="group relative font-mono text-xs uppercase tracking-widest transition-colors hover:text-white"
                style={{ color: active === link.href ? '#ffffff' : 'var(--color-text-secondary)' }}
              >
                {link.label}
                {/* Active Underline */}
                {active === link.href && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 h-[2px] w-full bg-[var(--color-accent)]"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                {/* Hover Underline */}
                {active !== link.href && (
                  <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full opacity-50" />
                )}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="sm:hidden flex flex-col items-center justify-center w-8 h-8 gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px] bg-white transition-colors"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-[2px] bg-white transition-colors"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px] bg-white transition-colors"
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="sm:hidden overflow-hidden bg-[var(--color-bg-primary)] border-b border-[var(--color-border-subtle)]"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => { setActive(link.href); setMobileOpen(false); }}
                  className="font-display text-2xl uppercase tracking-wider relative inline-block w-fit"
                  style={{
                    color: active === link.href ? '#ffffff' : 'var(--color-text-secondary)',
                  }}
                >
                  {link.label}
                  {active === link.href && (
                    <span className="absolute top-1/2 -right-4 w-2 h-2 bg-[var(--color-accent)] rounded-full -translate-y-1/2" />
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
