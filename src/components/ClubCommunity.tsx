/** Club & Community – Leadership card with tag system */
import ScrollReveal from './motion/ScrollReveal';
import TiltCard from './motion/TiltCard';

interface ClubRole {
  club: string;
  role: string;
  color: string;
  description: string;
}

const roles: ClubRole[] = [
  {
    club: 'IEDC (Innovation & Entrepreneurship Development Centre)',
    role: 'Tech Lead',
    color: '#6366f1', // Indigo
    description: 'Spearheaded technical initiatives and mentored project teams to foster a culture of innovation during my graduation.',
  },
  {
    club: 'Campus Radio',
    role: 'Editor & Main Coordinator',
    color: '#f43f5e', // Rose
    description: 'Managed digital content curation and led the coordination of live broadcasts, ensuring seamless campus communication.',
  },
  {
    club: 'Technical Competitions',
    role: 'Hackathon & Debugging Champion',
    color: '#eab308', // Amber/Gold
    description: 'Secured podium finishes in inter-collegiate hackathons and programming contests, specializing in Python debugging challenges.',
  },
  {
    club: 'NSS (National Service Scheme)',
    role: 'Active Volunteer',
    color: '#10b981', // Emerald
    description: 'Contributed to community development and social awareness campaigns, building strong leadership and teamwork skills.',
  },
  {
    club: 'Little Kites (IT Mission)',
    role: 'IT Volunteer',
    color: '#0ea5e9', // Sky Blue
    description: 'Promoted digital literacy and Free and Open Source Software (FOSS) awareness during high school.',
  },
];

export default function ClubCommunity() {
  return (
    <ScrollReveal>
      <TiltCard>
        <div className="bento-tile p-5 sm:p-6 lg:p-8">
          {/* Header */}
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-accent)]/10 text-lg">
              🤝
            </div>
            <div>
              <h3 className="font-display text-xl">Leadership & Community</h3>
              <p className="font-mono text-[10px] tracking-wider text-[var(--color-text-muted)] uppercase">
                Clubs & Collaborative Work
              </p>
            </div>
          </div>

          {/* Role cards */}
          <div className="space-y-3">
            {roles.map((r) => (
              <div
                key={r.club}
                className="group flex items-start gap-3 rounded-lg border border-[var(--color-border-glass)] bg-white/[0.01] p-3 transition-all hover:border-[var(--color-border-glass-hover)] hover:bg-white/[0.03]"
              >
                <div
                  className="mt-0.5 h-2 w-2 shrink-0 rounded-full"
                  style={{ background: r.color }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <p className="text-sm font-semibold">{r.club}</p>
                    <span
                      className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                      style={{
                        background: `${r.color}15`,
                        color: r.color,
                        border: `1px solid ${r.color}25`,
                      }}
                    >
                      {r.role}
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--color-text-secondary)]">
                    {r.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </TiltCard>
    </ScrollReveal>
  );
}
