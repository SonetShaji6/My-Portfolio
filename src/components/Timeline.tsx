/** Journey — BCA → MCA visual timeline with brutalist styling */
import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import ScrollReveal from './motion/ScrollReveal';

interface JourneyStep {
  period: string;
  title: string;
  institution: string;
  description: string;
  highlights: string[];
  status: 'completed' | 'current' | 'upcoming';
}

const journey: JourneyStep[] = [
  {
    period: '2022 – 2025',
    title: 'BCA Programme',
    institution: 'Bachelor of Computer Applications',
    description: 'Built a strong foundation in computer science, mastering core programming languages and database systems.',
    highlights: ['C & Java', 'SQL', 'Web Dev', 'Data Structures'],
    status: 'completed',
  },
  {
    period: '2024 – Ongoing',
    title: 'Exploring the Stack',
    institution: 'Self-Directed Learning',
    description: 'Deepened skills in Linux system administration, web security, and full-stack development through hands-on projects.',
    highlights: ['Linux', 'PHP/Backend', 'Web Security', 'Open Source'],
    status: 'current',
  },
  {
    period: '2025 – Present',
    title: 'Master of Computer Applications',
    institution: 'RIT Kottayam',
    description: 'Currently pursuing MCA — deepening expertise in advanced computing and security.',
    highlights: ['Algorithms', 'Sys Architecture', 'DevOps'],
    status: 'current',
  },
  {
    period: 'The Road Ahead',
    title: 'Full-Stack Security Engineer',
    institution: 'Career Goal',
    description: 'Aspiring to combine full-stack development mastery with deep web security expertise.',
    highlights: ['Sec Eng', 'Leadership', 'Innovation'],
    status: 'upcoming',
  },
];

function TimelineDot({ status }: { status: 'completed' | 'current' | 'upcoming' }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' });

  return (
    <div ref={ref} className="relative flex items-center justify-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.2 }}
        className={`relative z-10 h-6 w-6 border-2 flex items-center justify-center bg-[var(--color-bg-primary)] ${
          status === 'completed' ? 'border-[var(--color-border-subtle)]' : 
          status === 'current' ? 'border-[var(--color-accent)]' : 
          'border-[var(--color-border-subtle)] border-dashed'
        }`}
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className={`h-2 w-2 ${
            status === 'completed' ? 'bg-white' : 
            status === 'current' ? 'bg-[var(--color-accent)]' : 
            'bg-none'
          }`}
        />
      </motion.div>
      {status === 'current' && (
        <motion.div
          animate={{ scale: [1, 2, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute h-6 w-6 bg-[var(--color-accent)]"
        />
      )}
    </div>
  );
}

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 20%'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="relative w-full">
      <ScrollReveal>
        <p className="mb-2 text-center font-mono text-xs tracking-widest text-[var(--color-accent)] uppercase">
          ~/journey
        </p>
        <h2 className="mb-14 text-center font-display text-4xl sm:text-5xl lg:text-6xl uppercase">
          The Path So Far
        </h2>
      </ScrollReveal>

      <div ref={containerRef} className="relative max-w-5xl mx-auto">
        {/* Line track */}
        <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-[var(--color-border-subtle)] md:left-1/2 md:-translate-x-[1px]" />
        <motion.div
          className="absolute left-6 top-0 w-[2px] bg-[var(--color-accent)] md:left-1/2 md:-translate-x-[1px]"
          style={{ height: lineHeight }}
        />

        <div className="space-y-12 sm:space-y-16">
          {journey.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <ScrollReveal
                key={i}
                delay={i * 0.1}
                direction={isLeft ? 'right' : 'left'}
                className="relative"
              >
                <div className={`flex items-start md:items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Content Container */}
                  <div className={`ml-16 md:ml-0 md:w-[45%] ${isLeft ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                    <div className="group relative solid-card hover-red-border p-6 sm:p-8 transition-colors duration-500">
                      {/* Background overlay */}
                      <div className="absolute inset-0 bg-[var(--color-accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        <div className={`flex items-center gap-3 mb-4 ${isLeft ? 'md:justify-end' : ''}`}>
                          <span className={`px-2 py-1 font-mono text-[10px] uppercase font-bold tracking-widest border ${
                            step.status === 'completed' ? 'border-white text-white bg-white/10' :
                            step.status === 'current' ? 'border-[var(--color-accent)] text-[var(--color-accent)] bg-[var(--color-accent)]/10' :
                            'border-[var(--color-border-subtle)] text-[var(--color-text-secondary)]'
                          }`}>
                            {step.period}
                          </span>
                        </div>
                        
                        <h3 className={`font-display text-2xl uppercase tracking-wider mb-2 text-white group-hover:text-[var(--color-accent)] transition-colors duration-300`}>
                          {step.title}
                        </h3>
                        <p className={`font-mono text-xs uppercase tracking-widest text-[var(--color-text-secondary)] mb-4`}>
                          {step.institution}
                        </p>
                        
                        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed font-light mb-6">
                          {step.description}
                        </p>

                        <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : ''}`}>
                          {step.highlights.map((h) => (
                            <span key={h} className="bg-[var(--color-bg-primary)] px-2 py-1 border border-[var(--color-border-subtle)] font-mono text-[10px] text-white uppercase tracking-wider">
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-[13px] top-8 md:top-auto md:static md:w-[10%] flex justify-center">
                    <TimelineDot status={step.status} />
                  </div>

                  {/* Spacer for desktop layout */}
                  <div className="hidden md:block md:w-[45%]"></div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
