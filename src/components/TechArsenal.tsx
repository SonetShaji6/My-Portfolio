/** Tech Arsenal – Core & Environment skills with 3D tilt cards */
import ScrollReveal from './motion/ScrollReveal';
import TiltCard from './motion/TiltCard';

interface Skill {
  name: string;
  icon: string;
  color: string;
}

const coreSkills: Skill[] = [
  { name: 'C', icon: '⟨/⟩', color: '#5c6bc0' },
  { name: 'Java', icon: '☕', color: '#f57c00' },
  { name: 'PHP', icon: '🐘', color: '#7b1fa2' },
  { name: 'JavaScript', icon: 'JS', color: '#fdd835' },
  { name: 'Python', icon: '🐍', color: '#43a047' },
  { name: 'SQL', icon: '🗃️', color: '#42a5f5' },
];

const envSkills: Skill[] = [
  { name: 'Fedora Linux', icon: '🐧', color: '#1565c0' },
  { name: 'System Admin', icon: '⚙️', color: '#78909c' },
  { name: 'Bash / Shell', icon: '$_', color: '#4caf50' },
  { name: 'Docker', icon: '🐋', color: '#0288d1' },
  { name: 'Git', icon: '⎇', color: '#e65100' },
  { name: 'Networking', icon: '🌐', color: '#00897b' },
];

function SkillChip({ skill }: { skill: Skill }) {
  return (
    <TiltCard className="group">
      <div className="bento-tile flex items-center gap-3 p-3 sm:p-4 transition-all">
        <div
          className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg text-base sm:text-lg font-bold"
          style={{ background: `${skill.color}15`, color: skill.color }}
        >
          {skill.icon}
        </div>
        <p className="text-sm font-semibold truncate">{skill.name}</p>
        {/* Hover glow line */}
        <div
          className="ml-auto h-1 w-6 sm:w-8 shrink-0 rounded-full opacity-0 transition-opacity group-hover:opacity-100"
          style={{ background: skill.color }}
        />
      </div>
    </TiltCard>
  );
}

export default function TechArsenal() {
  return (
    <section id="skills" className="relative px-4 py-20 sm:py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="mb-2 text-center font-mono text-xs tracking-widest text-[var(--color-accent)] uppercase">
            &lt;skills /&gt;
          </p>
          <h2 className="mb-10 sm:mb-12 text-center font-display text-3xl sm:text-4xl lg:text-5xl">
            Tech Arsenal
          </h2>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Core Languages */}
          <ScrollReveal delay={0.1}>
            <div className="mb-4 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[var(--color-accent)]"></div>
              <h3 className="font-mono text-sm font-semibold tracking-wide uppercase text-[var(--color-text-secondary)]">
                Core Languages
              </h3>
            </div>
            <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
              {coreSkills.map((skill, i) => (
                <ScrollReveal key={skill.name} delay={0.04 * i}>
                  <SkillChip skill={skill} />
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          {/* Environment & Tools */}
          <ScrollReveal delay={0.2}>
            <div className="mb-4 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[var(--color-cyber)]"></div>
              <h3 className="font-mono text-sm font-semibold tracking-wide uppercase text-[var(--color-text-secondary)]">
                Environment & Tools
              </h3>
            </div>
            <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
              {envSkills.map((skill, i) => (
                <ScrollReveal key={skill.name} delay={0.04 * i}>
                  <SkillChip skill={skill} />
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
