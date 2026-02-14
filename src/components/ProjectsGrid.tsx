/** Projects grid — Bento-style tilt cards */
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
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'QuickLearn',
    description: 'A comprehensive LMS for the MCA LBS crash course featuring mock tests, video classes via signed URLs, and a payment-proof admin approval system.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
    tags: ['Next.js 16', 'Supabase', 'TypeScript', 'Tailwind CSS'],
    link: '#', // Add your repo link here
    featured: true,
  },
  {
    title: 'LifeSync',
    description: 'A MERN-stack productivity ecosystem featuring PIN-protected private storage, family group collaboration, and AI-driven study/work plan generation.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    link: '#',
    featured: true,
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

const tagColors: Record<string, string> = {
  React: 'bg-sky-500/10 text-sky-400 border-sky-500/15',
  TypeScript: 'bg-blue-500/10 text-blue-400 border-blue-500/15',
  'Next.js': 'bg-white/5 text-white/80 border-white/10',
  Astro: 'bg-orange-500/10 text-orange-400 border-orange-500/15',
  Rust: 'bg-amber-500/10 text-amber-400 border-amber-500/15',
};

function getTagClass(tag: string) {
  return tagColors[tag] ?? 'bg-purple-500/10 text-purple-300 border-purple-500/15';
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const card = (
    <TiltCard className="group h-full">
      <div className="bento-tile flex h-full flex-col overflow-hidden transition-all">
        {/* Image */}
        <div className="relative h-40 sm:h-44 overflow-hidden rounded-t-[1.25rem]">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-card)] via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <h3 className="mb-1.5 font-display text-base sm:text-lg">{project.title}</h3>
          <p className="mb-4 flex-1 text-xs leading-relaxed text-[var(--color-text-secondary)]">
            {project.description}
          </p>

          {/* Tags */}
          <div className="mb-3 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`rounded-full border px-2 py-0.5 font-mono text-[10px] font-medium ${getTagClass(tag)}`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Link */}
          <a
            href={project.link}
            className="inline-flex items-center gap-1 font-mono text-xs font-medium text-[var(--color-accent-light)] transition-colors hover:text-white"
          >
            view_project →
          </a>
        </div>
      </div>
    </TiltCard>
  );

  // Only wrap in Parallax on non-touch devices
  if (isTouch) return card;
  return <Parallax offset={12 + index * 4}>{card}</Parallax>;
}

export default function ProjectsGrid() {
  return (
    <section id="projects" className="relative px-4 py-20 sm:py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="mb-2 text-center font-mono text-xs tracking-widest text-[var(--color-accent)] uppercase">
            ./projects
          </p>
          <h2 className="mb-4 text-center font-display text-3xl sm:text-4xl lg:text-5xl">
            Featured Work
          </h2>
          <p className="mx-auto mb-12 sm:mb-14 max-w-md text-center text-sm text-[var(--color-text-secondary)]">
            A selection of projects that showcase my full-stack development skills.
          </p>
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.08}>
              <ProjectCard project={project} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
