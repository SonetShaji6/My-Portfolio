/** Journey — BCA → MCA visual timeline */
import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import ScrollReveal from './motion/ScrollReveal';

interface JourneyStep {
  period: string;
  title: string;
  institution: string;
  description: string;
  highlights: string[];
  icon: string;
  status: 'completed' | 'current' | 'upcoming';
}

const journey: JourneyStep[] = [
  {
    period: '2022 – 2025',
    title: 'Bachelor of Computer Applications',
    institution: 'BCA Programme',
    description: 'Built a strong foundation in computer science, mastering core programming languages and database systems.',
    highlights: ['C & Java Fundamentals', 'Database Design (SQL)', 'Web Development Basics', 'Data Structures'],
    icon: '🎓',
    status: 'completed',
  },
  {
    period: '2024 – Ongoing',
    title: 'Exploring the Stack',
    institution: 'Self-Directed Learning',
    description: 'Deepened skills in Linux system administration, web security, and full-stack development through hands-on projects.',
    highlights: ['Fedora Linux & SysAdmin', 'PHP & Backend Dev', 'Web Security Basics', 'Open Source Contributions'],
    icon: '🔧',
    status: 'current',
  },
  {
    period: '2025 – Present',
    title: 'Master of Computer Applications',
    institution: 'RIT Kottayam',
    description: 'Currently pursuing MCA at Rajiv Gandhi Institute of Technology, Kottayam — deepening expertise in advanced computing and security.',
    highlights: ['Advanced Algorithms', 'Web Security & Pen-Testing', 'Cloud & DevOps', 'Research & Development'],
    icon: '🚀',
    status: 'current',
  },
  {
    period: 'The Road Ahead',
    title: 'Full-Stack Security Engineer',
    institution: 'Career Goal',
    description: 'Aspiring to combine full-stack development mastery with deep web security expertise.',
    highlights: ['Security Engineering', 'System Architecture', 'Leadership', 'Innovation'],
    icon: '🎯',
    status: 'upcoming',
  },
];

const statusColors = {
  completed: 'bg-[var(--color-accent)]',
  current: 'bg-[var(--color-cyber)]',
  upcoming: 'bg-[var(--color-text-muted)]',
};

const statusBorders = {
  completed: 'border-[var(--color-accent)]',
  current: 'border-[var(--color-cyber)]',
  upcoming: 'border-[var(--color-text-muted)]',
};

function TimelineDot({ status }: { status: 'completed' | 'current' | 'upcoming' }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' });

  return (
    <div ref={ref} className="relative flex items-center justify-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.2 }}
        className={`relative z-10 h-4 w-4 rounded-full border-2 ${statusBorders[status]} bg-[var(--color-bg-primary)]`}
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className={`absolute inset-1 rounded-full ${statusColors[status]}`}
        />
      </motion.div>
      {status === 'current' && (
        <motion.div
          animate={{ scale: [1, 2, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute h-4 w-4 rounded-full bg-[var(--color-cyber)]"
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
    <section id="journey" className="relative px-4 py-20 sm:py-24 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <p className="mb-2 text-center font-mono text-xs tracking-widest text-[var(--color-accent)] uppercase">
            ~/journey
          </p>
          <h2 className="mb-4 text-center font-display text-3xl sm:text-4xl lg:text-5xl">
            The Path So Far
          </h2>
          <p className="mx-auto mb-12 sm:mb-14 max-w-md text-center text-sm text-[var(--color-text-secondary)]">
            From BCA foundations to MCA at RIT Kottayam — a continuous journey of growth.
          </p>
        </ScrollReveal>

        <div ref={containerRef} className="relative">
          {/* Line track — mobile: left-6, desktop: center */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-[var(--color-border-glass)] md:left-1/2 md:-translate-x-px" />
          <motion.div
            className="absolute left-6 top-0 w-px bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-cyber)] md:left-1/2 md:-translate-x-px"
            style={{ height: lineHeight }}
          />

          <div className="space-y-8 sm:space-y-10">
            {journey.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <ScrollReveal
                  key={i}
                  delay={i * 0.08}
                  direction="up"
                  className="relative"
                >
                  <div className={`flex items-start gap-4 sm:gap-6 md:gap-10 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Card */}
                    <div className={`ml-12 sm:ml-14 flex-1 md:ml-0 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                      <div className={`bento-tile p-4 sm:p-5 transition-all ${step.status === 'current' ? 'border-[var(--color-cyber)]/15' : ''}`}>
                        <div className={`mb-2 flex items-center gap-2 flex-wrap ${isLeft ? 'md:justify-end' : ''}`}>
                          <span className="text-lg sm:text-xl">{step.icon}</span>
                          <span className={`rounded-full px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider ${
                            step.status === 'completed' ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent-light)]'
                            : step.status === 'current' ? 'bg-[var(--color-cyber)]/10 text-[var(--color-cyber)]'
                            : 'bg-white/5 text-[var(--color-text-muted)]'
                          }`}>
                            {step.status === 'current' ? '● In Progress' : step.status === 'completed' ? '✓ Complete' : '○ Next'}
                          </span>
                        </div>
                        <p className="mb-1 font-mono text-[10px] tracking-wider text-[var(--color-text-muted)] uppercase">
                          {step.period}
                        </p>
                        <h3 className="mb-1 font-display text-base sm:text-lg">{step.title}</h3>
                        <p className="mb-2 sm:mb-3 text-xs font-medium text-[var(--color-accent-light)]">{step.institution}</p>
                        <p className="mb-3 text-xs leading-relaxed text-[var(--color-text-secondary)]">
                          {step.description}
                        </p>
                        <div className={`flex flex-wrap gap-1.5 ${isLeft ? 'md:justify-end' : ''}`}>
                          {step.highlights.map((h) => (
                            <span key={h} className="rounded-full border border-[var(--color-border-glass)] bg-white/[0.02] px-2 py-0.5 font-mono text-[10px] text-[var(--color-text-secondary)]">
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Dot — mobile: left-4, desktop: center */}
                    <div className="absolute left-4 top-5 md:left-1/2 md:-translate-x-1/2">
                      <TimelineDot status={step.status} />
                    </div>

                    {/* Spacer for desktop alternating layout */}
                    <div className="hidden flex-1 md:block" />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
