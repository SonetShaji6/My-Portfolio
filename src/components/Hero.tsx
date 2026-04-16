/** Hero / About — Asymmetrical Layout */
import { motion } from 'motion/react';
import Magnetic from './motion/Magnetic';
import ScrollReveal from './motion/ScrollReveal';
import Typewriter from './Typewriter';

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen pt-32 pb-12 px-4 sm:px-6 lg:px-12 flex flex-col justify-center">
      <div className="mx-auto max-w-7xl w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 relative z-10">
            <ScrollReveal delay={0.1}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <p className="font-mono text-sm sm:text-base text-[var(--color-accent)] uppercase tracking-[0.3em] mb-4">
                  Systems & Web
                </p>
                <h1 className="font-display text-[3.5rem] leading-[1.1] sm:text-7xl lg:text-8xl xl:text-[7rem] tracking-tight uppercase">
                  SONET <br/>
                  <span className="text-[var(--color-accent)]">SHAJI</span>.
                </h1>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-8 relative pl-6 border-l-2 border-[var(--color-border-subtle)] group hover:border-[var(--color-accent)] transition-colors duration-500">
                <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] font-light max-w-lg mb-2">
                  I am a <Typewriter />
                </p>
                <p className="text-sm text-[var(--color-text-muted)] max-w-md leading-relaxed">
                  MCA student at RIT Kottayam. Passionate about building robust web applications, exploring Linux systems, and diving deep into cybersecurity.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-4 items-center">
                <Magnetic strength={0.2}>
                  <a href="#projects" className="group relative inline-flex h-12 items-center justify-center overflow-hidden bg-[var(--color-text-primary)] px-8 font-medium text-black duration-300 hover:bg-[var(--color-accent)] hover:text-white transition-colors">
                    <span className="relative font-mono uppercase tracking-wider text-sm font-bold">View Work</span>
                  </a>
                </Magnetic>

                <a href="#contact" className="group flex items-center gap-2 px-6 py-3 font-mono text-sm uppercase tracking-widest text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]">
                  <span className="relative">
                    Contact Me
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Image/Visual Column */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <ScrollReveal delay={0.2}>
              <Magnetic strength={0.05} radius={100}>
                <motion.div 
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="absolute -inset-2 bg-[var(--color-accent)] opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-2xl z-0 rounded-full" />
                  
                  <div className="relative z-10 overflow-hidden w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-full border border-[var(--color-border-subtle)] transition-colors duration-500 group-hover:border-[var(--color-accent)] grayscale group-hover:grayscale-0">
                    <img
                      src="SonetPhoto.jpg"
                      alt="Sonet Shaji"
                      className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                      loading="eager"
                    />
                  </div>
                </motion.div>
              </Magnetic>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
