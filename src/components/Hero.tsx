/** Hero / About — Bento profile tile with glowing aura + intro + typewriter */
import { motion } from 'motion/react';
import Magnetic from './motion/Magnetic';
import ScrollReveal from './motion/ScrollReveal';
import Typewriter from './Typewriter';

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen px-4 pt-28 pb-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* ── Top: Profile + Intro ── */}
        <div className="grid gap-4 lg:grid-cols-3 lg:gap-5">
          {/* Profile Image tile */}
          <ScrollReveal className="lg:col-span-1" delay={0.1}>
            <Magnetic strength={0.15} radius={200} className="h-full">
              <div className="bento-tile flex h-full min-h-[320px] flex-col items-center justify-center p-6 overflow-hidden">
                {/* Aura ring */}
                <div className="relative mb-5">
                  <div className="absolute -inset-4 rounded-full profile-aura opacity-60 blur-md"></div>
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div className="relative h-36 w-36 overflow-hidden rounded-full border-2 border-[var(--color-accent)]/30 lg:h-44 lg:w-44">
                      <img
                        src="SonetPhoto.jpg"
                        alt="Sonet — Developer"
                        className="h-full w-full object-cover"
                        loading="eager"
                      />
                    </div>
                  </motion.div>
                </div>
                <h2 className="font-display text-2xl text-gradient lg:text-3xl">Sonet</h2>
                <p className="mt-1 font-mono text-xs text-[var(--color-text-secondary)] tracking-wider">MCA Student · Developer</p>
              </div>
            </Magnetic>
          </ScrollReveal>

          {/* Intro tile */}
          <ScrollReveal className="lg:col-span-2" delay={0.2}>
            <div className="bento-tile flex h-full flex-col justify-center p-6 sm:p-8 lg:p-10">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-2 font-mono text-xs text-[var(--color-accent)] tracking-widest uppercase"
              >
                Hello, World —
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="font-display text-3xl leading-tight sm:text-4xl lg:text-5xl xl:text-6xl"
              >
                Hi, I'm <span className="text-gradient">Sonet</span>,
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.5 }}
                className="mt-3 min-h-[2.2em] sm:min-h-[2.5em]"
              >
                <p className="text-sm sm:text-base text-[var(--color-text-secondary)]">
                  I am a <Typewriter />
                </p>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
                className="mt-4 max-w-md text-sm leading-relaxed text-[var(--color-text-secondary)]"
              >
                A BCA graduate now pursuing MCA at RIT Kottayam — passionate about
                full-stack development, Linux system administration, and web security.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="mt-6 flex flex-wrap gap-3"
              >
                <Magnetic strength={0.2}>
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110 glow"
                  >
                    View Projects
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </a>
                </Magnetic>
                <a
                  href="#contact"
                  className="glass glass-hover inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium transition-all"
                >
                  Get In Touch
                </a>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>

        {/* ── Status bar ── */}
        <ScrollReveal delay={0.3}>
          <div className="bento-tile mt-4 grid grid-cols-3 gap-4 p-5 lg:mt-5">
            {[
              { label: 'Focus', value: 'Full-Stack', icon: '⚡' },
              { label: 'Education', value: 'MCA @ RIT', icon: '🎓' },
              { label: 'System', value: 'Fedora Linux', icon: '🐧' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="mb-1 block text-xl sm:text-2xl">{stat.icon}</span>
                <p className="font-mono text-xs sm:text-sm font-semibold">{stat.value}</p>
                <p className="font-mono text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
