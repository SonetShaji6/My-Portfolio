/** Projects grid — Bold brutalist cards */
import { useEffect, useState } from 'react';
import ScrollReveal from './motion/ScrollReveal';
import TiltCard from './motion/TiltCard';
import Parallax from './motion/Parallax';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: 'QuickLearn',
    description: 'A comprehensive LMS for the MCA LBS crash course featuring mock tests, video classes via signed URLs, and a payment-proof admin approval system.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
    tags: ['Next.js 16', 'Supabase', 'TypeScript', 'Tailwind CSS'],
    link: '#',
  },
  {
    title: 'LifeSync',
    description: 'A MERN-stack productivity ecosystem featuring PIN-protected private storage, family group collaboration, and AI-driven study/work plan generation.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    link: '#',
  },
  {
    title: 'RelifCamp-Nexus (DSTR-M)',
    description: 'A mission-critical Disaster Relief Management System providing specialized dashboards for victim allocation, resource tracking, and automated reporting.',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&q=80',
    tags: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
    link: '#',
  },
  {
    title: 'Spotify Clone V2',
    description: 'A high-fidelity music streaming replica focusing on audio streaming architecture and responsive UI/UX using the MERN stack.',
    image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&q=80',
    tags: ['MERN Stack', 'JavaScript', 'Context API'],
    link: '#',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const card = (
    <TiltCard className="group h-full">
      <div className="solid-card hover-red-border flex h-full flex-col overflow-hidden relative cursor-crosshair group-hover:-translate-y-2 transition-transform duration-500">
        
        {/* Number Badge */}
        <div className="absolute top-4 left-4 z-20 bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] px-2 py-1 flex items-center justify-center font-display text-xl text-white group-hover:text-[var(--color-accent)] group-hover:border-[var(--color-accent)] transition-colors">
          0{index + 1}
        </div>

        {/* Image */}
        <div className="relative h-48 sm:h-64 overflow-hidden border-b border-[var(--color-border-subtle)] group-hover:border-[var(--color-accent)] transition-colors">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
          />
          {/* Red Hue Overlay on idle */}
          <div className="absolute inset-0 mix-blend-multiply bg-[var(--color-accent-dark)] opacity-40 group-hover:opacity-0 transition-opacity duration-500" />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6 sm:p-8">
          <h3 className="mb-2 font-display uppercase tracking-widest text-xl sm:text-2xl text-white group-hover:text-[var(--color-accent)] transition-colors">
             {project.title}
          </h3>
          <p className="mb-6 flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)] font-mono line-clamp-3">
            {project.description}
          </p>

          {/* Tags */}
          <div className="mb-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] px-2.5 py-1 font-mono text-[10px] tracking-wider uppercase text-[var(--color-text-muted)] group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-text-primary)] transition-colors"
                style={{ transitionDelay: `${Math.random() * 100}ms` }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Link */}
          <a
            href={project.link}
            className="group/link mt-auto inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-accent)]"
          >
            Access_Repository
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </TiltCard>
  );

  // Focus effect for parallax offset
  if (isTouch) return card;
  return <Parallax offset={20 + index * 5}>{card}</Parallax>;
}

export default function ProjectsGrid() {
  return (
    <section id="projects" className="relative px-4 py-24 sm:py-32 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center mb-16">
            <span className="font-mono text-xs tracking-[0.2em] text-[var(--color-accent)] border border-[var(--color-accent)] px-4 py-2 mb-6">
               WORK_DIR
            </span>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tighter text-white">
              Selected Projects
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:gap-12">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.1}>
              <ProjectCard project={project} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
