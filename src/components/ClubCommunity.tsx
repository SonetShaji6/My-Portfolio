/** Club & Community – Leadership card with brutalist theme */
import ScrollReveal from './motion/ScrollReveal';

interface ClubRole {
  club: string;
  role: string;
  description: string;
}

const roles: ClubRole[] = [
  {
    club: 'IEDC (Innovation & Entrepreneurship Development Centre)',
    role: 'Tech Lead',
    description: 'Spearheaded technical initiatives and mentored project teams to foster a culture of innovation during my graduation.',
  },
  {
    club: 'Campus Radio',
    role: 'Editor & Main Coordinator',
    description: 'Managed digital content curation and led the coordination of live broadcasts, ensuring seamless campus communication.',
  },
  {
    club: 'Technical Competitions',
    role: 'Hackathon & Debugging Champion',
    description: 'Secured podium finishes in inter-collegiate hackathons and programming contests, specializing in Python debugging challenges.',
  },
  {
    club: 'NSS',
    role: 'Active Volunteer',
    description: 'Contributed to community development and social awareness campaigns, building strong leadership and teamwork skills.',
  },
];

export default function ClubCommunity() {
  return (
    <ScrollReveal>
      <div className="solid-card hover-red-border p-6 sm:p-8 relative overflow-hidden group">
        
        {/* Subtle background element */}
        <div className="absolute -bottom-8 -right-8 text-9xl font-display text-[var(--color-bg-primary)] opacity-[0.2] pointer-events-none stroke-current" style={{ WebkitTextStroke: '1px var(--color-border-subtle)' }}>
           +
        </div>

        {/* Header */}
        <div className="mb-8 border-b border-[var(--color-border-subtle)] pb-4 group-hover:border-[var(--color-accent)] transition-colors duration-500">
          <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-widest text-white group-hover:text-[var(--color-accent)] transition-colors duration-300">Leadership</h3>
          <p className="font-mono text-xs tracking-widest text-[var(--color-text-secondary)] uppercase mt-2">
            Clubs & Collaborative Work
          </p>
        </div>

        {/* Role list */}
        <div className="space-y-6 relative z-10">
          {roles.map((r, i) => (
            <div
              key={r.club}
              className="group/role flex items-start gap-4"
            >
              <div className="mt-1 font-mono text-xs text-[var(--color-text-muted)] group-hover/role:text-[var(--color-accent)] transition-colors">
                 0{i + 1}
              </div>
              <div className="flex-1 min-w-0 border-l border-[var(--color-border-subtle)] pl-4 group-hover/role:border-[var(--color-accent)] transition-colors">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <p className="text-sm font-bold uppercase tracking-wide text-white group-hover/role:text-[var(--color-accent)] transition-colors">{r.club}</p>
                  <span className="bg-[var(--color-bg-primary)] border border-[var(--color-border-hover)] px-2 py-0.5 text-[10px] font-mono tracking-wider uppercase text-[var(--color-text-secondary)]">
                    {r.role}
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-[var(--color-text-secondary)]">
                  {r.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
